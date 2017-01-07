var http = require('http');

var fIO = require ('./file-io-chaining');


var server = http.createServer(function (req, res){
  fIO.makeDir('/temp2');
  res.write(
    fIO
      .createFile('./temp2/myNewFile.txt', 'My Magic Number:\n')
      .appendFile((Math.random() * 10).toString())
      .readFile()
    );
  //fIO.deleteFile('./temp/myNewFile.txt');
  res.end();
});

server.listen(8000);
console.log('sever is listenining on port 8000...');
