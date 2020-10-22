---
id: docker-compose
title: docker-compose
---

## Web使用Docker打包示例

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

## Server使用Docker打包示例

`server-handle.sh` 就是为了移除容器的旧配置文件,新增适配了docker-compose的脚本

- `mysql` -> `path` 的 `mysql` 会自动获取mysql服务的容器内部ip及端口
- `redis` -> `path` 的 `redis` 会自动获取redis服务的容器内部ip

```shell
#! /bin/bash

rm -f ./config.yaml
# 生成config.yaml文件, 用于docker-compose的使用
touch ./config.yaml
filename="./config.yaml"
cat>"${filename}"<<EOF
# Gin-Vue-Admin Global Configuration
# jwt configuration
jwt:
  signing-key: 'qmPlus'
# zap logger configuration
zap:
  level: 'info'
  format: 'console'
  prefix: '[GIN-VUE-ADMIN]'
  director: 'log'
  link-name: 'latest_log'
  show-line: true
  encode-level: 'LowercaseColorLevelEncoder'
  stacktrace-key: 'stacktrace'
  log-in-console: true
# redis configuration
redis:
  db: 0
  addr: '177.7.0.14:6379'
  password: ''
# email configuration
email:
  to: 'xxx@qq.com'
  port: 465
  from: 'xxx@163.com'
  host: 'smtp.163.com'
  is-ssl: true
  secret: 'xxx'
  nickname: 'test'
# casbin configuration
casbin:
  model-path: './resource/rbac_model.conf'
# system configuration
system:
  env: 'public'  # Change to "develop" to skip authentication for development mode
  addr: 8888
  db-type: 'mysql'
  oss-type: 'local'
  config-env: 'GVA_CONFIG'
  need-init-data: true
  use-multipoint: false
# captcha configuration
captcha:
  key-long: 6
  img-width: 240
  img-height: 80
# mysql connect configuration
mysql:
  path: '177.7.0.13:3306'
  config: 'charset=utf8mb4&parseTime=True&loc=Local'
  db-name: 'qmPlus'
  username: 'root'
  password: 'Aa@6447985'
  max-idle-conns: 10
  max-open-conns: 10
  log-mode: false
# sqlite connect configuration (sqlite需要gcc支持 windows用户需要自行安装gcc)
sqlite:
  path: 'db.db'
  max-idle-conns: 10
  max-open-conns: 10
  logger: true
# Sqlserver connect configuration
sqlserver:
  path: 'localhost:9930'
  db-name: 'gorm'
  username: 'gorm'
  password: 'LoremIpsum86'
  max-idle-conns: 10
  max-open-conns: 10
  logger: true
# Postgresql connect configuration
postgresql:
  host: '127.0.0.1'
  port: '9920'
  config: 'sslmode=disable TimeZone=Asia/Shanghai'
  db-name: 'gorm'
  username: 'gorm'
  password: 'gorm'
  max-idle-conns: 10
  max-open-conns: 10
  prefer-simple-protocol: true
  logger: false
# local configuration
local:
  path: 'uploads/file'
# qiniu configuration (请自行七牛申请对应的 公钥 私钥 bucket 和 域名地址)
qiniu:
  zone: 'ZoneHuadong'
  bucket: 'qm-plus-img'
  img-path: 'http://qmplusimg.henrongyi.top'
  use-https: false
  access-key: '25j8dYBZ2wuiy0yhwShytjZDTX662b8xiFguwxzZ'
  secret-key: 'pgdbqEsf7ooZh7W3xokP833h3dZ_VecFXPDeG5JY'
  use-cdn-domains: false
EOF
```

`Dockerfile` 来源于 [gin-vue-admin](https://github.com/flipped-aurora/gin-vue-admin) 的 [dockerfile_server](https://github.com/flipped-aurora/gin-vue-admin/blob/master/dockerfile_server)

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

# 查看config.yaml配置文件
RUN cat ./config.yaml

# 拷贝.docker-compose/shell/server-handle.sh脚本文件到工作目录
COPY .docker-compose/shell/server-handle.sh .

# ls -al命令的作用是查看工作目录的所有文件, 这步目的是检验脚本文件是否拷贝成功
RUN ls -al

# 执行server-handle.sh脚本
RUN sh ./server-handle.sh

# 删除server-handle.sh脚本
RUN rm -f server-handle.sh

# 查看config.yaml配置文件,查看通过脚本文件替换config.yaml配置文件
RUN cat ./config.yaml

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

## docker-compose.yaml详解

```yaml
version: "3.8"

# 声明一个名为network的networks,subnet为network的子网地址,默认网关是177.7.0.1
networks:
  network:
    ipam:
      driver: default
      config:
        - subnet: '177.7.0.0/16'

services:
  # web服务
  web:
    build:
      context: ./
      # 指定dockerfile启动容器
      dockerfile: ./dockerfile_web
    # 自定义容器名
    container_name: gva-web
    # 容器启动失败是否重启
    restart: always
    # 映射端口
    ports:
      - '8080:8080'
    # web服务依赖于server服务
    depends_on:
      - server
    command: [ 'nginx-debug', '-g', 'daemon off;' ]
    networks:
      network:
        # 在network网络下的容器内部的Ipv4地址
        ipv4_address: 177.7.0.11

  # server服务
  server:
    build:
      context: ./
      # 指定dockerfile启动容器
      dockerfile: ./dockerfile_server
    # 自定义容器名
    container_name: gva-server
    # 容器启动失败是否重启
    restart: always
    # 映射端口
    ports:
      - '8888:8888'
    # server服务依赖于mysql服务于redis服务
    depends_on:
      - mysql
      - redis
    networks:
      network:
      	# 在network网络下的容器内部的Ipv4地址
        ipv4_address: 177.7.0.12

  mysql:
    # 指定mysql镜像版本
    image: mysql:8.0.21
    # 自定义容器名
    container_name: gva-mysql
    # 设置utf8字符集
    command: mysqld --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci 
    # 容器启动失败是否重启
    restart: always
    # 映射端口
    ports:
      - "13306:3306"  # host物理直接映射端口为13306
    # 系统环境变量
    environment:
      MYSQL_DATABASE: 'qmPlus' # 初始化启动时要创建的数据库的名称
      MYSQL_ROOT_PASSWORD: 'Aa@6447985' # root管理员用户密码
    # 映射数据卷到数据库
    volumes:
      - '.docker-compose/docker-entrypoint-initdb.d:/docker-entrypoint-initdb.d'
    networks:
      network:
        # 在network网络下的容器内部的Ipv4地址
        ipv4_address: 177.7.0.13

  # redis服务
  redis:
    # 指定redis镜像版本
    image: redis:6.0.6
    # 自定义容器名
    container_name: gva-redis # 容器名
    # 容器启动失败是否重启
    restart: always
    # 映射端口
    ports:
      - '6379:6379'
    networks:
      network:
        # 在network网络下的容器内部的Ipv4地址
        ipv4_address: 177.7.0.14
```

## 常用命令

```shell
# 使用docker-compose启动四个容器
docker-compose up
# 如果您修改了某些配置选项,可以使用此命令重新打包镜像
docker-compose up --build
# 使用docker-compose 后台启动
docker-compose up -d

# 服务都启动成功后,使用此命令行可清除none镜像
docker system prune
```





















































