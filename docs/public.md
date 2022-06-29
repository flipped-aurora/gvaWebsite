---
id: public
title: 部署教学
---

## 部署教学

### 前端

在web目录下执行 npm run build 得到 dist文件夹 将dist文件夹上传到服务器 建议使用nginx进行代理 并且设置 proxy 把请求代理到后端

### 后端

在 server下 go build 得到一个可执行文件 

*版本<2.5.3*
然后将可执行文件和config.ymal 以及 resource 文件夹上传至服务器 三者最好放在同一路径下 最终服务器目录结构可能如下 

*版本>=2.5.3*
将可执行文件直接丢到服务器 和 前端dist同目录即可 设置的embed机制会自动产生应该携带的静态文件（依然需要手动修改config.yaml的数据库等相关配置）

```shell

    ├── breakpointDir  // 后续断点续传自动生成
    ├── chunk   // 后续断点续传自动生成
    ├── fileDir   // 后续断点续传自动生成
    ├── finish   // 后续断点续传自动生成
    ├── resource  // embed自动产生
    │   └── 子目录文件 // embed自动产生			 		
    ├── dist
    │   └── 子目录文件
    ├── gin-vue-admin // embed自动产生
    ├── config.ymal  // embed自动产生
    
```


## [Tips.] Nginx的配置（如果用的话）

代码参考如下

```nginx
location  /api {
  		proxy_set_header Host $http_host;
			proxy_set_header  X-Real-IP $remote_addr;
			proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
			proxy_set_header X-Forwarded-Proto $scheme;
    	rewrite ^/api/(.*)$ /$1 break;  #重写
    	proxy_pass 后端地址; # 设置代理服务器的协议和地址
    }
```