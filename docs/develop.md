---
id: develop
title: 开发介绍
---


## 项目目录(2.0)

```
    ├─server  	     （后端文件夹）
    │  ├─api            （API）
    │  ├─config         （配置包）
    │  ├─core  	        （核心文件）
    │  ├─docs  	        （swagger文档目录）
    │  ├─global         （全局对象）
    │  ├─initialiaze    （初始化）
    │  ├─middleware     （中间件）
    │  ├─model          （结构体层）
    │  ├─resource       （资源）
    │  ├─router         （路由）
    │  ├─service         (服务)
    │  ├─source         (初始化需要的数据)
    │  ├─plugin         (插件)
    │  └─utils	        （公共功能）
    └─web            （前端文件）
        ├─public        （发布模板）
        └─src           （源码包）
            ├─api       （向后台发送ajax的封装层）
            ├─core       （用来修改系统基础可运行配置）
            ├─assets	（静态文件）
            ├─components（组件）
            ├─router	（前端路由）
            ├─store     （vuex 状态管理仓）
            ├─style     （通用样式文件）
            ├─utils     （前端工具库）
            └─view      （前端页面）

```


## 配置文件(2.0)

```yaml
# github.com/flipped-aurora/gin-vue-admin/server Global Configuration

# jwt configuration
jwt:
  signing-key: 'qmPlus'
  expires-time: 604800
  buffer-time: 86400
  issuer: 'qmPlus'
# zap logger configuration
zap:
  level: 'info'
  format: 'console'
  prefix: '[github.com/flipped-aurora/gin-vue-admin/server]'
  director: 'log'
  show-line: true
  encode-level: 'LowercaseColorLevelEncoder'
  stacktrace-key: 'stacktrace'
  log-in-console: true

# redis configuration
redis:
  db: 0
  addr: '127.0.0.1:6379'
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
  oss-type: 'local'    # 控制oss选择走本期还是 七牛等其他仓 自行增加其他oss仓可以在 server/utils/upload/upload.go 中 NewOss函数配置
  use-multipoint: false
  # IP限制次数 一个小时15000次
  iplimit-count: 15000
  #  IP限制一个小时
  iplimit-time: 3600

# captcha configuration
captcha:
  key-long: 6
  img-width: 240
  img-height: 80

# mysql connect configuration
# 未初始化之前请勿手动修改数据库信息！！！如果一定要手动初始化请看（https://www.github.com/flipped-aurora/gin-vue-admin/server.com/docs/first）
mysql:
  path: ''
  config: ''
  db-name: ''
  username: ''
  password: ''
  max-idle-conns: 10
  max-open-conns: 100
  log-mode: ""
  log-zap: false

# local configuration
local:
  path: 'uploads/file'

# autocode configuration
autocode:
  transfer-restart: true
  # root 自动适配项目根目录
  # 请不要手动配置,他会在项目加载的时候识别出根路径
  root: ""
  server: /server
  server-api: /api/v1/autocode
  server-initialize: /initialize
  server-model: /model/autocode
  server-request: /model/autocode/request/
  server-router: /router/autocode
  server-service: /service/autocode
  web: /web/src
  web-api: /api
  web-form: /view
  web-table: /view

# qiniu configuration (请自行七牛申请对应的 公钥 私钥 bucket 和 域名地址)
qiniu:
  zone: 'ZoneHuaDong'
  bucket: ''
  img-path: ''
  use-https: false
  access-key: ''
  secret-key: ''
  use-cdn-domains: false


# aliyun oss configuration
aliyun-oss:
  endpoint: 'yourEndpoint'
  access-key-id: 'yourAccessKeyId'
  access-key-secret: 'yourAccessKeySecret'
  bucket-name: 'yourBucketName'
  bucket-url: 'yourBucketUrl'
  base-path: 'yourBasePath'

# tencent cos configuration
tencent-cos:
  bucket: 'xxxxx-10005608'
  region: 'ap-shanghai'
  secret-id: 'xxxxxxxx'
  secret-key: 'xxxxxxxx'
  base-url: 'https://gin.vue.admin'
  path-prefix: 'github.com/flipped-aurora/gin-vue-admin/server'

# excel configuration
excel:
  dir: './resource/excel/'


# timer task db clear table
Timer:
  start: true
  spec: "@daily"  # 定时任务详细配置参考 https://pkg.go.dev/github.com/robfig/cron/v3
  detail: [
    # tableName: 需要清理的表名
    # compareField: 需要比较时间的字段
    # interval: 时间间隔, 具体配置详看 time.ParseDuration() 中字符串表示 且不能为负数
    # 2160h = 24 * 30 * 3 -> 三个月
    { tableName: "sys_operation_records" , compareField: "created_at", interval: "2160h" },
    { tableName: "jwt_blacklists" , compareField: "created_at", interval: "168h" }
    #{ tableName: "log2" , compareField: "created_at", interval: "2160h" }
  ]



```

## 推荐的开发模式

1. 运行项目，进入系统工具->代码生成器
2. 设计基础结构体模型，点击生成代码包 获取前后端基础代码
3. 前端代码添加进入api并自行重命名，后端代码放入适合自己开发路径中 并注册结构体到数据库，注册路由到inirRouter（开发模式下，请自行注释掉自动生成代码中的鉴权中间件 .Use(middleware.JWTAuth()).Use(middleware.CasbinHandler())  )方便开发
4. 前端创建vue文件，并到超级管理员->菜单管理->将对应路径添加进行菜单，进入角色管理，将刚配置的菜单添加进入，重启前端项目，开始绘制页面，书写交互。
5. 接口调通以后，到超级管理员->api管理中添加已经调通的路由，进入角色管理，将调通的路由配置进入角色权限。
6. 简单几步过后，一个包含鉴权，动态菜单的前后端全栈功能就搞定了。

:::tip 提示
目前代码生成器仅支持单表，后期会逐步支持关联表模式，复杂数据结构目前还需要辛苦大家自行设计
:::
