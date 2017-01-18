var fs = require('fs');
var file = './paragraphs.txt';

// items to count in file
var the = new RegExp('the', 'g');
var i = new RegExp('I', 'g');  // capital 'I'
var like = new RegExp('like', 'g');
var years = new RegExp('years', 'g');

var arr = [the, i, like, years];

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

function countWords (contents, arr){
    for (var i = 0; i < arr.length; i++) {
        var propName = arr[i].toString().split(/\/|g/);


        // first index not equal to the empty string is the property name
        var index = propName.findIndex(function(element) {
              if (element !== "") { return element; }
        });

        propName = propName[index].toLowerCase();
        totalCount[propName] = contents.match(arr[i]).length;
    }
    return (totalCount);
}


readFile(file)
    .then(function(data)  {
        countWords(data, arr);
                console.log(totalCount)
        })
    .catch(function(err){
         console.error(err);
    });
