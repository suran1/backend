//Exercise 2


var http = require ('http');
var emoji = require('node-emoji');

var server = http.createServer(function (req, res) {
  res.write(emoji.random().emoji);
  res.end();
});

server.listen(8001);
console.log('Emoji server running on port 8001...');
