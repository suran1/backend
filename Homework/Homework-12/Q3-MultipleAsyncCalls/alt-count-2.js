var fs = require('fs');
var file = './paragraphs.txt';

// items to count in file
var the = new RegExp('the', 'g');
var i = new RegExp('I', 'g');  // capital 'I'
var like = new RegExp('like', 'g');
var years = new RegExp('years', 'g');

//Searches case insenstive and whole words for 'I' and 'the'
// var the = new RegExp('\\sthe\\s', 'gi');
// var i = new RegExp('\\sI\\s', 'g');  // capital 'I'
// var like = new RegExp('like', 'gi');
// var years = new RegExp('years', 'gi');


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
        // to check case insenstive and whole words for 'the' and 'i': var propName = str.toString().split(/\/|\\s/);
        var propName = str.toString().split(/\/|g/);


        // first index not equal to the empty string is our property name
        var index = propName.findIndex(function(element) {
              if (element !== "") { return element; }
        });

        propName = propName[index].toLowerCase();
        totalCount[propName] = contents.match(str).length;

        resolve(totalCount);
  });
}

  readFile(file)
    .then(function (data) {
      Promise.all([       // an array of functions that return promises
        countWords(data, the),
        countWords(data, i),
        countWords(data, like),
        countWords(data, years)
      ]).then(function(dataArr){

      console.log(dataArr[0]);
    });
  })
  .catch(function(err){
    console.error(err);
  });
