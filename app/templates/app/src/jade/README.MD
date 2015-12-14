# 目录说明
> jade文件目录，将被编译到app/dev/html下

## 开发约定

### page1.jade
> 将被编译到 app/dev/html/page1.html
> 继承了layout，可以include module下的jade文件

### page1_$config.json

> 作为page1_body.jade的数据源
> 在jade中可以用 $CONFIG访问到此数据。
> 在js中同样可以用全局变量 $CONFIG 访问此数据。
> 此文件查找依赖命名规则，请务必保持pageName_$config.json格式
