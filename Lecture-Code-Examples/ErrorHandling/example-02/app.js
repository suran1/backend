var fs = require('fs');

var filepath = __dirname + '/baddata.json';
//var filepath = __dirname + '/lorem.txt';

var jsonData = fs.readFileSync(filepath, 'utf-8');


// this will error because it's missing a bracket
// this is an Operational error that is SYNCHRONOUS (we're using synchronous error
// handling methods)

// this is an example of consuming a synchronous error
try {
    JSON.parse(jsonData);
} catch (error) {
    console.log('ERROR: ');
    console.log(error);
}
