var http = require('http');
var Uppercaser = require('./modules/uppercaser');

var port = process.argv[2];

var server = http.createServer(function(req, res) {
  if (req.method !== 'POST') {
    return res.end();
  }

  req.setEncoding('utf8');
  req.pipe(new Uppercaser()).pipe(res);
});

server.listen(port);