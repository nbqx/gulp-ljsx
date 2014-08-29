var fs = require('fs'),
    gutil = require('gulp-util'),
    test = require('tape'),
    colorize = require('tap-colorize');

var ljsx = require('../');
var inp = [__dirname,'fixtures','test.ljsx'].join('/');
test.createStream().pipe(colorize()).pipe(process.stdout);

test('a test!',function(t){
  var dt = new gutil.File({
    cwd: __dirname,
    base: [__dirname,'fixtures'].join('/'),
    path: inp,
    contents: fs.readFileSync(inp)
  });
  
  var lj = ljsx({gfm:true});
  lj.on('data',function(out){
    var res = fs.readFileSync([__dirname,'result.jsx'].join('/'));
    t.equal(out.path,[__dirname,'fixtures','test.jsx'].join('/'));
    t.equal(out.contents+'',res+'');
    t.end();
  });

  lj.write(dt);
});
