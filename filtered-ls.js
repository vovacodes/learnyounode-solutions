var fs = require('fs');
var path = require('path');

var dirPath = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(dirPath, function(err, list) {
  if (err) return console.error(err);

  list.forEach(function(fileName) {
    if (ext === path.extname(fileName)) {
      console.log(fileName);
    }
  });
});
