var http = require('http');

var url = process.argv[2];

http.get(url, function(response) {

  var fullData = '';
  response.setEncoding('utf8');
  response.on('data', function(data) {
    fullData += data;
  });
  response.on('end', function() {
    console.log(fullData.length);
    console.log(fullData);
  })

}).on('error', function(err) {
  console.error(err);
});