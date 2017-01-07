//This is the built-in node emitter
// This file does not use emitters.js because it's using node's emitter
var Events = require('events');   // built-in event
var emitter = new Events();

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
