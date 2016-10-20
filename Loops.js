for (var i = 0; i <= 10; i++) {
  console.log(i);
}

// for loop iterating over an array
var fruits = ['apples', 'oranges', 'banana', 'kiwi'];

for (var i = 0; i < fruits.length; i++){
  console.log(fruits[i]);
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

/While loops
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
