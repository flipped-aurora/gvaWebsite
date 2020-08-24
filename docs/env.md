---
id: env
title: 环境配置
---

## 前端环境

1. 前往[https://nodejs.org/zh-cn/](https://nodejs.org/zh-cn/)下载当前版本node
2. 命令行运行 node -v npm -v 若控制台输出版本号则前端环境搭建成功
3. 开发工具推荐vscode[https://code.visualstudio.com/](https://code.visualstudio.com/)

## 后台环境

1. 前往[https://golang.org/dl/](https://golang.org/dl/)下载golang安装 版本号需>=1.12
2. 命令行运行 go 若控制台输出各类提示命令 则安装成功 输入 go version 确认版本大于1.12
3. 开发工具推荐goland[https://www.jetbrains.com/go/](https://www.jetbrains.com/go/)

## 版本列表

- master: 2.0 dev code, for prod

- develop: 2.0 dev code, for test

- [gin-vue-admin_v2.0_dev](https://github.com/flipped-aurora/gin-vue-admin/tree/gin-vue-admin_v2_dev) （v2.0 不再兼容 v1.0）

- [gin-vue-admin_v1.0_stable](https://github.com/flipped-aurora/gin-vue-admin/tree/gin-vue-admin_v1_stable) （v1.0 稳定版，会持续更新和维护）

- [gin-vue-admin_v1.0_dev](https://github.com/flipped-aurora/gin-vue-admin/tree/gin-vue-admin_v1_dev) （v1.0 稳定版，会持续更新和维护）

## 使用说明

```
- node版本 > v8.6.0
- golang版本 >= v1.11
- IDE推荐：Goland
- 各位在clone项目以后，把db文件导入自己创建的库后，最好前往七牛云申请自己的空间地址。
- 替换掉项目中的七牛云公钥，私钥，仓名和默认url地址，以免发生测试文件数据错乱
```

### web端

```bash
# clone the project
git clone https://github.com/piexlmax/gin-vue-admin.git

# enter the project directory
cd web

# install dependency
npm install

# develop
npm run serve
```

### server端

```bash
# 使用 go.mod

# 安装go依赖包
go list (go mod tidy)

# 编译
go build
```

### 生成swagger自动化API文档

#### 安装 swagger

##### （1）可以翻墙
````
go get -u github.com/swaggo/swag/cmd/swag
````

##### （2）无法翻墙
由于国内没法安装 go.org/x 包下面的东西，需要先安装`gopm`

```bash
# 下载gopm包
go get -v -u github.com/gpmgo/gopm

# 执行
gopm get -g -v github.com/swaggo/swag/cmd/swag

# 到GOPATH的/src/github.com/swaggo/swag/cmd/swag路径下执行
go install
```

#### 2.3.2 生成API文档

````
cd server
swag init
````
执行上面的命令后，server目录下会出现docs文件夹，登录http://localhost:8888/swagger/index.html，即可查看swagger文档


## 开始启动

1. 前往[https://github.com/piexlmax/gin-vue-admin](https://github.com/piexlmax/gin-vue-admin)clone代码
2. 打开goland server 打开后 点击左上角 file->setting->GO->Go Modules 为 Enable Go Module(vgo) 打勾 proxy输入 https://goproxy.io
3. 将 server/db 中的sql文件导入到数据库 默认数据库为 qmplus  密码:Aa@6447985 可自行在 ./config.ymal中配置
4. 配置完成后，进入到main.go,运行项目，自动安装依赖
5. 进入web目录，运行npm install 安装前端依赖
6. 运行 npm run serve 开启前端程序

::: danger 您可能遇到的问题
1. 启动时报数据库启动失败，请检查是否创建qmsql数据库，或者是否是您自行配置的数据库
2. 登录时用户名密码错误，请检查数据库文件是否导入
3. 前端 npm 下载失败，请安装cnpm 使用淘宝镜像下载 [cnpm安装方法](https://developer.aliyun.com/mirror/NPM?from=tnpm)
:::