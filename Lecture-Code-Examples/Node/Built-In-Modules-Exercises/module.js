/* Creat a module called 'fileIO' This module should:
   - Have a function that creates files and returns the contents of the file
   - Have a function that reads a file and return the contents of the file
   - Have a function that appends to a file and returns the contents of the file
   - Have a function that deletes a file and returns a successful message When
     completed.


*/

var fs = require('fs');
var path = require('path');

var fileIO = {
  fileName: undefined,
  createFile: createFile,
  readFile: readFile,
  appendFile: appendFile,
  deleteFile: deleteFile,
  makeDir: makeDir
}

function createFile (filename, contents) {
  fs.writeFileSync(filename, contents);
  return readFile(filename);
}


function readFile(filename) {
  return fs.readFileSync(filename, 'utf-8');
}

function appendFile(filename, addText) {
  fs.appendFileSync(filename, addText);
  return readFile(filename);
}

function deleteFile(filename) {
  fs.unlinkSync(path.resolve(filename));
  return 'Successfully removed ' + filename + '.';
}

function makeDir (dirName) {
  var absPath = path.resolve() + dirName;
  //check for existence of the directory you want to create. If it
  // doesn't exist, create it.
  if (!fs.existsSync(absPath)) {
    fs.mkdirSync(absPath);
  }

  return absPath;
}

module.exports = fileIO;
