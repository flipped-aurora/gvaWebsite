---
id: email
title: email
---

## 邮件报警中间件

中间件文件 [email.go](https://github.com/flipped-aurora/gin-vue-admin/blob/master/server/middleware/email.go)
```go
package middleware

import (
	"gin-vue-admin/global"
	"gin-vue-admin/model"
	"gin-vue-admin/model/request"
	"gin-vue-admin/service"
	"gin-vue-admin/utils"
	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
	"io/ioutil"
	"strconv"
	"time"
)

func ErrorToEmail() gin.HandlerFunc {
	return func(c *gin.Context) {
		var username string
		if claims, ok := c.Get("claims"); ok {
			waitUse := claims.(*request.CustomClaims)
			username = waitUse.Username
		}else {
			id, _ := strconv.Atoi(c.Request.Header.Get("x-user-id"))
			err, user := service.FindUserById(id)
			if err != nil{
				username = "Unknown"
			}
			username = user.Username
		}
		body, _ := ioutil.ReadAll(c.Request.Body)
		record := model.SysOperationRecord{
			Ip:     c.ClientIP(),
			Method: c.Request.Method,
			Path:   c.Request.URL.Path,
			Agent:  c.Request.UserAgent(),
			Body:   string(body),
		}
		now := time.Now()

		c.Next()

		latency := time.Now().Sub(now)
		status := c.Writer.Status()
		record.ErrorMessage = c.Errors.ByType(gin.ErrorTypePrivate).String()
		str := "接收到的请求为" + record.Body + "\n" + "请求方式为" + record.Method + "\n" + "报错信息如下" + record.ErrorMessage + "\n" + "耗时" + latency.String() + "\n"
		if global.GVA_CONFIG.System.ErrorToEmail {
			if status != 200 {
				subject := username + "" +record.Ip + "调用了" + record.Path + "报错了"
				if err := utils.ErrorToEmail(subject, str); err != nil {
					global.GVA_LOG.Error("ErrorToEmail Failed, err:", zap.Any("err", err))
				}
			}
		}
	}
}
```

- 建议使用把ErrorToEmail()注册为全局中间件,在 [router.go](https://github.com/flipped-aurora/gin-vue-admin/blob/gva_gormv2_dev/server/initialize/router.go#L23) 的`Router.Use(middleware.Cors())`后面加上 `.User(middleware.ErrorToEmail())`
- str为邮件发送内容,可以按照自己的需要修改为对应内容
- 注意这里判断的是c.Writer.Status()这个状态码,而不是这个[response.go](https://github.com/flipped-aurora/gin-vue-admin/blob/master/server/global/response/response.go) 所定义的状态码
- 不为200状态码,就代表着服务器部署的server服务挂了,这时候你就可以收到邮件,是哪个用户调用了哪个接口,出了什么错,接下来就是你的表演时间了
- [response.go](https://github.com/flipped-aurora/gin-vue-admin/blob/master/server/global/response/response.go) 所定义的状态码都是返回200状态的,通过json中的code是0还是7判断成功与失败
- 此中间件仅仅是做示范功能,按照自己需求进行修改即可

## 使用gin的context进行传递对应内容
api层代码示范
```go
// key string
// value interface{} 
// 根据自己的业务需求,自定义传递的key与value, value建议使用struct,需要使用的时候,利用类型断言进行取出
c.Set(key, value)
```
middleware层代码
```go
if value, ok := c.Get(key); ok {
    v := value.(*自定义struct)
}
// 获得的信息放入str里,就能把内容发送配置的邮件
```
