var util = require('util');
var Transform = require('stream').Transform;

util.inherits(Uppercaser, Transform);

function Uppercaser(options) {
  Transform.call(this, options)
}

Uppercaser.prototype._transform = function _transform(chunk, encoding, done) {
  if (encoding === 'buffer') encoding = 'utf8';

  var processedChunk = chunk.toString(encoding).toUpperCase();
  done(null, processedChunk);
};

module.exports = Uppercaser;