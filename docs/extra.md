---
id: extra
title: 说明
---

目录:

- [zap](./zap)
- [docker](./docker)
- [docker-compose](./docker-compose)

额外功能

- 可以按照自己的需求进行代码调整
- 如果修改了代码,出了任何问题,请自行负责,别归咎到[gin-vue-admin](https://github.com/flipped-aurora/gin-vue-admin)的身上

## 使用代码生成器,把生成的文件放到指定目录

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

