/*
Create a new file
  In this file:
      - Create a function that chains the API functions getName, getBreed and getCoatColor together
        to print a single phrase (Fluffykins is a Dalmatian with spots!)
      - Commit & push this file and any changes to GitHub
*/

var animalInfo = require('./api');

function requestName () {
  return new Promise(function (resolve, reject){
    animalInfo.getName(function (err, name){
      if (err) {
        reject(err);
      }
      resolve(name);

      // remove resolve(name) and just have 'reject' to test err condition
    });
  });
}

function requestBreed () {
  return new Promise(function (resolve, reject){
    animalInfo.getBreed(function (err, breed){
      if (err){
        reject(err);
      }
      resolve(breed);
      });
  });
}


function requestCoatColor () {
  return new Promise(function (resolve, reject){
    animalInfo.getCoatColor(function (err, coatColor){
      if (err) {
        reject(err);
      }
      resolve(coatColor);
    });
  });
}

requestName().then(function (nameStr) {
  console.log(nameStr);
  return requestBreed(nameStr);
}).then(function(breed){
  console.log(breed);
  return requestCoatColor(breed);
}).then(function(coatColor){
  console.log(coatColor);
}).catch(function(err) {
  console.log(err);
});






// createFile('my-file2.txt', 'Create a file and text')
// .then(function(str){
//   console.log(str);
//   return appendFile('my-file2.txt', 'another line of text');
// })
// .then(function(str){
//   console.log(str);
// });
