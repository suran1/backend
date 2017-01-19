var fs = require('fs');
var zlib = require('zlib');   // for zipping a file

var unzippedfilename = __dirname + '/book.txt';  //name of the file after it's unzipped
var zippedFileName = __dirname + '/book.txt.gz';  // name of the zipped file

var readable = fs.createReadStream(zippedFileName);  //create readable stream object that is the zipped file
var writeable = fs.createWriteStream(unzippedfilename); // create writeable stream object
var gzip = zlib.createUnzip();

readable.pipe(gzip).pipe(writeable);
