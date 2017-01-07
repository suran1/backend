//Revealing module pattern - most common pattern
var om = require('./othermodule');

var myModule = {
  type: undefined,
  dogsAreBetter: dogsAreBetter,
  setType: setType,
  howdy: howdy
};

function howdy() {
  om();
}

function dogsAreBetter() {
  console.log('Dogs are so much better than cats');
};

function setType(str) {
  this.type = str;
}

module.exports = myModule;
