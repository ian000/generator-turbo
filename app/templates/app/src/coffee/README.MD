# 目录说明
> coffescript源码目录（支持直接写.js文件，将会直接copy到app/dev/js目录下）

## 开发约定
> 根目录用于存放requirejs 入口文件，以文件名对应，
> 例：page1.coffee 将服务于 app/src/jade/page1.jade
> page1.coffee 范例
```coffeescript
  require.config
      paths:
          # 浏览器端jade引擎
          jade: '../vender/runtime'

          # 页面主要模板，以 app/dev/js/tpl下的pageName_body.js识别
          mainTpl:'tpl/page1_body'

          # 也可以引入相关模块
          mod1:'module/mod1'

  require ['jade','mainTpl'], (jade, tpl)->
    o = document.createElement "div"

    # 将$CONFIG传给主模板
    o.innerHTML = tpl $CONFIG

    #将节点追加到body（已经生成了html片段了，此处行为你可以自由定制）
    document.body.appendChild o
