var fs = require('fs');
var path = require('path');

module.exports = function dirFileFilter(dirPath, extension, cb) {

  fs.readdir(dirPath, function(err, list) {
    if (err) return cb(err);

    var fileList = list.filter(function(fileName) {
      return ('.' + extension) === path.extname(fileName);
    });
    cb(null, fileList);
  });

};
