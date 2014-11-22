var dirFileFilter = require('./modules/dir-file-filter');

dirFileFilter(process.argv[2], process.argv[3], function(err, fileList) {
  if (err) return console.error(err);

  fileList.forEach(function(fileName) { console.log(fileName) });
});