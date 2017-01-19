//connecting streams
//in Node.js docs - look for Stream.readable.pop(destination,[options])

var fs = require('fs');
var zlip = require('zlib');   // for zipping afile
var filename = __dirname + '/lorem.txt';
var writeFileName = __dirname + '/lorem-pipe.txt';

var readable = fs.createReadStream(filename);
var writeable = fs.createWriteStream(writeFileName);

readable.pipe(writeable);  // reads text from lorem.txt and pipes it to writeable stream
                           // writeable takes the data and writes the file to the hard disk
