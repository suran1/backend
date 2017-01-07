// use this format to chain the functions together 'function chaining'

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

function createFile (fileName, contents) {
  this.fileName = fileName;  // sets the fileName variable in the fileIO object
  fs.writeFileSync(this.fileName, contents);
  return this;  // this always refers to the object that has the method
                // ('createFile') in this case
}


function readFile() {
  return fs.readFileSync(this.fileName, 'utf-8');
}

function appendFile(addText, fileName) {
  if (fileName){
    this.fileName = fileName;
  }
  fs.appendFileSync(this.fileName, addText);
  return this; // this always refers to the object that has the method
                // ('createFile') in this case
}

function deleteFile(fileName) {
  fs.unlinkSync(path.resolve(fileName));
  return 'Successfully removed ' + fileName + '.';
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
