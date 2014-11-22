var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {

  if (req.method !== 'GET') {
    res.writeHead(405);
    return res.end();
  }

  req.parsedUrl = url.parse(req.url, true);

  if (! handlers.hasOwnProperty(req.parsedUrl.pathname)) {
    res.writeHead(404);
    return res.end();
  }

  handlers[req.parsedUrl.pathname](req, res);

});

var handlers = {
  '/api/parsetime': function handler(req, res) {

    var isoDate = req.parsedUrl.query.iso;

    if (!isoDate) {
      res.writeHead(400);
      return res.end();
    }

    var date = new Date(isoDate);
    var responseData = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    };
    res.writeHeader(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(responseData));

  },
  '/api/unixtime': function handler(req, res) {

    var isoDate = req.parsedUrl.query.iso;

    if (!isoDate) {
      res.writeHead(400);
      return res.end();
    }

    var date = new Date(isoDate);
    var responseData = {
      unixtime: date.valueOf()
    };
    res.writeHeader(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(responseData));

  }
};

server.listen(process.argv[2]);