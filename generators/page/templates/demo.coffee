
###
只与本页面相关的js逻辑写在这里
###
require [ "tpl/<%=pageName%>_body" ], (tpl) ->
  
  ###
  * 用数据渲染body模板，并追加到document.body下
  * param  {object} data 模板数据
  * return {[type]}
  ###
  appdBody = (data) ->
    o = document.createElement("div")
    o.innerHTML = tpl(data)
    document.body.appendChild o
  
  ###*
   * 按依赖顺序执行模块的init方法。
   * return {[type]} [description]
  ###
  initMods = ->
    mods = Array::slice.call(arguments)
    i = 0

    while i < mods.length
      mod = mods[i]
      mod.init()  if mod and typeof mod.init is "function"
      i++
  
  #$CONFIG渲染页面模板
  appdBody $CONFIG
  
  #init
  initMods.apply null, arguments
