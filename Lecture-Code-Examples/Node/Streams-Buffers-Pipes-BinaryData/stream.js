var fs = require('fs');
var filename = __dirname + '/lorem.txt';
var writeFileName = __dirname + '/lorem-copy.txt';
var options = {
  encoding: 'utf-8',
  highWaterMark: 8 * 1024  // changes the defualt buffer size
}
var readable = fs.createReadStream(filename, options);  // readable is readStream object
                                               // that fs has created for us. Note
                                           // that the readStream object Inherits
                                              // from event emitter


var writeable = fs.createWriteStream(writeFileName);

readable.on('data', function(chunk){         // 'on' method is from Event Emitter object
    //console.log(chunk);
    console.log(chunk.length);
    writeable.write(chunk)
});

// file is so big, output is so reads it twice


//fat arrow has same scope as it the outward function, es5 has a distinct scope
