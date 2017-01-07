var emitter = require('./emitters');

emitter.on('call-the-hogs', function() {
  console.log('WOOOOOOOOOOO');
});

emitter.on('call-the-hogs', function() {
  console.log('PIG');
});

emitter.on('call-the-hogs', function() {
  console.log('SOOOOOOOOOIE!');
});

emitter.emit('call-the-hogs');
