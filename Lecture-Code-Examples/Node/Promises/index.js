// use promises and async to read the file

// node functions use callbacks, so we have to create a wrapper around the
// functions
var fs = require('fs');

function findTheDinosaurs(filename) {
  return new Promise(function (resolve, reject){  // r
      fs.readFile('my-file.txt', 'utf-8', function (err, data));
      if (err) {
        reject(err);  // if error pass it to reject
      }

      resolve(data);
      });
  });
}


findTheDinosaurs('my-file.txt').then(function(data){
  console.log(data);
}).catch(function(err) {
  console.log(err);
});
