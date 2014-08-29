var gutil = require('gulp-util'),
    PluginError = gutil.PluginError,
    through = require('through2'),
    defaults = require('defaults'),
    ljsx = require('ljsx');

module.exports = function(markedOpts){
  var opt = defaults(markedOpts,{ gfm:true });

  function transform(file,e,next){
    var self = this;

    if(file.isNull()){
      self.push(file);
      return next();
    }

    if(file.isStream()){
      // TODO
      return next();
    }
    
    var path = file.path,
        content = '';
    ljsx(path,opt).on('data',function(cont){
      content += cont;
    }).on('end',function(){
      file.contents = new Buffer(content);
      file.path = gutil.replaceExtension(file.path,'.jsx');
      self.push(file);
      next();
    }).on('error',function(err){
      self.emit('error',new PluginError('gulp-ljsx',err));
      next();
    });
  };

  return through.obj(transform);
};
