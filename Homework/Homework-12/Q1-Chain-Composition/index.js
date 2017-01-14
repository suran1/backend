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
    });
  });
}

function requestBreed (name) {
  return new Promise(function (resolve, reject){
    animalInfo.getBreed(function (err, breed){
      if (err){
        reject(err);
      }
      resolve(breed);
      });
  });
}


function requestCoatColor (breed) {
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
  //console.log(nameStr);
  return requestBreed(nameStr);
}).then(function (breed){
  //console.log(breed);
  return requestCoatColor(breed);
}).then(function(coatColor){
  //console.log();
  console.log(coatColor);
}).catch(function(err) {
  console.log(err);
});
