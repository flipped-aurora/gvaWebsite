---
id: server
title: server
---

## 视频推荐

- server文件夹为Golang后端项目,需要有Golang基础,Gin框架基础

### Golang教学

[【golang教学】第一章：golang的安装和编辑工具安装（1010工作室出品）](https://www.bilibili.com/video/BV1Q7411K7ij)

[【golang教学】第二章：golang的基础知识——结构，包，变量初探（1010工作室出品）](https://www.bilibili.com/video/BV1W7411N7iq)

[【golang教学】第三章：golang基本数据类型和变量初探（1010工作室出品）](https://www.bilibili.com/video/BV1eE411J7QM)

[【golang教学】第四章：golang的流程控制语句（1010工作室出品）](https://www.bilibili.com/video/BV1U64y1u74X)

[【golang教学】第五章：golang的数组和切片（1010工作室出品）](https://www.bilibili.com/video/BV1P5411t7Wr)

[【golang教学】第六章：golang的map声明和使用（1010工作室出品）](https://www.bilibili.com/video/BV1jC4y1x7F7)

[【golang教学】第七章：golang的函数func方法（1010工作室出品）](https://www.bilibili.com/video/BV1mg4y187ZN)

[【golang教学】第八章：golang的指针和地址（1010工作室出品）](https://www.bilibili.com/video/BV1mg4y187pS)

[【golang教学】第九章：golang的结构体struct声明和使用（1010工作室出品）](https://www.bilibili.com/video/BV1Kf4y1S7eP)

[【golang教学】第十章：golang的接口interface介绍和工作中的使用（1010工作室出品）](https://www.bilibili.com/video/BV1WA411b7ZF)

[【golang教学】第十一章：golang的并发神器goroutine 和 channel （1010工作室出品）](https://www.bilibili.com/video/BV1Vf4y1S75t)

[【golang教学】第十二章：golang的断言 Assertion 和 反射 reflect （1010工作室出品）](https://www.bilibili.com/video/BV1S5411x7Bz)

### Gin教学

[【gin教学】第一章：gin的学习前准备工作 hello gin（1010工作室出品）](https://www.bilibili.com/video/BV12i4y1x7AG)

[【gin教学】第二章：gin的get post delete put请求以及获取参数的方式（1010工作室出品）](https://www.bilibili.com/video/BV1Be411p7Jf)

[【开源项目教学】gin-vue-admin 2.0目录介绍和自动化开发模式（1010工作室出品）](https://www.bilibili.com/video/BV1aV411d7Gm)

[【gin教学】第三章：使用bind绑定参数和参数验证（1010工作室出品）](https://www.bilibili.com/video/BV1gt4y1173C)

[【gin教学】第四章：gin对于文件的上传和返回（1010工作室出品）](https://www.bilibili.com/video/BV1GA411t7BR)

[【gin教学】第五章：gin的中间件和路由分组（1010工作室出品）](https://www.bilibili.com/video/BV18C4y1p7Fe)

[【gin教学】第六章：日志介绍以及工具推荐（1010工作室出品）](https://www.bilibili.com/video/BV1Bf4y1y7yh)

[【gin教学】第七章：初识GROM使用GORM进行数据库操作（1010工作室出品）](https://www.bilibili.com/video/BV1Bf4y1y7yh)

[【gin教学】第八章：gorm结构体的创建技巧和结合gin使用（1010工作室出品）](https://www.bilibili.com/video/BV1kC4y1t7Qi)

### gin-vue-admin版本更新说明

[【gin-vue-admin】V2.2.0更新：增加日志功能,增加v-auth指令,增加一键打包二进制，增加菜单参数，增加令牌续期（1010工作室出品）](https://www.bilibili.com/video/BV1jk4y127yg)

[【gin-vue-admin】V2.1.0大更新：增加字典管理，用户操作日志，从数据库一键创建CURD让自动化更加完善（1010工作室出品）](https://www.bilibili.com/video/BV1hC4y1h7PT)

[【gin-vue-admin】06/07更新：UI美化，插件功能，自动化代码增加搜索条件 字段描述 结构体中文描述（1010工作室出品）](https://www.bilibili.com/video/BV1wa4y1Y7oX)

## server项目结构

```shell
├── api						
│   └── v1
├── config
├── core
├── docs
├── global
│   └── response
├── initialize
├── log
├── middleware
├── model
│   ├── request
│   └── response
├── packfile
├── resource
├── router
├── service
└── utils
```

| 文件夹       | 说明                    | 描述                        |
| ------------ | ----------------------- | --------------------------- |
| `api`        | api层                   |                             |
| `--v1`       | v1版本接口              | v1版本接口                  |
| `config`     | 配置包                  | config.yaml对应的配置结构体 |
| `core`       | 核心文件                |                             |
| `docs`       | swagger文档目录         |                             |
| `global`     | 全局对象                |                             |
| `--response` | json返回web端的统一封装 | json返回web端的统一封装     |
| `model`      | 模型层                  | 模型对应数据表              |
| `--request`  | 入参结构体              | 接收前端发送到后端的数据。  |
| `--response` | 出参结构体              | 返回给前端的数据结构体      |
| `packfile`   | 静态文件打包            |                             |
| `resource`   | 静态资源文件夹          | 负责存放                    |
| `router`     | 路由层                  |                             |
| `service`    | service层               |                             |
| `utils`      | 工具包                  | 一些重复的问题              |

## 本文使用的环境

- 数据库选择mysql

- Goland(2020.2)

## 1.初始化server项目

- Goland打开server文件夹
- 设置GOPROXY
	- windows:打开File → settings → Go → Go Modules，将 Environment 项的值设置为`GOPROXY=https://goproxy.io,direct`
	- Mac: 打开Goland→Preferences...→Go → Go Modules,将Environment项的值设置为`GOPROXY=https://goproxy.io,direct`
- 打开go.mod文件,在文件空白处鼠标右键点击`Go Mod Tidy`
- ![](../static/img/GoModTidy.png)

## 2.config.yaml

- 按照 [config的详细说明](./config) 按需修改,

## 3.数据库初始化

- `comfig.yaml`的mysql的配置自行修改

- `config.yaml`中的`system`下存在一行`need-init-data: false`将此参数设定为true则会执行初始化数据
	切记初次开启后 记得关闭
- 如果哪天你看到不存在`need-init-data`这个参数,就说明使用gva的命令行工具进行初始化了

## 4.启动server项目

- 完成后打开main.go, 在文件空白处鼠标右键点击`运行'go build main.go'`,或者使用图中红色框的右边的快捷键组合进行启动项目或者打开goland的终端,输入命令`go run main.go`
- ![](../static/img/GoRunMain.png)



