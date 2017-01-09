/*MY FIRST I/O! (Exercise 3 of 13)

  Write a program that uses a single synchronous filesystem operation to
  read a file and print the number of newlines (\n) it contains to the
  console (stdout), similar to running cat file | wc -l.

  The full path to the file to read will be provided as the first
  command-line argument (i.e., process.argv[2]). You do not need to make
  your own test file.

  */

  // Include the filesystem ('fs') module in core Node library
  var fs = require('fs');

  // Read the file path
  var path = process.argv[2];

  // Read the file. fs.readFileSync returns a buffer object
  var buf = fs.readFileSync(path);

  // Convert buffer object to a string, convert the string into an array.
  // Since it's split on new line character, and the last line in the file
  // that was read does not have a newline character at the end of it, the array
  // contains 1 more item than the number of newlines - i.e., the last item in
  // the array is a string. Therefore, array.length - 1 = the number of newline
  // characters
  var newLineCount = buf.toString().split('\n').length - 1;

  console.log(newLineCount);



  /*  nodeschool official solution:

  var fs = require('fs')

  var contents = fs.readFileSync(process.argv[2])
  var lines = contents.toString().split('\n').length - 1
  console.log(lines)

// note you can avoid the .toString() by passing 'utf8' as the
// second argument to readFileSync, then you'll get a String!
//
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
*/
