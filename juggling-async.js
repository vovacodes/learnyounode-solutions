var http = require('http');
var concat = require('concat-stream');
var async = require('async');

var urls = process.argv.slice(2);
var tasks = urls.map(function(url) {
  return getContent.bind(null, url);
});

async.parallel(tasks, function(err, results) {
  if (err) return console.error(err);

  results.forEach(function(data) {
    console.log(data);
  });
});

function getContent(url, cb) {

  http.get(url, function(response) {
    response.setEncoding('utf8');
    response.pipe(concat(function (data) {
      cb(null, data);
    }));
  });

}