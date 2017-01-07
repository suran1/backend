
// var dogsAreBetter = require('./module').dogsAreBetter;
// var breakfast = require('./module').breakfast;
// var myPORT = require('./module').port1;
//
//
// dogsAreBetter();
// breakfast();
// console.log(myPORT);


var myMod = require('./module2');
myMod.dogsAreBetter();
myMod.setType('hi');
myMod.howdy();



console.log(myMod.type);
