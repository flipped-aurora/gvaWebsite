---
id: oss
title: oss
---

> 此方案由 [ccfish86](https://github.com/ccfish86) 提供,gva团队对其进行优化并适配, [pr链接](https://github.com/flipped-aurora/gin-vue-admin/pull/232)
>
> - Minio需要自行搭建环境,阿里云需要购买空间,所以不放在 [gin-vue-admin](https://github.com/flipped-aurora/gin-vue-admin) 里

## server/config/oss.go

```go
package config

type Local struct {
	Path string `mapstructure:"path" json:"path" yaml:"path" `
}

type Qiniu struct {
	Zone          string `mapstructure:"zone" json:"zone" yaml:"zone"`
	Bucket        string `mapstructure:"bucket" json:"bucket" yaml:"bucket"`
	ImgPath       string `mapstructure:"img-path" json:"imgPath" yaml:"img-path"`
	UseHTTPS      bool   `mapstructure:"use-https" json:"useHttps" yaml:"use-https"`
	AccessKey     string `mapstructure:"access-key" json:"accessKey" yaml:"access-key"`
	SecretKey     string `mapstructure:"secret-key" json:"secretKey" yaml:"secret-key"`
	UseCdnDomains bool   `mapstructure:"use-cdn-domains" json:"useCdnDomains" yaml:"use-cdn-domains"`
}

type Minio struct {
	Id       string `mapstructure:"id" json:"id" yaml:"id"`
	Path     string `mapstructure:"path" json:"path" yaml:"path"`
	Token    string `mapstructure:"token" json:"token" yaml:"token"`
	Bucket   string `mapstructure:"bucket" json:"bucket" yaml:"bucket"`
	UseSsl   bool   `mapstructure:"use-ssl" json:"useSsl" yaml:"use-ssl"`
	Secret   string `mapstructure:"secret" json:"secret" yaml:"secret"`
	Endpoint string `mapstructure:"endpoint" json:"endpoint" yaml:"endpoint"`
}

type Aliyun struct {
	Path             string `mapstructure:"path" json:"path" yaml:"path"`
	Bucket           string `mapstructure:"bucket" json:"bucket" yaml:"bucket"`
	ACLType          string `mapstructure:"acl-type" json:"aclType" yaml:"acl-type"`
	Endpoint         string `mapstructure:"endpoint" json:"endpoint" yaml:"endpoint"`
	AccessKeyID      string `mapstructure:"access-key-id" json:"accessKeyId" yaml:"access-key-id"`
	SecretAccessKey  string `mapstructure:"secret-access-key" json:"secretAccessKey" yaml:"secret-access-key"`
	StorageClassType string `mapstructure:"storage-class-type" json:"storageClassType" yaml:"storage-class-type"`
}
```

## server/config/config.go

```go
type Server struct {
	JWT     JWT     `mapstructure:"jwt" json:"jwt" yaml:"jwt"`
	Zap     Zap     `mapstructure:"zap" json:"zap" yaml:"zap"`
	Redis   Redis   `mapstructure:"redis" json:"redis" yaml:"redis"`
	Email   Email   `mapstructure:"email" json:"email" yaml:"email"`
	Casbin  Casbin  `mapstructure:"casbin" json:"casbin" yaml:"casbin"`
	System  System  `mapstructure:"system" json:"system" yaml:"system"`
	Captcha Captcha `mapstructure:"captcha" json:"captcha" yaml:"captcha"`

	Mysql      Mysql      `mapstructure:"mysql" json:"mysql" yaml:"mysql"`
	Postgresql Postgresql `mapstructure:"postgresql" json:"postgresql" yaml:"postgresql"`
	Sqlite     Sqlite     `mapstructure:"sqlite" json:"sqlite" yaml:"sqlite"`
	Sqlserver  Sqlserver  `mapstructure:"sqlserver" json:"sqlserver" yaml:"sqlserver"`

	Local  Local  `mapstructure:"local" json:"local" yaml:"local"`
	Qiniu  Qiniu  `mapstructure:"qiniu" json:"qiniu" yaml:"qiniu"`
	Minio  Minio  `mapstructure:"minio" json:"minio" yaml:"minio"`
	Aliyun Aliyun `mapstructure:"aliyun" json:"aliyun" yaml:"aliyun"`
}
```

## server/config.yaml

```yaml
# local configuration
local:
  path: 'uploads/file'

# qiniu configuration (请自行七牛申请对应的 公钥 私钥 bucket 和 域名地址)
qiniu:
  zone: 'ZoneHuadong'
  bucket: 'qm-plus-img'
  img-path: 'http://qmplusimg.henrongyi.top'
  use-https: false
  access-key: '25j8dYBZ2wuiy0yhwShytjZDTX662b8xiFguwxzZ'
  secret-key: 'pgdbqEsf7ooZh7W3xokP833h3dZ_VecFXPDeG5JY'
  use-cdn-domains: false

# minio configuration
minio:
  id: 'minio'
  path: 'http://localhost:9000'
  token: ''
  bucket: 'public'
  use-ssl: false
  secret: 'minio1234'
  endpoint: 'localhost:9000'

# aliyun configuration
aliyun:
  path : 'https://xxx.oss-cn-beijing.aliyuncs.com'
  bucket : 'xxx'
  acl-type : ''
  endpoint : 'https://oss-cn-beijing.aliyuncs.com'
  access-key-id : 'xxxxxxx'
  secret-access-key : 'xxxxxxx'
  storage-class-type : 'Standard' # 存储桶存储类型
```

## server/utils/upload.go

```go
package upload

import (
	"fmt"
	"gin-vue-admin/global"
	"mime/multipart"
	"time"
)

var Oss OSS

type OSS interface {
	UploadFile(file *multipart.FileHeader) (string, string, error)
	DeleteFile(key string) error
}

func getObjectName(filename string) string {
	folder := time.Now().Format("20060102")
	return fmt.Sprintf("%s/%d%s", folder, time.Now().Unix(), filename) // 文件名格式 自己可以改 建议保证唯一性
}

func NewOss() OSS {
	switch global.GVA_CONFIG.System.OssType {
	case "local":
		Oss = &Local{}
	case "qiniu":
		Oss = &Qiniu{}
	case "minio":
		Oss = &Minio{}
	case "aliyun":
		Oss = &AliYun{}
	default:
		Oss = &Local{}
	}
	return Oss
}
```

## server/utils/local.go

```go
package upload

import (
	"errors"
	"gin-vue-admin/global"
	"gin-vue-admin/utils"
	"go.uber.org/zap"
	"io"
	"mime/multipart"
	"os"
	"path"
	"strings"
	"time"
)

type Local struct{}

// Upload 上传文件
func (l Local) UploadFile(file *multipart.FileHeader) (string, string, error) {
	// 读取文件后缀
	ext := path.Ext(file.Filename)
	// 读取文件名并加密
	name := strings.TrimSuffix(file.Filename, ext)
	name = utils.MD5V([]byte(name))
	// 拼接新文件名
	filename := name + "_" + time.Now().Format("20060102150405") + ext
	// 尝试创建此路径
	mkdirErr := os.MkdirAll(global.GVA_CONFIG.Local.Path, os.ModePerm)
	if mkdirErr != nil {
		global.GVA_LOG.Error("function os.MkdirAll() Filed", zap.Any("err", mkdirErr.Error()))
		return "", "", errors.New("function os.MkdirAll() Filed, err:" + mkdirErr.Error())
	}
	// 拼接路径和文件名
	p := global.GVA_CONFIG.Local.Path + "/" + filename

	f, openError := file.Open() // 读取文件
	if openError != nil {
		global.GVA_LOG.Error("function file.Open() Filed", zap.Any("err", openError.Error()))
		return "", "", errors.New("function file.Open() Filed, err:" + openError.Error())
	}
	defer f.Close() // 创建文件 defer 关闭

	out, createErr := os.Create(p)
	if createErr != nil {
		global.GVA_LOG.Error("function os.Create() Filed", zap.Any("err", createErr.Error()))

		return "", "", errors.New("function os.Create() Filed, err:" + createErr.Error())
	}
	defer out.Close() // 创建文件 defer 关闭

	_, copyErr := io.Copy(out, f) // 传输（拷贝）文件
	if copyErr != nil {
		global.GVA_LOG.Error("function io.Copy() Filed", zap.Any("err", copyErr.Error()))
		return "", "", errors.New("function io.Copy() Filed, err:" + copyErr.Error())
	}
	return p, filename, nil
}

// DeleteFile 删除文件
func (l Local) DeleteFile(key string) error {
	p := global.GVA_CONFIG.Local.Path + "/" + key
	if strings.Contains(p, global.GVA_CONFIG.Local.Path) {
		if err := os.Remove(p); err != nil {
			return errors.New("本地文件删除失败, err:" + err.Error())
		}
	}
	return nil
}
```

## server/utils/qiniu.go

```go
package upload

import (
	"context"
	"errors"
	"fmt"
	"gin-vue-admin/global"
	"github.com/qiniu/api.v7/v7/auth/qbox"
	"github.com/qiniu/api.v7/v7/storage"
	"go.uber.org/zap"
	"mime/multipart"
	"time"
)

type Qiniu struct{}

// UploadFile 上传文件
func (*Qiniu) UploadFile(file *multipart.FileHeader) (string, string, error) {
	putPolicy := storage.PutPolicy{Scope: global.GVA_CONFIG.Qiniu.Bucket}
	mac := qbox.NewMac(global.GVA_CONFIG.Qiniu.AccessKey, global.GVA_CONFIG.Qiniu.SecretKey)
	upToken := putPolicy.UploadToken(mac)
	cfg := qiniuConfig()
	formUploader := storage.NewFormUploader(cfg)
	ret := storage.PutRet{}
	putExtra := storage.PutExtra{Params: map[string]string{"x:name": "github logo"}}

	f, openError := file.Open()
	if openError != nil {
		global.GVA_LOG.Error("function file.Open() Filed", zap.Any("err", openError.Error()))

		return "", "", errors.New("function file.Open() Filed, err:" + openError.Error())
	}
	fileKey := fmt.Sprintf("%d%s", time.Now().Unix(), file.Filename) // 文件名格式 自己可以改 建议保证唯一性
	putErr := formUploader.Put(context.Background(), &ret, upToken, fileKey, f, file.Size, &putExtra)
	if putErr != nil {
		global.GVA_LOG.Error("function formUploader.Put() Filed", zap.Any("err", putErr.Error()))
		return "", "", errors.New("function formUploader.Put() Filed, err:" + putErr.Error())
	}
	return global.GVA_CONFIG.Qiniu.ImgPath + "/" + ret.Key, ret.Key, nil
}

// DeleteFile 删除文件
func (*Qiniu) DeleteFile(key string) error {
	mac := qbox.NewMac(global.GVA_CONFIG.Qiniu.AccessKey, global.GVA_CONFIG.Qiniu.SecretKey)
	cfg := qiniuConfig()
	bucketManager := storage.NewBucketManager(mac, cfg)
	if err := bucketManager.Delete(global.GVA_CONFIG.Qiniu.Bucket, key); err != nil{
		global.GVA_LOG.Error("function bucketManager.Delete() Filed", zap.Any("err", err.Error()))
		return errors.New("function bucketManager.Delete() Filed, err:" + err.Error())
	}
	return nil
}

// qiniuConfig 根据配置文件进行返回七牛云的配置
func qiniuConfig() *storage.Config {
	cfg := storage.Config{
		UseHTTPS: global.GVA_CONFIG.Qiniu.UseHTTPS,
		UseCdnDomains: global.GVA_CONFIG.Qiniu.UseCdnDomains,
	}
	switch global.GVA_CONFIG.Qiniu.Zone { // 根据配置文件进行初始化空间对应的机房
	case "ZoneHuadong":
		cfg.Zone = &storage.ZoneHuadong
	case "ZoneHuabei":
		cfg.Zone = &storage.ZoneHuabei
	case "ZoneHuanan":
		cfg.Zone = &storage.ZoneHuanan
	case "ZoneBeimei":
		cfg.Zone = &storage.ZoneBeimei
	case "ZoneXinjiapo":
		cfg.Zone = &storage.ZoneXinjiapo
	}
	return &cfg
}
```

## server/utils/minio.go

```go
package upload

import (
	"context"
	"errors"
	"fmt"
	"gin-vue-admin/global"
	"go.uber.org/zap"
	"mime/multipart"

	"github.com/minio/minio-go/v7"
	"github.com/minio/minio-go/v7/pkg/credentials"
)

type Minio struct{}

// UploadFile 上传文件
func (*Minio) UploadFile(file *multipart.FileHeader) (string, string, error) {
	client, newErr := minio.New(global.GVA_CONFIG.Minio.Endpoint, &minio.Options{ // 初始化minio client对象
		Creds: credentials.NewStaticV4(global.GVA_CONFIG.Minio.Id, global.GVA_CONFIG.Minio.Secret, global.GVA_CONFIG.Minio.Token),
		Secure: global.GVA_CONFIG.Minio.UseSsl,
	})
	if newErr != nil {
		global.GVA_LOG.Error("function minio.New() Filed", zap.Any("err", newErr.Error()))
		return "", "", errors.New("function oss.New() Filed, err:" + newErr.Error())
	}
	ctx := context.Background()
	if bucketErr := client.MakeBucket(ctx, global.GVA_CONFIG.Minio.Bucket, minio.MakeBucketOptions{Region: ""}); bucketErr != nil {
		if exists, existsErr := client.BucketExists(ctx, global.GVA_CONFIG.Minio.Bucket); !exists && existsErr != nil { // 检查我们是否已经拥有此存储桶(如果您运行两次，就会发生这种情况)
			global.GVA_LOG.Error("function client.BucketExists() Filed", zap.Any("err", existsErr.Error()))
			return "", "", errors.New("function client.BucketExists() Filed, err:" + existsErr.Error())
		}
		global.GVA_LOG.Info(fmt.Sprintf("We already own %s\n", global.GVA_CONFIG.Minio.Bucket))
	} else {
		global.GVA_LOG.Info(fmt.Sprintf("Successfully created %s\n", global.GVA_CONFIG.Minio.Bucket))
	}

	objectName := getObjectName(file.Filename)

	f, openErr := file.Open()
	if openErr != nil {
		global.GVA_LOG.Error("function file.Open() Filed", zap.Any("err", openErr.Error()))

		return "", "", errors.New("function file.Open() Filed, err:" + openErr.Error())
	}

	// 获取文件类型
	contentType := file.Header.Get("content-type")

	info, putErr := client.PutObject(ctx, global.GVA_CONFIG.Minio.Bucket, objectName, f, file.Size, minio.PutObjectOptions{ContentType: contentType})
	if putErr != nil {
		global.GVA_LOG.Error("function client.PutObject() Filed", zap.Any("err", putErr.Error()))
		return "", "", errors.New("function client.PutObject() Filed, err:" + putErr.Error())
	}

	global.GVA_LOG.Info(fmt.Sprintf("Successfully uploaded %s of size %d\n", objectName, info))
	return global.GVA_CONFIG.Minio.Path + "/" + global.GVA_CONFIG.Minio.Bucket + "/" + objectName, objectName, nil
}

// DeleteFile 删除文件
func (*Minio) DeleteFile(key string) error {
	client, newErr := minio.New(global.GVA_CONFIG.Minio.Endpoint, &minio.Options{
		Creds: credentials.NewStaticV4(global.GVA_CONFIG.Minio.Id, global.GVA_CONFIG.Minio.Secret, global.GVA_CONFIG.Minio.Token),
		Secure: global.GVA_CONFIG.Minio.UseSsl,
	}) // Initialize minio client object.
	if newErr != nil {
		global.GVA_LOG.Error("function minio.New() Filed", zap.Any("err", newErr.Error()))
		return errors.New("function minio.New() Filed, err:" + newErr.Error())
	}
	opts := minio.RemoveObjectOptions{GovernanceBypass: true}
	removeErr := client.RemoveObject(context.Background(), global.GVA_CONFIG.Minio.Bucket, key, opts)
	if removeErr != nil {
		global.GVA_LOG.Error("function client.RemoveObject() Filed", zap.Any("err", removeErr.Error()))
		return errors.New("function client.RemoveObject() Filed, err:" + removeErr.Error())
	}
	return nil
}
```

## server/utils/aliyun.go

```go
package upload

import (
	"errors"
	"gin-vue-admin/global"
	"go.uber.org/zap"
	"mime/multipart"

	"github.com/aliyun/aliyun-oss-go-sdk/oss"
)


type AliYun struct{}

// UploadFile 上传文件
func (*AliYun) UploadFile(file *multipart.FileHeader) (string, string, error) {
	var storageType oss.Option
	client, newErr := oss.New(global.GVA_CONFIG.Aliyun.Endpoint, global.GVA_CONFIG.Aliyun.AccessKeyID, global.GVA_CONFIG.Aliyun.SecretAccessKey, oss.Timeout(10, 120))
	if newErr != nil {
		global.GVA_LOG.Error("function oss.New() Filed", zap.Any("err", newErr.Error()))
		return "", "", errors.New("function oss.New() Filed, err:" + newErr.Error())
	}

	bucket, bucketErr := client.Bucket(global.GVA_CONFIG.Aliyun.Bucket) // 获取存储空间
	if bucketErr != nil {
		global.GVA_LOG.Error("function client.Bucket() Filed", zap.Any("err", bucketErr.Error()))
		return "", "", errors.New("function client.Bucket() Filed, err:" + bucketErr.Error())
	}

	switch global.GVA_CONFIG.Aliyun.StorageClassType { // 根据配置文件进行指定存储类型
	case "Standard": // 指定存储类型为标准存储
		storageType = oss.ObjectStorageClass(oss.StorageStandard)
	case "IA": // 指定存储类型为很少访问存储
		storageType = oss.ObjectStorageClass(oss.StorageIA)
	case "Archive": // 指定存储类型为归档存储。
		storageType = oss.ObjectStorageClass(oss.StorageArchive)
	case "ColdArchive": // 指定存储类型为归档存储。
		storageType = oss.ObjectStorageClass(oss.StorageColdArchive)
	default: // 无匹配结果就是标准存储
		storageType = oss.ObjectStorageClass(oss.StorageStandard)
	}

	f, openError := file.Open() // 读取文件
	if openError != nil {
		global.GVA_LOG.Error("function file.Open() Filed", zap.Any("err", openError.Error()))
		return "", "", errors.New("function file.Open() Filed, err:" + openError.Error())
	}
	contentType := file.Header.Get("content-type") // 获取文件类型
	objectType := oss.ContentType(contentType)
	var objectAcl oss.Option
	switch global.GVA_CONFIG.Aliyun.ACLType { // 根据配置文件进行指定访问权限
	case "private": // 指定访问权限为私有读写
		objectAcl = oss.ObjectACL(oss.ACLPrivate) // 指定访问权限为公共读
	case "public-read":
		objectAcl = oss.ObjectACL(oss.ACLPublicRead) // 指定访问权限为公共读
	case "public-read-write":
		objectAcl = oss.ObjectACL(oss.ACLPublicReadWrite) // 指定访问权限为公共读写
	case "default":
		objectAcl = oss.ObjectACL(oss.ACLDefault) // 指定访问权限为公共读
	default:
		objectAcl = oss.ObjectACL(oss.ACLPrivate) // 默认为访问权限为公共读
	}
	objectName := getObjectName(file.Filename) // 文件对象名
	putErr := bucket.PutObject(objectName, f, storageType, objectType, objectAcl) // 上传
	if putErr != nil {
		global.GVA_LOG.Error("function bucket.PutObject() Filed", zap.Any("err", putErr.Error()))
		return "", "", errors.New("function bucket.PutObject() Filed, err:" + putErr.Error())
	}

	return global.GVA_CONFIG.Aliyun.Path + "/" + objectName, objectName, nil
}

// DeleteFile 删除文件
func (*AliYun) DeleteFile(key string) error {
	client, newErr := oss.New(global.GVA_CONFIG.Aliyun.Endpoint, global.GVA_CONFIG.Aliyun.AccessKeyID, global.GVA_CONFIG.Aliyun.SecretAccessKey, oss.Timeout(10, 120))
	if newErr != nil {
		global.GVA_LOG.Error("function oss.New() Filed", zap.Any("err", newErr.Error()))
		return errors.New("function oss.New() Filed, err:" + newErr.Error())
	}

	// 获取存储空间。
	bucket, bucketErr := client.Bucket(global.GVA_CONFIG.Aliyun.Bucket)
	if bucketErr != nil {
		global.GVA_LOG.Error("function client.Bucket() Filed", zap.Any("err", bucketErr.Error()))
		return errors.New("function client.Bucket() Filed, err:" + bucketErr.Error())
	}

	// 删除单个文件。objectName表示删除OSS文件时需要指定包含文件后缀在内的完整路径，例如abc/efg/123.jpg。
	// 如需删除文件夹，请将objectName设置为对应的文件夹名称。如果文件夹非空，则需要将文件夹下的所有object删除后才能删除该文件夹。
	if err := bucket.DeleteObject(key); err != nil {
		global.GVA_LOG.Error("function bucket.DeleteObject() Filed!", zap.Any("err", err.Error()))
		return errors.New("function bucket.DeleteObject() Filed, err:" + err.Error())
	}
	return nil
}
```

使用代码

```go
// 上传文件
oss := upload.NewOss()
filePath, key, uploadErr := oss.UploadFile(header)
// 删除文件
oss := upload.NewOss()
err := oss.DeleteFile(key)
```