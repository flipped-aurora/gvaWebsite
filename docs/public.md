---
id: public
title: 部署教学
---

## 部署教学

### 前端

在web目录下执行 npm run build 得到 dist文件夹 将dist文件夹上传到服务器 建议使用nginx进行代理 并且设置 proxy 把请求代理到后端

### 后端

在 server下 go build 得到一个可执行文件 然后将可执行文件和config.ymal 以及 resource 文件夹上传至服务器 三者最好放在同一路径下 最终服务器目录结构可能如下 

```shell

    ├── breakpointDir  // 后续断点续传自动生成
    ├── chunk   // 后续断点续传自动生成
    ├── fileDir   // 后续断点续传自动生成
    ├── finish   // 后续断点续传自动生成
    ├── resource
    │   └── 子目录文件					
    ├── dist
    │   └── 子目录文件
    ├── gin-vue-admin
    ├── config.ymal
    
```