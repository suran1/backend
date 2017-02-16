// Asynchronous File - Read Demo

fs = require('fs');
path = require('path');


//First, call it synchronously
function readFile (file) {
  var str = fs.readFileSync(file, 'utf-8');
  console.log(str);
}

readFile('text.txt');


//optional way to read a file synchronously
// __dirname is a node property is the directory of where this file is currently at
// You must include a '/' before the file name for this to work

var contents = fs.readFileSync(__dirname + '/text.txt', 'utf-8');
console.log(contents);

//Asynchronous version

/* What happens:

  1. Execute ' BEFORE ASYNC CALL'
  2. fs.readFile executes. This is a method of the fs node module. it uses the
      first two arguments (searches for file name). It can't do anything with
      the callback argument yet, so execution goes to the next line of code (the
      'READ FILE CALLBACK' and the 'data' console log are part of the CALLBACK -
      function that the rs.readFile hasn't executed yet - this is the async part)
  3. Execute 'AFTER ASYNC' call
  4. Now, the OS has sent back the contents of the file open and read
  5. fs.readFile sends the err and contents to the anonymous function
  6. fs.readFile has code (internally - not visible in the code we see) to
     execute the anonymous function.
  7. Print 'READ FILE CALLBACK'
  8. Print contents of the read file.
*/

console.log('BEFORE ASYNC CALL - NO ERROR EXAMPLE');
fs.readFile(__dirname + '/text.txt', 'utf-8', function (err, data){
  console.log('READ FILE CALLBACK - NO ERROR EXAMPLE');
  console.log(data);
});
console.log('AFTER ASYNC CALL - NO ERROR EXAMPLE');


// Error Example
console.log ('\nError example');
console.log('BEFORE ASYNC CALL (ERROR EXAMPLE)');
fs.readFile(__dirname + '/doesnotexist.txt', 'utf-8', function (err, data){
  if (err) {
    console.error('this file does not exist', err);
  }
  console.log('READ FILE CALLBACK - ERROR EXAMPLE');
  console.log(data);
});
console.log('AFTER ASYNC CALL (ERROR EXAMPLE)');
