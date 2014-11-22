var fs = require('fs');

var filePath = process.argv[2];

fs.readFile(filePath, 'utf8', function(err, fileContentString) {
  if (err) return console.log(err);

  console.log(fileContentString.split('\n').length - 1);
});