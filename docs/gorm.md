---
id: gorm
title: Gorm
---

# Gorm连接PostgreSql、Sqlite、Sqlserver的代码+配置指南

## PostgreSql

### server/config/gorm.go

- 添加Postgresql结构体

```go
package config

type Postgresql struct {
	Host                 string `mapstructure:"host" json:"host" yaml:"host"`
	Port                 string `mapstructure:"port" json:"port" yaml:"port"`
	Config               string `mapstructure:"config" json:"config" yaml:"config"`
	Dbname               string `mapstructure:"db-name" json:"dbname" yaml:"db-name"`
	Username             string `mapstructure:"username" json:"username" yaml:"username"`
	Password             string `mapstructure:"password" json:"password" yaml:"password"`
	MaxIdleConns         int    `mapstructure:"max-idle-conns" json:"maxIdleConns" yaml:"max-idle-conns"`
	MaxOpenConns         int    `mapstructure:"max-open-conns" json:"maxOpenConns" yaml:"max-open-conns"`
	PreferSimpleProtocol bool   `mapstructure:"prefer-simple-protocol" json:"preferSimpleProtocol" yaml:"prefer-simple-protocol"`
	Logger               bool   `mapstructure:"logger" json:"logger" yaml:"logger"`
}
```

### server/config/config.go

- 在Server结构体添加Postgresql结构体

```go
package config

type Server struct {
	JWT     JWT     `mapstructure:"jwt" json:"jwt" yaml:"jwt"`
	Zap     Zap     `mapstructure:"zap" json:"zap" yaml:"zap"`
	Redis   Redis   `mapstructure:"redis" json:"redis" yaml:"redis"`
	Email   Email   `mapstructure:"email" json:"email" yaml:"email"`
	Casbin  Casbin  `mapstructure:"casbin" json:"casbin" yaml:"casbin"`
	System  System  `mapstructure:"system" json:"system" yaml:"system"`
	Captcha Captcha `mapstructure:"captcha" json:"captcha" yaml:"captcha"`
	// gorm
	Mysql      Mysql      `mapstructure:"mysql" json:"mysql" yaml:"mysql"`
	Postgresql Postgresql `mapstructure:"postgresql" json:"postgresql" yaml:"postgresql"`
	// oss
	Local Local `mapstructure:"local" json:"local" yaml:"local"`
	Qiniu Qiniu `mapstructure:"qiniu" json:"qiniu" yaml:"qiniu"`
}
```

### server/config.yaml

- 在server/config.yaml添加对应Postgresql结构体的配置信息

```yaml
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
```

### server/initialize/gorm_postgresql.go

:::tip 注意
1. gorm_postgresql.go文件需要自己新建
2. 函数GormPostgreSql()为Gorm连接PostgreSql的函数方法
:::

```go
package initialize

import (
	"gin-vue-admin/global"
	"go.uber.org/zap"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"os"
)

// GormPostgreSql 初始化PostgreSql数据库
func GormPostgreSql() *gorm.DB {
	p := global.GVA_CONFIG.Postgresql
	dsn := "host="+ p.Host + " user=" + p.Username + " password=" + p.Password + " dbname=" + p.Dbname + " port=" + p.Port + " " + p.Config
	postgresConfig := postgres.Config{
		DSN:                  dsn,                    // DSN data source name
		PreferSimpleProtocol: p.PreferSimpleProtocol, // 禁用隐式 prepared statement
	}
	gormConfig := gormConfig(p.Logger)
	if db, err := gorm.Open(postgres.New(postgresConfig), gormConfig); err != nil {
		global.GVA_LOG.Error("PostgreSql启动异常", zap.Any("err", err))
		os.Exit(0)
		return nil
	} else {
		sqlDB, _ := db.DB()
		sqlDB.SetMaxIdleConns(p.MaxIdleConns)
		sqlDB.SetMaxOpenConns(p.MaxOpenConns)
		return db
	}
}
```

### server/initialize/gorm.go

```go
// Gorm 初始化数据库并产生数据库全局变量
func Gorm() *gorm.DB {
	switch global.GVA_CONFIG.System.DbType {
	case "mysql":
		return GormMysql()
	case "postgresql":
		return GormPostgreSql()
	default:
		return GormMysql()
	}
}
```

## Sqlite

:::danger windows用户需要注意
1. 初始化Sqlite数据库 sqlite需要gcc支持 windows用户需要自行安装gcc
:::

### server/config/gorm.go

- 添加Sqlite结构体

```go
package config

type Sqlite struct {
	Path         string `mapstructure:"path" json:"path" yaml:"path"`
	MaxIdleConns int    `mapstructure:"max-idle-conns" json:"maxIdleConns" yaml:"max-idle-conns"`
	MaxOpenConns int    `mapstructure:"max-open-conns" json:"maxOpenConns" yaml:"max-open-conns"`
	Logger       bool   `mapstructure:"logger" json:"logger" yaml:"logger"`
}
```

### server/config/config.go

- 在Server结构体添加Sqlite结构体

```go
package config

type Server struct {
	JWT     JWT     `mapstructure:"jwt" json:"jwt" yaml:"jwt"`
	Zap     Zap     `mapstructure:"zap" json:"zap" yaml:"zap"`
	Redis   Redis   `mapstructure:"redis" json:"redis" yaml:"redis"`
	Email   Email   `mapstructure:"email" json:"email" yaml:"email"`
	Casbin  Casbin  `mapstructure:"casbin" json:"casbin" yaml:"casbin"`
	System  System  `mapstructure:"system" json:"system" yaml:"system"`
	Captcha Captcha `mapstructure:"captcha" json:"captcha" yaml:"captcha"`
	// gorm
	Mysql      Mysql      `mapstructure:"mysql" json:"mysql" yaml:"mysql"`
	Sqlite     Sqlite     `mapstructure:"sqlite" json:"sqlite" yaml:"sqlite"`
	// oss
	Local Local `mapstructure:"local" json:"local" yaml:"local"`
	Qiniu Qiniu `mapstructure:"qiniu" json:"qiniu" yaml:"qiniu"`
}
```

### server/config.yaml

- 在server/config.yaml中添加Sqlite结构体的配置信息

```yaml
# sqlite connect configuration (sqlite需要gcc支持 windows用户需要自行安装gcc)
sqlite:
  path: 'db.db'
  max-idle-conns: 10
  max-open-conns: 10
  logger: true
```

### server/initialize/gorm_sqlite.go

:::tip windows用户需要注意
1. gorm_sqlite.go文件需要自己新建
2. 函数GormSqlite()为Gorm连接Sqlite的函数方法
:::

```go
package initialize

import (
	"gorm.io/driver/sqlite"

	"gin-vue-admin/global"
	"go.uber.org/zap"
	"gorm.io/gorm"
	"os"
)

// GormSqlite 初始化Sqlite数据库 sqlite需要gcc支持 windows用户需要自行安装gcc 如需使用打开注释即可
func GormSqlite() *gorm.DB {
	s := global.GVA_CONFIG.Sqlite
	if db, err := gorm.Open(sqlite.Open(s.Path), gormConfig(s.Logger)); err != nil {
		global.GVA_LOG.Error("Sqlite启动异常", zap.Any("err", err))
		os.Exit(0)
		return nil
	} else {
		sqlDB, _ := db.DB()
		sqlDB.SetMaxIdleConns(s.MaxIdleConns)
		sqlDB.SetMaxOpenConns(s.MaxOpenConns)
		return db
	}
}
```

### server/initialize/gorm.go

```go
// Gorm 初始化数据库并产生数据库全局变量
func Gorm() *gorm.DB {
	switch global.GVA_CONFIG.System.DbType {
	case "mysql":
		return GormMysql()
	case "sqlite": // sqlite需要gcc支持 windows用户需要自行安装gcc
    	return GormSqlite()
	default:
		return GormMysql()
	}
}
```

## Sqlserver

### server/config/gorm.go

- 添加Sqlserver结构体

```go
package config

type Sqlserver struct {
	Path         string `mapstructure:"path" json:"path" yaml:"path"`
	Dbname       string `mapstructure:"db-name" json:"dbname" yaml:"db-name"`
	Username     string `mapstructure:"username" json:"username" yaml:"username"`
	Password     string `mapstructure:"password" json:"password" yaml:"password"`
	MaxIdleConns int    `mapstructure:"max-idle-conns" json:"maxIdleConns" yaml:"max-idle-conns"`
	MaxOpenConns int    `mapstructure:"max-open-conns" json:"maxOpenConns" yaml:"max-open-conns"`
	Logger       bool   `mapstructure:"logger" json:"logger" yaml:"logger"`
}
```

### server/config/config.go

- 在Server结构体添加Sqlserver结构体

```go
package config

type Server struct {
	JWT     JWT     `mapstructure:"jwt" json:"jwt" yaml:"jwt"`
	Zap     Zap     `mapstructure:"zap" json:"zap" yaml:"zap"`
	Redis   Redis   `mapstructure:"redis" json:"redis" yaml:"redis"`
	Email   Email   `mapstructure:"email" json:"email" yaml:"email"`
	Casbin  Casbin  `mapstructure:"casbin" json:"casbin" yaml:"casbin"`
	System  System  `mapstructure:"system" json:"system" yaml:"system"`
	Captcha Captcha `mapstructure:"captcha" json:"captcha" yaml:"captcha"`
	// gorm
	Mysql      Mysql      `mapstructure:"mysql" json:"mysql" yaml:"mysql"`
    Sqlserver  Sqlserver  `mapstructure:"sqlserver" json:"sqlserver" yaml:"sqlserver"`
	// oss
	Local Local `mapstructure:"local" json:"local" yaml:"local"`
	Qiniu Qiniu `mapstructure:"qiniu" json:"qiniu" yaml:"qiniu"`
}
```

### server/config.yaml

- 在server/config.yaml中添加Sqlserver结构体的配置信息

```yaml
# Sqlserver connect configuration
sqlserver:
  path: 'localhost:9930'
  db-name: 'gorm'
  username: 'gorm'
  password: 'LoremIpsum86'
  max-idle-conns: 10
  max-open-conns: 10
  logger: true

```

### server/initialize/gorm_sqlserver.go

:::tip 您可能遇到的问题
1. gorm_sqlserver.go文件需要自己新建
2. 函数GormSqlServer()为Gorm连接Sqlite的函数方法
:::

```go
package initialize

import (
	"gin-vue-admin/global"
	"os"

	"go.uber.org/zap"
	"gorm.io/driver/sqlserver"
	"gorm.io/gorm"
)

// GormSqlServer 初始化SqlServer数据库
func GormSqlServer() *gorm.DB {
	ss := global.GVA_CONFIG.Sqlserver
	dsn := "sqlserver://" + ss.Username + ":" + ss.Password + "@" + ss.Path + "?database=" + ss.Dbname
	if db, err := gorm.Open(sqlserver.Open(dsn), &gorm.Config{}); err != nil {
		global.GVA_LOG.Error("SqlServer启动异常", zap.Any("err", err))
		os.Exit(0)
		return nil
	} else {
		sqlDB, _ := db.DB()
		sqlDB.SetMaxIdleConns(ss.MaxIdleConns)
		sqlDB.SetMaxOpenConns(ss.MaxOpenConns)
		return db
	}
}

```

### server/initialize/gorm.go

```go
// Gorm 初始化数据库并产生数据库全局变量
func Gorm() *gorm.DB {
	switch global.GVA_CONFIG.System.DbType {
	case "mysql":
		return GormMysql()
	case "sqlserver":
    		return GormSqlServer()
	default:
		return GormMysql()
	}
}
```

