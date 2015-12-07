(function() {
  require.config({
    paths: {
      jade: '../vender/runtime',
      mainTpl: 'tpl/page1',
      mod1: 'module/mod1'
    }
  });

  require(['jade', 'mainTpl'], function(jade, tpl) {
    var o;
    o = document.createElement("div");
    o.innerHTML = tpl($CONFIG);
    return document.body.appendChild(o);
  });

}).call(this);
