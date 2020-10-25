---
id: web
title: web项目
---

## web项目结构

```shell
└─web            （前端文件）
    ├─public        （发布模板）
    └─src           （源码包）
        ├─api       （向后台发送ajax的封装层）
        ├─assets    （静态文件）
        ├─components（组件）
        ├─router    （前端路由）
        ├─store     （vuex 状态管理仓）
        ├─style     （通用样式文件）
        ├─utils     （前端工具库）
        └─view      （前端页面）
```

## web项目安装环境

- 以web为项目,用`VsCode`或者`WebStorm`打开
- 打开工具的终端,输入`npm i` 或者 `cnpm i` 进行安装web项目的环境
- 安装完成之后使用`npm run serve`或者`cnpm run serve`即可启动项目

:::danger 您可能遇到的问题
1. 前端 npm 下载失败，请安装cnpm 使用淘宝镜像下载 [cnpm安装方法](https://developer.aliyun.com/mirror/NPM?from=tnpm)
:::
