---
id: introduce
title: 项目介绍
---
<div align="center">

![logo](../static/guanwang/gvalogo.jpg "logo")

</div>
<div align="center">
<img src="https://img.shields.io/badge/vue-3.2.0-brightgreen"/>
&nbsp;
<img src="https://img.shields.io/badge/element-plus--2.12.0-green"/>
&nbsp;
<img src="https://img.shields.io/badge/golang-1.16-blue"/>
&nbsp;
<img src="https://img.shields.io/badge/gin-1.4.0-lightBlue"/>
&nbsp;
<img src="https://img.shields.io/badge/gorm-1.20.0-red"/>
</div>

<p></p>

:::tip 缘起
在平时的开发工作中，无论做什么项目，都需要搭建一套开发基础平台，其中鉴权，动态路由，角色等等功能都是大同小异的，并且有大量的重复curd代码，因此下定决心，搞出了现在的gin-vue-admin
:::



GIN-VUE-ADMIN是一个基于vue和gin开发的全栈前后端分离的开发基础平台，拥有jwt鉴权，动态路由，动态菜单，casbin鉴权，表单生成器，代码生成器等功能，提供了多种示例文件，让大家把更多时间专注在业务开发上。



#### 联系我们

qq群：650421081([gin-vue-admin交流群](https://jq.qq.com/?_wv=1027&k=5cRp2f1R))

微信：`shouzi_1994`  (备注 gin-vue-admin交流群) 通过验证后会拉你进微信群

:::danger 提示

为了方便大家查看文档，项目会默认打开文档网站页面，如果不需要打开，请将前端目录下package.json

script部分

"serve": "node openDocument.js && vite --host --mode development"

替换为

"serve": "vite --host --mode development"
:::
