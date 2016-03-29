'use strict';
var 
    util       = require('util')
  , path       = require('path')
  , yeoman     = require('yeoman-generator')
  , yosay      = require('yosay')
  , slugify    = require('slugify')
  , tpl        = ''
  , scriptExt = ''
  ;

const 
    SRCROOT = 'app/src'
  , PATHCONF   = {
        jade   : SRCROOT+'/jade'
      , stylus : SRCROOT+'/stylus'
      , coffee : SRCROOT+'/coffee/entry'
      , js     : SRCROOT+'/coffee/entry'
      , img    : SRCROOT+'/img'
    }
  ;

module.exports = yeoman.generators.Base.extend({

  constructor : function() {

    yeoman.generators.Base.apply(this, arguments);
    this.log(yosay('turbo子任务:创建页面相关文件'));
    

  },

  initializing(){
    this.opts      = this.options || {};
  },
  
  promptingPath() {
    var done = this.async();
    this.prompt([
    {
      type    : 'input',
      name    : 'pageName',
      message : '请输入新页面名称（不带.jade扩展名）：',
      default : 'page1' // Default to current folder name
    },
    {
      type    : 'input',
      name    : 'path',
      message : '请输入新页面的路径：',
      default : '' // Default to current folder name
    },
    ], function (answers) {
      this.log(answers.path);
      this.opts.path = answers.path;
      this.opts.pageName = answers.pageName;
      done();
    }.bind(this));
  },
  createJade(){
    this.log('this.opts.path',this.opts.path)
    // create page
    this.fs.copyTpl(
        this.templatePath('demo.jade')
      , path.join(PATHCONF.jade, this.opts.path,this.opts.pageName+'.jade')
      , {
            jsEntryWithPath : path.join(this.opts.path, this.opts.pageName)
          , cssMainWithPath : path.join(this.opts.path, this.opts.pageName)
        }
    );

    //create body
    this.fs.copyTpl(
        this.templatePath('demo_body.jade')
      , path.join(PATHCONF.jade,this.opts.path, 'module', this.opts.pageName+'_body.jade')
      , {
            pageNameBody    : path.join(this.opts.path,'module', this.opts.pageName+'_body')
          , pageName        : this.opts.pageName
        }
    );

  },

  createStylus(){

    this.fs.copyTpl(
        this.templatePath('demo.styl')
      , path.join(PATHCONF.stylus, this.opts.path,this.opts.pageName+'.styl')
      , {
          pageName : this.opts.pageName
        }
    );

  },
  promptingScriptExt: function () {
    var done = this.async();
    this.prompt({
      type    : 'list',
      choices : ['js','coffee'],
      name    : 'name',
      message : 'which your script type?',
      default : this.appname // Default to current folder name
    }, function (answers) {
      this.log(answers.name);
      scriptExt = answers.name;
      done();
    }.bind(this));
  },
  createJs(){
    
    this.fs.copyTpl(
        this.templatePath('demo.'+scriptExt)
      , path.join(PATHCONF[scriptExt], this.opts.path, this.opts.pageName+'.'+scriptExt)
      , {
          pageName : this.opts.pageName
        }
    );

  },

  end(){
    this.log('所有与新页面相关文件已创建完成 !  请control+c 结束会话');
  }

});
