---
id: env
title: 环境配置
---

## 前端环境

1. 前往[https://nodejs.org/zh-cn/](https://nodejs.org/zh-cn/)下载当前版本node
2. 命令行运行 node -v npm -v 若控制台输出版本号则前端环境搭建成功
3. 开发工具推荐vscode[https://code.visualstudio.com/](https://code.visualstudio.com/)

## 后端环境

1. 下载golang安装 版本号需>=1.14
	- 国际: [https://golang.org/dl/](https://golang.org/dl/) 
	- 国内: https://golang.google.cn/dl/ 
2. 命令行运行 go 若控制台输出各类提示命令 则安装成功 输入 go version 确认版本大于1.14
3. 开发工具推荐 [Goland](https://www.jetbrains.com/go/) 

## 版本列表

- master: 2.0, 用于生产环境
- develop: 2.0, 用于测试环境
- [gin-vue-admin_v2_dev](https://github.com/flipped-aurora/gin-vue-admin/tree/gin-vue-admin_v2_dev) (v2.0 [GormV1版本](https://v1.gorm.io/)稳定分支)
- [gva_gormv2_dev](https://github.com/flipped-aurora/gin-vue-admin/tree/gva_gormv2_dev) (v2.0 [GormV2版本](https://v2.gorm.io/)开发分支)

## 使用说明

- node版本 >= 12.2.0
- golang版本 >= v1.14
- IDE推荐：Goland
- 各位在clone项目以后，最好前往七牛云申请自己的空间地址。
- 替换掉项目中的七牛云公钥，私钥，仓名和默认url地址，以免发生测试文件数据错乱

