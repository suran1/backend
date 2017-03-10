//Exercise 1

var myArray =[];

for (var i = 0; i < 10; i++) {
  myArray[i] = i;     // never do this! Doesn't work in JS - it adds
  console.log(myArray[i],  myArray);
}
console.log('I can count to 10: ', myArray);


// Better Solution to append to an array
var arr =[];

for (var i = 1; i <=10; i++) {
  arr.push(i);
  console.log(arr);
}
console.log('I can count to 10: ', arr);

//Exercise 2
var myObj = {
  firstName:'Jodi',
  lastName: 'DeGrave',
  address: '604 Zachary St',
  city: 'Springdale',
  zipCode:'72762'
};

for (var prop in myObj){
  console.log(prop + ': ' + myObj[prop]);
}

var finalArray = [];
var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(arr2);
  for (i = 0; i < 10; i++){
    finalArray[i] = arr2[i] * 2;  // don't do it this way unless going to specify the element in an array
                                  // way
    finalArray.push(arr2[i] * 2);
  }
  console.log(finalArray);

// Adding properties to an object

var i = 0;
var carArray = ['Ford', 'Chevy', 'BMW', 'Audi', 'VW']
var newArray = [];


// A loop to add model property to each item in the array
do {
  var obj = {
    make: carArray[i]
  };

  switch (carArray[i]){
    case'Ford':
      obj.model = 'Mustang';
      break;
    case 'Chevy':
      obj.model ='Silverado';
      break;
    case 'BMW':
        obj.model = '3';
        break;
    case 'Audi':
        obj.model = 'TT';
        break;
    case 'VW':
        obj.model = 'Beetle';
        break;
    default:
      break;
  }
  newArray.push(obj);
  i++;            // make sure you increment inside the loop - or else its infinite
} while (i <= carArray.length);
console.log(newArray);

// A while lopp does the exact same thing as a for loop, just syntax is different
var i = 0;      // initialize the sentinel variable beforehand
while (i < 5) {
  console.log(i);
  i++;              // make sure you increment it
}
