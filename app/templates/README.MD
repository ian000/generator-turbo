### <%= slugify(projectName) %>
========
> <%= description %>

### 目录说明 & turbo开发约定

```shell

  #代码目录
  app

    #开发模式编译后的目录，（禁止直接存放手工代码）
    dev

    #分发模式编译后的目录,用于上线（禁止直接存放手工代码）
    dist

    #模拟数据
    mock

    #源码目录
    src

      #coffescript源码目录（支持直接写.js文件）
      coffee

        #模块目录
        module

          #将会编译到app/dev/js/module/mod1.js，dist模式时，会被合并到page1.js里面
          mod1.coffee

        #将会编译到app/dev/js/page1.js,提供给page1.html使用
        page1.coffee

      #图片文件夹 ，将被copy到app/dev/img下
      img

      #jade文件夹，将被编译到app/dev/html下
      jade

        #布局
        layout

        #jade模块目录，【注意：将被编译到app/dev/js/tpl下，作为前端模板使用】
        module

          ###
          # page1.html的主文件,命名请保持 pageName_body.jade 格式,便于识别。
          # 将被编译到 app/dev/js/tpl/page1_body.js ，用作前端模板。
          ###
          page1_body.jade

          ###
          # page1_body.jade的数据源
          # 在jade中可以用 $CONFIG访问到此数据。
          # 在js中同样可以用全局变量 $CONFIG 访问此数据。
          # 此文件查找依赖命名规则，请务必保持pageName_$config.json格式
          ###
          page1_$config.json

          ###
          # 普通模块，可以被其他模块引用。详见在page1_body.jade中的用法
          # 将被编译到 app/dev/js/tpl/table.js ，用作前端模板。
          ###
          table.jade

        #将被编译到 app/dev/html下，继承了layout，可以include module下的jade文件
        #page1.jade

      ##
      # stylus目录，将被编译到  app/dev/css下
      # stylus支持css写法，怎么爽怎么写，没用过的同学自行百度
      ##
      stylus

        #模块目录
        module

        #样式文件，将被编译到 app/dev/css/main.css
        main.styl

      #外来资源目录。存放外来资源，不做任何处理，直接copy到 app/dev/vender下
      vender
        require.js

        #jade的浏览器端解析脚本
        runtime.js

```    
#### Contributors
[<%= authorName %>](<%= authorUrl %>)  
