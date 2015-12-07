(function() {
  var gulp, porjectConf, requireDir, turbo;

  require('coffee-script').register();

  gulp = require('gulp');

  requireDir = require('require-dir');

  turbo = require('gulp-turbo');

  porjectConf = require('./porject-conf.json');

  global.globalGulp = gulp;

  global.pkg = porjectConf;

  requireDir(turbo.dir);

  gulp.task('compile', ['jade', 'jadeToJs', 'stylus', 'coffee', 'cpVender', 'cpImg']);

  gulp.task('dev', ['jsonlint', 'setDev', 'compile', 'proxy', 'server', 'watch']);

  gulp.task('dist', ['setDist', 'jade', 'stylus', 'rMin', 'cpVender', 'cpImg', 'server', 'watch']);

  gulp.task('default', ['dev']);

}).call(this);
