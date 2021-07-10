---
id: first_master
title: 初始化数据New
---

## 1.server

### 1.1 Goland打开server文件夹

- ![image-20210709230701840](../static/first/image-20210709230701840.png)
- ![image-20210710082408883](../static/first/image-20210710082408883.png)

### 1.2 启动server项目

- 打开终端工具, 输入以下命令

```go
go generate -x // -x 显示并执行命令
```

> [Go编译工具命令](https://www.cnblogs.com/binHome/p/14845617.html)



:::tip 您可能遇到的问题

  在终端 输入`go generate -x` 之后并没有执行成功,显示以下错误

```shell
go: github.com/360EntSecGroup-Skylar/excelize/v2@v2.3.2: missing go.sum entry; to add it:
        go mod download github.com/360EntSecGroup-Skylar/excelize/v2
```

![image-20210710083515570](../static/first/image-20210710083515570.png)

看到这个不要慌,使用 `go mod download github.com/360EntSecGroup-Skylar/excelize/v2` 或者 `go mod tidy`
:::




2. 启动server项目

   ![image-20210710084944467](../static/first/image-20210710084944467.png)

- 启动成功

  ![image-20210710085458536](../static/first/image-20210710085458536.png)


## 2 web 项目

### 2.1 安装nodejs

[Node.js (nodejs.org)](https://nodejs.org/zh-cn/)

### 2.2 使用 `vscode` 打开 `web` 项目

![image-20210710090346568](../static/first/image-20210710090346568.png)

![image-20210710090522820](../static/first/image-20210710090522820.png)

### 2.3 安装cnpm 并使用 cnpm i 安装依赖

> 不是必要的,如果你有科学上网,那么你完全可以不用这个 `cnpm` , 直接 `npm i`

- 打开vscode终端

![image-20210710091242940](../static/first/image-20210710091242940.png)

- 安装 `cnpm`

```shell
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

![image-20210710085822538](../static/first/image-20210710085822538.png)

- 安装 `cnpm` 成功

![image-20210710091603565](../static/first/image-20210710091603565.png)

- `cnpm i` 安装依赖

![image-20210710091652063](../static/first/image-20210710091652063.png)

- `cnpm i` 安装依赖成功

![image-20210710091951055](../static/first/image-20210710091951055.png)

### 2.4 npm i 安装依赖

> 如果你执行了2.3

- 打开终端

![image-20210710091242940](../static/first/image-20210710091242940.png)

- `npm i` 安装依赖

![image-20210710092133461](../static/first/image-20210710092133461.png)

- `npm i` 安装依赖成功

![image-20210710092230558](../static/first/image-20210710092230558.png)

### 2.5 启动项目

- 使用 `npm run serve` 命令启动项目

![image-20210710092334248](../static/first/image-20210710092334248.png)

### 1.3 启动成功

![image-20210710092428018](../static/first/image-20210710092428018.png)

如果没有正常打开此页面, 请手动打开浏览器 输入网址 http://localhost:8080/ 或者 http://127.0.0.1:8080/



## 3 init

### 3.1 初始化数据

- 前往初始化页面

![image-20210710093437964](../static/first/image-20210710093437964.png)

- 点击我已确认

![image-20210710093531537](../static/first/image-20210710093531537.png)

- 输入对应mysql数据库信息

![image-20210710093620817](../static/first/image-20210710093620817.png)

- 点击立即初始化

![image-20210710093756700](../static/first/image-20210710093756700.png)

- 正在初始化数据库,请稍候

![image-20210710093842228](../static/first/image-20210710093842228.png)

- 操作成功

![image-20210710094141115](../static/first/image-20210710094141115.png)

- 输入验证码后, 点击登录按钮

![image-20210710094329635](../static/first/image-20210710094329635.png)

- 成功打开仪表盘页面

![image-20210710094356041](../static/first/image-20210710094356041.png)

## 4. 使用Goland运行web项目

### 4.1 编辑配置

![image-20210710094929206](../static/first/image-20210710094929206.png)

### 4.2 添加npm启动项

![image-20210710095126844](../static/first/image-20210710095126844.png)

### 4.3 配置

![image-20210710095356257](../static/first/image-20210710095356257.png)

### 4.4 配置完成

![image-20210710095715145](../static/first/image-20210710095715145.png)

### 4.4 启动web项目

![image-20210710095814641](../static/first/image-20210710095814641.png)

### 4.5 启动web项目成功

![image-20210710095838176](../static/first/image-20210710095838176.png)
