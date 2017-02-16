// Example of Programmer error

var fs = require('fs');



// this will error because no filepath was given (filepath doesn't have a value)
// filepath is null - because programmer didn't define the variable.
fs.stat(filepath, function(error, stats){
    if(error) {
        console.log('ERROR: ');
        console.log(error);
    } else {
        console.log('STATS: ');
        console.log(stats);
    }
});
