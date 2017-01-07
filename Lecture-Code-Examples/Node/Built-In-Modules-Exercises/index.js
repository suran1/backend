// put builtin node modules or npm modules come first by convention
var http = require('http');

var fIO = require ('./module');


var server = http.createServer(function (req, res){
  fIO.makeDir('/temp2');
  fIO.createFile('./temp2/myNewFile.txt', 'This is a bunch of text to put in the file.');
  var contents = fIO.appendFile('./temp2/myNewFile.txt', '\nMore text to add\n');
  res.write(contents);
  //fIO.deleteFile('./temp/myNewFile.txt');
  res.end();
});

server.listen(8000);
console.log('sever is listenining on port 8000...');
