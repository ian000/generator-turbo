'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var slugify = require('slugify');

var turboGenerator = yeoman.generators.Base.extend({
    init: function () {
        this.slugify = slugify;
        this.yeoman = yeoman;
        this.pkg = require('../../package.json');

        this.on('end', function () {
            if (!this.options['skip-install']) {
                console.log("installDependencies" , __dirname)
                this.installDependencies();
            }
        });
    },

    askFor: function () {
        var done = this.async();
        // have Yeoman greet the user
        // this.log(this.yeoman);

        // replace it with a short and sweet description of your generator
        this.log(chalk.magenta('You are using yeoman F2E generator!'));

        var prompts = [
            {
                name: 'projectName',
                message: 'Project Name',
                default: path.basename(process.cwd())
            },
            {
                name: 'version',
                message: 'Version Number',
                default: '0.0.1'
            },
            {
                name: 'authorName',
                message: 'Author Name',
                default: ''
            },
            {
                name: 'authorEmail',
                message: 'Author Email',
                default: ''
            },
            {
                name: 'repositoryType',
                message: 'repository type',
                default: 'git'
            },
            {
                name: 'repositoryUrl',
                message: 'repository url',
                default: ''
            },
            {
                name: 'description',
                message: 'description',
                default: '一个基于turbo的前端工程'
            },
            {
                name: 'main',
                message: 'main file',
                default: 'index.js'
            },
            {
                type: 'checkbox',
                name: 'features',
                message: 'What more would you like?',
                choices: [
                    {
                        name: 'JS: jQuery  (Newest version)',
                        value: 'includeJquery',
                        checked: false
                    },
                    {
                        name: 'JS: zepto  (Newest version)',
                        value: 'includeZepto',
                        checked: false
                    },
                    {
                        name: 'JS: Bootstrap  (Newest version)',
                        value: 'includeBootstrap',
                        checked: false
                    }
                ]
            }
        ];

        this.prompt(prompts, function (props) {
            for (var prop in props) {
                if (props.hasOwnProperty(prop)) {
                    this[prop] = props[prop];
                }
            }

            var features = props.features;

            function hasFeature(feat) {
                return features.indexOf(feat) !== -1;
            }


            // include js
            this.includeJquery = hasFeature('includeJquery');
            this.includeZepto = hasFeature('includeZepto');
            this.includeBootstrap = hasFeature('includeBootstrap');

            done();
        }.bind(this));
    },

    app: function () {
        this.directory('app', 'app');
        this.copy('gulpfile.js', 'gulpfile.js');
        this.copy('package.json', 'package.json');
        this.copy('bower.json', 'bower.json');
    },

    projectfiles: function () {
        this.copy('editorconfig', '.editorconfig');
        this.copy('editorconfig', '.editorconfig');
        this.copy('jshintrc', '.jshintrc');
        this.copy('gitignore', '.gitignore');
    }
});

module.exports = turboGenerator;
