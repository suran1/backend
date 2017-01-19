var fs = require('fs');
var zlib = require('zlib');   // for zipping afile

var filename = __dirname + '/lorem.txt';
var writeFileName = __dirname + '/lorem-pipe2.txt';
var zippedFileName = __dirname + '/loremzip.txt.gz';


var readable = fs.createReadStream(filename);

var writeable = fs.createWriteStream(zippedFileName); // writes a compressed file
var gzip = zlib.createGzip(); // doesn't handle the writing of the file or piping


readable.pipe(gzip).pipe(writeable);  //this reads the lorem.txt and pipes the data to
                                     // to gzip, which will compress the file in memory
                                     // and creates a gzip object in memory (it is a
                                     // transformed stream)
                                     // then it pipes it to writable, which will write
                                     // the gzip object to the hard drive 
