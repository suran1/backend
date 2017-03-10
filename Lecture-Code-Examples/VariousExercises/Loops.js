for (var i = 0; i <= 10; i++) {
  console.log(i);
}

// for loop iterating over an array
var fruits = ['apples', 'oranges', 'banana', 'kiwi'];

for (var i = 0; i < fruits.length; i++){
  console.log(fruits[i]);
}

// looping through an array of arrays


//multi-dimensional array (2-D array)
var myOtherArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (var i = 0; i < myOtherArray.length; i++) {
    console.log('EXTERNAL LOOP EXECUTING');
    for (var j = 0; j < myOtherArray[i].length; j++) {
        console.log('ARRAY ENTRY 1: ', myOtherArray[i][j]);
    } // end inner for
} // end outer for

var multiArray = [
    [1, 2, 3],
    [4, 5, 6, 7, 8],
    [7, 8, 9, 10, 11, 12, 13, 14]  
];


for (var i = 0; i < multiArray.length; i++) {
    console.log('EXTERNAL LOOP EXECUTING');
    for (var j = 0; j < multiArray[i].length; j++) {
        console.log('ARRAY ENTRY: ', multiArray[i][j]);
    } // end inner for
} // end outer for


// Example using charAt

var aString = 'hello world';

for (var i = 0; i < aString.length; i++) {
    console.log(aString.charAt(i));
}


// /example of an enumerable object
var car = {
  model: 'Beetle',
  make: 'VW',
  year: 1976
};





// If you're using an object - use for...in
// If you use it on an array, it's less efficient than a for loop
// loops through all the properties in the object until it is done
// if order is important, store it an array, not an object

for (var prop in car) {
  console.log(car[prop])      //prop is the placeholder for the property
  console.log(prop + ':' + car[prop]);  //prints property name and value
  console.log(Object.keys(car));  // creates an array of the property names

}

var catObj = {
    firstName: 'Brenna',
    lastName: 'Blackwell',
    favoriteAnimal: 'cat',
    favoriteColor: 'blue',
    favoriteFood: 'pizza'
};


//this iterates the property names
for (things in catObj){
    console.log(things);    // lists out the property names, not the values
    console.log(things + ' ' + catObj[things]); // prints out property names and values - must use bracket notation to get values
}




//While loops
//Do loops will always execute once - the main difference between a do while and
// a While
var i = 0;     // Always initialize the variable before you  use it
do {
  console.log(i);
  i++;            // make sure you increment inside the loop - or else its infinite
} while (i < 5);

// A while lopp does the exact same thing as a for loop, just syntax is different
var y = 0;      // initialize the sentinel variable beforehand
while (i < 4) {
  console.log(i);
  i++;              // make sure you increment it
}

var boolCheck = true;
var loopNum = 3;

while (boolCheck) {
    console.log('do a thing: ', loopNum);
    loopNum += 3;
    
    if (loopNum === 15) {
        boolCheck = false;
    }         
}

console.log('All the while loop things happened - out of loop: ', loopNum);

do {
    console.log( 'something might be true?');
} while (boolCheck);