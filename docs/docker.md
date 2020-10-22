---
id: docker
title: docker
---

## web前端项目单独打包

- 使用 `nginx` 镜像

`my.conf` 来源于 [gin-vue-admin](https://github.com/flipped-aurora/gin-vue-admin) 的[my.conf](https://github.com/flipped-aurora/gin-vue-admin/blob/master/.docker-compose/nginx/conf.d/my.conf)

 ```shell
server {
    listen       8080;
    server_name localhost;

    #charset koi8-r;
    #access_log  logs/host.access.log  main;

    location / {
        root /usr/share/nginx/html;
        add_header Cache-Control 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0';
        try_files $uri $uri/ /index.html;
    }

    location /api {
        proxy_set_header Host $http_host;
        proxy_set_header  X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        rewrite ^/api/(.*)$ /$1 break;  #重写
        proxy_pass http://127.0.0.1:8888; # 设置代理服务器的协议和地址
     }

    location /api/swagger/index.html {
        proxy_pass http://127.0.0.1:8888/swagger/index.html;
     }
 }
 ```

`Dockerfile` 来源于 [gin-vue-admin](https://github.com/flipped-aurora/gin-vue-admin) 的[dockerfile_web](https://github.com/flipped-aurora/gin-vue-admin/blob/master/dockerfile_web)

```dockerfile
# 声明镜像来源为node:12.16.1
FROM node:12.16.1

# 声明工作目录
WORKDIR /web/

# 拷贝web项目到当前工作目录
COPY web/ .

# 通过npm下载cnpm
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org

# 使用cnpm进行安装依赖
RUN cnpm install || npm install

# 使用npm run build命令打包web项目
RUN npm run build

# ======= 以下为多阶段构建 =======

# 声明镜像来源为nginx:alpine, alpine 镜像小
FROM nginx:alpine

# 镜像编写者及邮箱
LABEL MAINTAINER="SliverHorn@sliver_horn@qq.com"

# 从.docker-compose/nginx/conf.d/目录拷贝my.conf到容器内的/etc/nginx/conf.d/my.conf
COPY .docker-compose/nginx/conf.d/my.conf /etc/nginx/conf.d/my.conf

# 从第一阶段进行拷贝文件
COPY --from=0 /web/dist /usr/share/nginx/html
```

## server项目单独打包

`Dockerfile` 来源于 [gin-vue-admin](https://github.com/flipped-aurora/gin-vue-admin) 的 [Dockerfile](https://github.com/flipped-aurora/gin-vue-admin/blob/gva_gormv2_dev/server/Dockerfile)

```dockerfile
# 声明镜像来源为golang:alpine
FROM golang:alpine

# 设置环境变量GO111MODULE为on
ENV GO111MODULE=on

# 设置环境变量GOPROXY为https://goproxy.io,direct
ENV GOPROXY=https://goproxy.io,direct

# 声明工作目录
WORKDIR /go/src/gin-vue-admin

# 拷贝server项目到工作目录
COPY server/ ./

# go env为查看go的环境变量, go build -o server . 为打包项目,二进制
RUN go env && go build -o server .

# ======= 以下为多阶段构建 =======

# 声明镜像来源为alpine:latest
FROM alpine:latest

# 镜像编写者及邮箱
LABEL MAINTAINER="SliverHorn@sliver_horn@qq.com"

# 声明工作目录
WORKDIR /go/src/gin-vue-admin

# 拷贝打包好的server二进制文件到当前工作目录
COPY --from=0 /go/src/gin-vue-admin/server ./

# 拷贝config.yaml配置文件到当前工作目录
COPY --from=0 /go/src/gin-vue-admin/config.yaml ./

# 拷贝resource静态文件夹到当前工作目录
COPY --from=0 /go/src/gin-vue-admin/resource ./resource

# 运行打包好的二进制
ENTRYPOINT ./server
```

## 根据Dockerfile生成Docker镜像

```shell
# -f 指定Dockerfile文件,默认为Dockerfile
# -t 镜像名:版本tag
# . 一定必须肯定务必加上
docker build -t gva-server:1.0 .
```

## 运行Docker镜像

```shell
# -d 后台运行
# -p 映射端口:内部端口
# -name 容器名字
# gva-server:1.0为docker build时的-t的参数
docker run -d -p 8888:8888 --name gva-server-v1 gva-server:1.0

# -it 以可交互模式运行并进入容器, 使用快捷键Ctrl + p + q即后台运行程序,Ctrl+c为退出容器
# -p 映射端口:内部端口
# -name 容器名字
# gva-server:1.0为docker build时的-t的参数
docker run -it -p 8888:8888 --name gva-server-v1 gva-server:1.0
```
