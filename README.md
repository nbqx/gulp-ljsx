## gulp-ljsx

[ljsx](https://github.com/nbqx/ljsx) plugin for gulp

this plugin is for my `README Driven Development` project.

## Install

    $ npm install git://github.com/nbqx/gulp-ljsx.git

## Usage

```js
var fs = require('fs'),
    gulp = require('gulp');

var ljsx = require('gulp-ljsx');

gulp.task('run',function(){
  var ljsxFile = [__dirname,'test','fixtures','test.ljsx'].join('/');
  return gulp
    .src(ljsxFile)
    .pipe(ljsx())
    .pipe(gulp.dest('./'));
});
```
