var fs = require('fs');
var file = './paragraphs.txt';

// items to count in file
var the = new RegExp('\\sthe\\s', 'gi');
var i = new RegExp('\\sI\\s', 'g');  // capital 'I'
var like = new RegExp('like', 'gi');
var years = new RegExp('years', 'gi');

// object to hold all word counts
var totalCount = {};

function readFile(file) {
   return new Promise(function (resolve, reject) {
      fs.readFile(file, 'utf-8', function(err, data){
        if (err) {
          console.error(err);
        }
        resolve(data);
      });
  });
}

function countWords (contents, str){
    return new Promise(function (resolve, reject) {
        if (console.error()) {
          reject(err);
        }

        // extract the propName from the RegExp by splitting into an array
        var propName = str.toString().split(/\/|\\s/);

        // first index not equal to the empty string is our property name
        var index = propName.findIndex(function(element) {
              if (element !== "") { return element; }
        });

        propName = propName[index].toLowerCase();
        totalCount[propName] = contents.match(str).length;
        resolve(contents);
  });
}


readFile(file)
    .then(function (data) {
        return countWords(data, the); })
    .then(function(data) {
        return countWords(data, i); })
    .then(function (data) {
        return countWords(data, like); })
    .then(function (data) {
        countWords(data, years);
        console.log(totalCount)})
    .catch(function(err){
      console.error(err);
  });
