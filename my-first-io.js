var fs = require('fs');

var filePath = process.argv[2];
var fileBuf = fs.readFileSync(filePath);
var numberOfLines = fileBuf.toString().split('\n').length;

console.log(numberOfLines - 1);