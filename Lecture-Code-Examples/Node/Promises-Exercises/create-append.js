var fs = require('fs');

function createFile (filename, contents) {
  return new Promise(function (resolve, reject){  // r
      //note: don't need 'data' because fs.writeFile always returns undefined
      fs.writeFile('my-file.txt', contents, function (err){

      if (err) {
        reject(err);  // if error pass it to reject
      }

      resolve('File created');
      });
  });
}


function appendFile (fileName, addText) {
  return new Promise(function(resolve, reject) {
    // again, don't need 'data' part of callback because fs.appendFile returns
    // undefined
    fs.appendFile(fileName, addText, function(err){
      if (err) {
        reject(err);
      }

      resolve('Appended File');
    });

  });
}

createFile('my-file.txt', 'This is in my file').then(function(contents){
  console.log(contents);
}).catch(function(err) {
  console.log(err);
});

appendFile('my-file.txt', 'Another line in my file').then(function(contents){
  console.log(contents);
}).catch(function(err) {
  console.log(err);
});




// method chaining version

createFile('my-file2.txt', 'Create a file and text')
.then(function(str){
  console.log(str);
  return appendFile('my-file2.txt', 'another line of text');
})
.then(function(str){
  console.log(str);
});
