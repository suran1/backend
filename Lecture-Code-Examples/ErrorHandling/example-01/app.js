//node is actually  doing the error callback
// Operational error - file doesn't exist
// Error was handled by the file system
var fs = require('fs');

var filepath = __dirname + '/doesnotexist.txt';
//var filepath = __dirname + '/lorem.txt';

//statbrings back statistics (info) about the file
// other methods
fs.stat(filepath, function(error, stats){
    if(error) {
        console.log('ERROR: ');
        console.log(error);
    } else {
        console.log('STATS: ');
        console.log(stats);
    }
});
