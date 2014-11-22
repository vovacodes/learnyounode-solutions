var http = require('http');
var concat = require('concat-stream');

var url = process.argv[2];

http.get(url, function(response) {

  response.setEncoding('utf8');
  response.pipe(concat(function(data) {
    console.log(data.length);
    console.log(data);
  }));

});