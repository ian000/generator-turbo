## generator-turbo [![](https://img.shields.io/npm/v/generator-turbo.svg?style=flat)](https://www.npmjs.org/package/generator-turbo)  
> 前端工程生成器 for turbo [![](https://img.shields.io/npm/v/gulp-turbo.svg?style=flat)](https://www.npmjs.org/package/gulp-turbo)  

### 前端工作流 功能说明

> 1. 快速构建前端项目
> 1. 提供易于开发、调试的开发联调环境，支持预编译语言（jade,stylus,coffee）
> 1. 提供基于requirejs的实时打包服务。
> 1. 提供http server, 支持mock接口数据功能。
> 1. 提供json文件自动校验
> 1. 提供80端口代理、转发功能
> 1. 提供htpp代理服务（类似 fiddler,charles功能，默认端口8989, 调试移动端必备）
> 1. 提供透明代理（即：线下不存在的资源，直接抓取线上）
>  - 更多请参考 ：https://www.npmjs.org/package/gulp-turbo


#### Getting Started

#### 1. 安装依赖

```shell
    npm i -g yo gulp bower generator-turbo
```

#### 2. 创建项目

```
  1. 运行generator

    # 创建项目根目录
    mkdir myProject
    cd myProject
    yo turbo

    # 注意：如果依赖没有被自动安装,请手动 npm i（安装所需时间取决与网络状况）

```

#### 3. 运行项目 （默认初始化包含demo文件）

```
    开发模式编译（注意：mac系统监听1024以下端口需要sudo）
    gulp

    生产模式编译
    gulp dist

    - 更多命令请参考   https://www.npmjs.org/package/gulp-turbo

```
#### 问题列表

  1. [- 使用turbo，前后端如何联调页面?](https://github.com/ian000/gulp-turbo/wiki/%E4%BD%BF%E7%94%A8turbo%EF%BC%8C%E5%89%8D%E5%90%8E%E7%AB%AF%E5%A6%82%E4%BD%95%E8%81%94%E8%B0%83%E9%A1%B5%E9%9D%A2)
  1. [- 如何设置浏览器代理?](https://github.com/ian000/gulp-turbo/wiki/%E5%A6%82%E4%BD%95%E8%AE%BE%E7%BD%AE%E6%B5%8F%E8%A7%88%E5%99%A8%E4%BB%A3%E7%90%86)
  1. [- 手动安装chrome代理插件：SwitchyOmega](http://jingyan.baidu.com/article/11c17a2c121c0ff446e39d16.html)


#### change log

    [12.14] -
            1. 文件夹简化，去掉generator层
            2. 去掉brower i
            3. 自动npm i

#### TODOS
  1. 子生成器

#### Contributors
<img src="https://avatars3.githubusercontent.com/u/3196171?v=3&s=40">  [赵新](https://github.com/ian000)  
