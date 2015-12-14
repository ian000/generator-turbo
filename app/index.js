'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var slugify = require('slugify');

var turboGenerator = yeoman.generators.Base.extend({
    init: function () {
        this.slugify = slugify;
        this.pkg = require('../package.json');
        this.on('end', function () {
            if (!this.options['skip-install']) {
                this.installDependencies();
            }
        });
    },

    askFor: function () {
        var done = this.async();
        this.log(this.yeoman);
        this.log(chalk.magenta('欢迎创建turbo项目， 技术支持QQ群：208517648'));

        var prompts = [
            {
                name: 'projectName',
                message: '项目名称',
                default: path.basename(process.cwd())
            },
            {
                name: 'version',
                message: '版本号',
                default: '0.0.1'
            },
            {
                name: 'repositoryType',
                message: '代码仓库类型',
                default: 'git'
            },
            {
                name: 'repositoryUrl',
                message: '代码仓库 url',
                default: ''
            },
            {
                name: 'description',
                message: '描述',
                default: '一个基于turbo的前端工程'
            },
            {
                name: 'main',
                message: 'main',
                default: 'index.js'
            },
            {
                name: 'authorName',
                message: '作者',
                default: ''
            },
            {
                name: 'authorEmail',
                message: '作者 Email',
                default: ''
            },
            {
                name: 'routerPath',
                message: '虚拟目录',
                default: '/'
            },
            {
                name: 'staticDomain',
                message: '线上静态资源服务器域名',
                default: 'xxx.bbb.com'
            },
            {
                name: 'vhost',
                message: '另一线上静态资源服务器域名,要求与domain指向相同的静态资源池',
                default: 'http://xxx.aaa.com.cn'
            },
            {
                name: 'forceLivereload',
                message: '是否开启onsave实时刷新浏览器？',
                default: true
            },
            {
                name: 'httpPort',
                message: 'http 端口号',
                default: "80"
            },
            {
                name: 'proxyPort',
                message: 'http代理端口号',
                default: "8989"
            }
        ];

        this.prompt(prompts, function (props) {
            for (var prop in props) {
                if (props.hasOwnProperty(prop)) {
                    this[prop] = props[prop];
                }
            }

            done();
        }.bind(this));
    },

    app: function () {
        this.directory('app', 'app');
        this.copy('gulpfile.js', 'gulpfile.js');
        this.copy('package.json', 'package.json');
        this.copy('project-conf.json', 'project-conf.json');
    },

    projectfiles: function () {
        this.copy('editorconfig', '.editorconfig');
        this.copy('jshintrc', '.jshintrc');
        this.copy('gitignore', '.gitignore');
    }
});

module.exports = turboGenerator;
