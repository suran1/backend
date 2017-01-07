var path = require('path');
var fs = require('fs');


//path.basename - just string manipulation - it doesn't check the file system
console.log(path.basename('~/backend/Lecture-Code-Examples/Node/Built-inNodeModules/index.js'));

console.log(path.basename('~/backend/Lecture-Code-Examples/Node/Built-inNodeModules/script.js'));

console.log(path.basename('~/backend/Lecture-Code-Examples/Node/Built-inNodeModules/'));

console.log(path.basename('~/backend/Lecture-Code-Examples/Node/Built-inNodeModules'));

//path.dirname - just string manipulation - it doesn't check the file system
console.log(path.dirname('~/backend/Lecture-Code-Examples/Node/Built-inNodeModules/index.js'));
console.log(path.dirname('~/backend/Lecture-Code-Examples/Node/Built-inNodeModules/'));


// path.resolve  - constructs an absolute path for a file. path.resolve checks
// the file system.
// You can also build a path (it's just a string - nothing happens to the file
//system). Starts from the right. When it hits an absolute path (/foldername), that's
// where it stops

//path.resolve will also concatenate with a variable and a string as long as
// the variable is the string


console.log(path.resolve('index.js'));
console.log(path.resolve('/apps', 'node', 'index.js'));  // /apps/node/index.js
console.log(path.resolve('/apps', '/node', 'index.js'));  // /node.js


//fs examples the main ones we'll use are:
//  -- writeFileSync
//  -- readFileSync
//  -- appendFileSync
//  -- unlinkSync()


// writeFileSync
// Takes three arguments:
// -- The file to write
// -- The data we want to write to the file (either a string or a buffer)
// -- File encoding (default is ‘utf-8’  <- this is what text is)
// Returns: 'undefinded'
// If the file already exists, it overwrites it. See fs documentation


fs.writeFileSync('new-file.txt', 'Yay JavaScaript!\n');
console.log('file created');

// readFileSync
// Takes two arguments. It assumes your passing a buffer, so have to
// specify the encoding
// Returns: contents of the file as a string

console.log(fs.readFileSync('new-file.txt', 'utf-8'));


// appendFileSync
// Takes three arguments:
// -- The file to write
// -- The data we want to write to the file (either a string or a buffer)
// -- File encoding (default is ‘utf-8’  <- this is what text is)
// Returns: 'undefinded'
// If the file does not already exists, it creates it. See fs documentation

fs.appendFileSync('new-file2.txt', 'utf-8');  // creates new file
fs.appendFileSync('new-file.txt', 'And yay pancakes!');

//unlinkSync

// Takes one argument - absolute path to the file to delete
// use path.resolve to build the url

fs.unlinkSync(path.resolve('new-file2.txt'));
console.log('file deleted');
