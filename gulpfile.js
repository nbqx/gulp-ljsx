var fs = require('fs'),
    gulp = require('gulp');

var ljsx = require('./');

gulp.task('run',function(){
  var ljsxFile = [__dirname,'test','fixtures','test.ljsx'].join('/');
  return gulp
    .src(ljsxFile)
    .pipe(ljsx())
    .pipe(gulp.dest('./'));
});
