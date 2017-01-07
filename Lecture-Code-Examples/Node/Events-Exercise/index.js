var emitter = require('./emitter');

emitter.on('Number-Fun', function () {
  console.log((Math.random() * 10).toString());
});

emitter.on('Number-Fun', function () {
  console.log(5 + 6);
});

emitter.on('Words-are-fun', function() {
  console.log('Yikes!');
});

emitter.emit('Number-Fun');
emitter.emit('Words-are-fun');
