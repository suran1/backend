/* MY FIRST ASYNC I/O! (Exercise 4 of 13)

  Write a program that uses a single asynchronous filesystem operation to
  read a file and print the number of newlines it contains to the console
  (stdout), similar to running cat file | wc -l.

  The full path to the file to read will be provided as the first
  command-line argument.

*/

var fs = require('fs');
var file = process.argv[2];
var newLineCount = undefined;


function newLine(callback) {
    fs.readFile(file, function (err, fileContentsBuffer) {
      if (err) {
        return console.log('err');
      }

      //alternate: fs.readFile(file, 'utf8', fileContentsString) can also be used
      // so a string is returned instead of a buffer object
      newLineCount = fileContentsBuffer.toString().split('\n').length - 1;
      callback();
    });

}

function countNewLines() {
  console.log(newLineCount);
}

newLine(countNewLines);


/*  Official nodeschool solution

 var fs = require('fs')
 var file = process.argv[2]

 fs.readFile(file, function (err, contents) {
   if (err) {
     return console.log(err)
   }
   // fs.readFile(file, 'utf8', callback) can also be used
   var lines = contents.toString().split('\n').length - 1
   console.log(lines)
 }

*/
