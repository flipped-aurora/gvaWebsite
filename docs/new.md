---
id: new
title: 特性&技巧
---

整理并持续更新使用技巧[Tips.]和最新特性[Feat.]

----

## [Feat.] 根据权限隐藏或展示前端dom （[2020.07.27更新](https://github.com/flipped-aurora/gin-vue-admin/commit/c5b1f279f9b6ce64835f8c5518fedd1025b9eaa0)）

增加了`v-auth`指令,支持`v-auth.not` 

使用方法如下，row中三个dom，效果为:

- 第一个`dom`对角色ID为888的角色不显示
- 第二个`dom`对角色ID为888的角色显示
- 第三个`dom`对角色ID为888,999,111的角色不显示
- 第四个`dom`对角色ID为888,999,111的角色显示

```vue
<el-row :gutter="32">
    <el-col v-auth.not="888" :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
            <raddar-chart />
        </div>
    </el-col>
    <el-col v-auth="888" :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
            <stackMap />
        </div>
    </el-col>
    <el-col v-auth.not="[888,999,111]" :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
            <Sunburst/>
        </div>
    </el-col>
      <el-col v-auth="[888,999,111]" :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
            <Sunburst/>
        </div>
    </el-col>
</el-row>
```

-----

## [Tips.] 多点登陆和redis（如果用的话）

首先要将配置文件中 `use-multipoint` 设置为 true，并且安装redis。这样，项目启动时，会在`core/server.go`中初始化redis。

这里简单讲一下实现逻辑，我们的多点登陆判断在`sever/v1/sys_user.go`的`tokenNext`方法中。当用户登陆时，我们会先生成token，然后用户名去`redis`查询该用户是否已经有在使用的token（即是否已经登陆过）：

- 如果没有，那就将生成的token存入redis，完成登陆。
- 如果有，那就将该token存入黑名单（mysql），将生成的token存入redis，完成登陆。

之所以单独讲一下这里，是因为有些场景不限制多点登陆，又想获取到用户的token，理解了以上实现方式，可以根据自己的业务修改，或者另写其他逻辑。

----

## [Tips.] Nginx的配置（如果用的话）

代码参考如下

```nginx
location  /v1 {
  		proxy_set_header Host $http_host;
			proxy_set_header  X-Real-IP $remote_addr;
			proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
			proxy_set_header X-Forwarded-Proto $scheme;
    	rewrite ^/v1/(.*)$ /$1 break;  #重写
    	proxy_pass 后端地址; # 设置代理服务器的协议和地址
    }
```

## [Tips.]  使用代码生成器,把生成的文件放到指定目录

**仅Mac系统通过测试，windows未测试，慎用**

- 代码生成器文件自动放到指定路径
- 可能出现未知问题
- 谨慎使用
- 不要重复生成相同的文件

1. 添加AutoMoveFile函数

```go
func AutoMoveFile(autoPath string, dataList []tplData) (err error) {
	for _, v := range dataList {
		oldPath := v.autoCodePath
		newPath := strings.Split(v.autoCodePath, autoPath)[1]
		if strings.Contains(newPath, "fe") {
			if strings.Contains(newPath, "js") {
				api := strings.Split(newPath, "/")
				err = os.Rename(oldPath, "../web/src/api/"+api[3])
			}else {
				var workdir string
				view := strings.Split(newPath, "/")
				workdir, err = os.Getwd()
				dir := strings.Split(workdir, "server")[0]+"web/src/view/"+strings.Split(view[3], ".")[0]
				err = os.MkdirAll(dir,os.ModePerm)
				err = os.Rename(oldPath, dir+"/"+view[3])
			}
		} else if strings.Contains(newPath, "te") {
			filename := strings.Split(newPath, "/")
			if strings.Contains(newPath, "api") {
				err = os.Rename(oldPath, "./api/v1/"+filename[len(filename)-1])
			} else if strings.Contains(newPath, "model") {
				err = os.Rename(oldPath, "./model/"+filename[len(filename)-1])
			} else if strings.Contains(newPath, "request") {
				err = os.Rename(oldPath, "./model/request/"+filename[len(filename)-1])
			} else if strings.Contains(newPath, "router") {
				err = os.Rename(oldPath, "./router/"+filename[len(filename)-1])
			} else if strings.Contains(newPath, "service") {
				err = os.Rename(oldPath, "./service/"+filename[len(filename)-1])
			}
		}
	}
	return err
}
```

2. 调用函数

```go
if true {
		err := AutoMoveFile(autoPath,dataList)
		if err != nil {
			panic(err)
		}
		if err := os.RemoveAll(autoPath); err != nil { // 移除中间文件
			return err
		}
		return errors.New("生成成功")
	}
```

