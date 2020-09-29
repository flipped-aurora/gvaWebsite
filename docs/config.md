---
id: config
title: config
---

# config.yaml详细说明

## casbin

```yaml
# casbin configuration
casbin:
  model-path: './resource/rbac_model.conf'
```

| 配置名     | 类型   | 说明                                                         | 建议是否修改 |
| ---------- | ------ | ------------------------------------------------------------ | ------------ |
| model-path | string | 存放casbin模型的相对路径<br />默认值为`./resource/rbac_model.conf` | 不推荐修改   |

## jwt

```yaml
# jwt configuration
jwt:
  signing-key: 'qmPlus'
```

| 配置名      | 类型   | 说明      |
| ----------- | ------ | --------- |
| signing-key | string | jwt的签名 |

## mysql

```yaml
# mysql connect configuration
mysql:
  username: root
  password: 'Aa@6447985'
  path: '127.0.0.1:3306'
  db-name: 'qmPlus'
  config: 'charset=utf8mb4&parseTime=True&loc=Local'
  max-idle-conns: 10
  max-open-conns: 10
  log-mode: false
```

| 配置名         | 类型   | 说明                         |
| -------------- | ------ | ---------------------------- |
| username       | string | 用户名                       |
| password       | string | 密码                         |
| path           | string | mysql的连接地址及端口        |
| db-name        | string | 数据库名                     |
| config         | string | 高级配置                     |
| max-idle-conns | int    | 设置空闲中的最大连接数       |
| max-open-conns | int    | 设置打开到数据库的最大连接数 |
| log-mode       | bool   | 是否开启Gorm全局日志         |

## postgresql

```yaml
postgresql:
  username: 'gorm'
  password: 'gorm'
  db-name: 'gorm'
  port: '9920'
  config: 'sslmode=disable TimeZone=Asia/Shanghai'
  max-idle-conns: 10
  max-open-conns: 10
  logger: false
  prefer-simple-protocol: true
```

| 配置名                 | 类型   | 说明                                                         |
| ---------------------- | ------ | ------------------------------------------------------------ |
| username               | string | 用户名                                                       |
| password               | string | 密码                                                         |
| db-name                | string | 数据库名                                                     |
| port                   | string | 端口                                                         |
| config                 | string | 高级配置                                                     |
| max-idle-conns         | int    | 设置空闲中的最大连接数                                       |
| max-open-conns         | int    | 设置打开到数据库的最大连接数                                 |
| logger                 | bool   | 是否开启Gorm全局日志                                         |
| prefer-simple-protocol | bool   | true:禁用 prepared statement 缓存<br />false启用 prepared statement 缓存 |

## sqlite

```yaml
sqlite:
  # path: 'file::memory:?cache=shared' # 内存模式
  path: 'db.db'
  max-idle-conns: 10
  max-open-conns: 10
  logger: true
```

| 配置名         | 类型   | 说明                                                         |
| -------------- | ------ | ------------------------------------------------------------ |
| path           | string | 文件名<br />path: 'file::memory:?cache=shared' 这样配置为内存模式 |
| max-idle-conns | int    | 设置空闲中的最大连接数                                       |
| max-open-conns | int    | 设置打开到数据库的最大连接数                                 |
| logger         | bool   | 是否开启Gorm全局日志                                         |

## sqlserver

```yaml
sqlserver:
  username: 'gorm'
  password: 'LoremIpsum86'
  db-name: 'gorm'
  path: 'localhost:9930'
  max-idle-conns: 10
  max-open-conns: 10
  logger: true
```

| 配置名         | 类型   | 说明                         |
| -------------- | ------ | ---------------------------- |
| username       | string | 用户名                       |
| password       | string | 密码                         |
| db-name        | string | 数据库名                     |
| path           | string | sqlserver的连接地址及端口    |
| max-idle-conns | int    | 设置空闲中的最大连接数       |
| max-open-conns | int    | 设置打开到数据库的最大连接数 |
| logger         | bool   | 是否开启Gorm全局日志         |

## localupload

```yaml
localupload:
  local: false
  file-path: uploads/file
```

| 配置名    | 类型   | 说明               |
| --------- | ------ | ------------------ |
| local     | bool   | 是否为本地上传     |
| file-path | string | 本地上传文件的路径 |

## qiniu

```yaml
qiniu:
  access-key: '25j8dYBZ2wuiy0yhwShytjZDTX662b8xiFguwxzZ'
  secret-key: 'pgdbqEsf7ooZh7W3xokP833h3dZ_VecFXPDeG5JY'
  bucket: 'qm-plus-img'
  img-path: 'http://qmplusimg.henrongyi.top'
```

| 配置名     | 类型   | 说明         |
| ---------- | ------ | ------------ |
| access-key | string | 秘钥AK       |
| secret-key | string | 秘钥SK       |
| bucket     | string | 存储空间     |
| img-path   | string | CDN 加速域名 |

## redis

```yaml
redis:
  addr: '127.0.0.1:6379'
  password: ''
  db: 0
```

| 配置名   | 类型   | 说明                |
| -------- | ------ | ------------------- |
| addr     | string | redis连接地址及端口 |
| password | string | 密码                |
| db       | int    | redis的哪个数据库   |

## system

```yaml
system:
  use-multipoint: false
  env: 'public'
  addr: 8888
  db-type: "mysql" 
  need-init-data: false
  error-to-email: false
  config-env: "GVA_CONFIG"
```

| 配置名         | 类型   | 说明                                                         |
| -------------- | ------ | ------------------------------------------------------------ |
| use-multipoint | bool   | 单点登录,默认为关闭                                          |
| env            | string | 更改为“develop”以跳过开发模式的身份验证                      |
| addr           | int    | 后端端口,默认8888                                            |
| db-type        | string | 可以使用mysql/postgresql/sqlite/sqlserver,<br />mysql: 完美支持<br />postgresql:可以自行配置,但有代码不兼容,需自行测试并修改<br />sqlite:sqlite需要gcc支持 windows用户需要自行安装gcc,<br />还需要在server/core/gorm.go把注册的初始化sqlite的方法<br />sqlserver:可以自行配置,可能有代码不兼容,需自行测试并修改 |
| need-init-data | bool   | 是否需要初始化数据                                           |
| error-to-email | bool   | 错误是否发送邮件,要使用此功能需要配置好 [email](#email) ,还需把ErrorToEmail()中间件在 [router.go](https://github.com/flipped-aurora/gin-vue-admin/blob/gva_gormv2_dev/server/initialize/router.go) 中启用中间件,方可生效,默认不开启 |
| config-env     | string | config.yaml文件的系统变量名称                                |

## captcha

```yaml
# captcha configuration
captcha:
  key-long: 6
  img-width: 240
  img-height: 80
```

| 配置名     | 类型 | 说明       |
| ---------- | ---- | ---------- |
| key-long   | int  | 验证码长度 |
| img-width  | int  | 验证码宽度 |
| img-height | int  | 验证码高度 |

## zap

```yaml
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
```

| 配置名         | 类型   | 说明                                                         |
| -------------- | ------ | ------------------------------------------------------------ |
| level          | string | level的模式的详细说明,请看[zap官方文档](https://pkg.go.dev/go.uber.org/zap?tab=doc#pkg-constants) <br />info: info模式,无错误的堆栈信息,只输出信息 <br />debug:debug模式,有错误的堆栈详细信息 <br />warn:warn模式 <br />error: error模式,有错误的堆栈详细信息 <br />dpanic: dpanic模式 <br />panic: panic模式 <br />fatal: fatal模式 |
| format         | string | console: 控制台形式输出日志 json: json格式输出日志           |
| prefix         | string | 日志的前缀                                                   |
| director       | string | 存放日志的文件夹,修改即可,不需要手动创建                     |
| link_name      | string | 在server目录下会生成一个link_name的[软连接文件](https://baike.baidu.com/item/软链接),链接的是director配置项的最新日志文件 |
| show_line      | bool   | 显示行号, 默认为true,不建议修改                              |
| encode_level   | string | LowercaseLevelEncoder:小写 <br />LowercaseColorLevelEncoder:小写带颜色 <br />CapitalLevelEncoder: 大写 <br />CapitalColorLevelEncoder: 大写带颜色 |
| stacktrace_key | string | 堆栈的名称,即在json格式输出日志时的josn的key                 |
| log_in_console | bool   | 是否输出到控制台,默认为true                                  |

- 开发环境 || 调试环境配置建议
	- `level:debug`
	- `format:console`
	- `encode-level:LowercaseColorLevelEncoder`或者`encode-leve:CapitalColorLevelEncoder`
- 部署环境配置建议
	- `level:error`
	- `format:json`
	- `encode-level: LowercaseLevelEncoder `或者 `encode-level:CapitalLevelEncoder`
	- `log-in-console: false`
- 建议只是建议,按照自己的需求进行即可,给出建议仅供参考

## email

```yaml
email:
  email-from: 'xxx@163.com'
  email-nickname: 'test'
  email-secret: 'xxx'
  email-to: 'xxx@qq.com'
  email-host: 'smtp.163.com'
  email-port: 465
  email-is-ssl: true
```

| 配置名         | 类型   | 说明                                                         |
| -------------- | ------ | ------------------------------------------------------------ |
| email-from     | string | 用户名                                                       |
| email-nickname | string | 对方收到的昵称                                               |
| email-secret   | string | 密码                                                         |
| email-to       | string | 邮件接收者,可以是多个,<br />以英文逗号(,)进行区分,最好别带空格,如果是一个邮箱最后请不要加英文逗号(,) |
| email-host     | string | 邮箱的主服务器地址                                           |
| email-is-ssl   | bool   | 是否使用ssl                                                  |

