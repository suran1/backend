// Homework 02- Nested Data Exercise


// Create an array of arrays and print to console
var myArray = [
    ['Germany', 'United Kingdom', 'France', 'Belgium', 'USA'],
    ['Angela Merkel', 'Theresa May', 'Francois Hollande', 'Charles Michel', 'Barak Obama'],
    [11, 0.3, 4, 2, 8]
];
printStuff('array of arrays: \n', myArray);

/**************************************************************************************************************/
// Create an object with an array
// This will do it via code
var objArray = {
    countries: 5,
    leaders: 5,
    salaries: 5
    // an array of arrays will be added
};

// Add the array of arrays to the objArray object and print to console
objArray.newArray = myArray;
printStuff('object with an array: \n', objArray);

/***************************************************************************************************************/

// Add a nested object into the objArray object
objArray.myNestedObject = {
    currency: ['Euro', 'Pound Sterling', 'Euro', 'Euro', 'Dollar'],
    language: 'English',
    nationalAnthem: 'Star-Spangled Banner',
    population: 324840929
};
printStuff('object with another object for a property:', objArray);


/****************************************************************************************************************/

// Create an array of objects - using for loop for practice

var myArrayOfObjects = [];
var myNewObj = {};

for (var i = 0; i < 10; i++) {
  
    myNewObj.objNum = i,
    myNewObj.firstName = 'Jodi',
    myNewObj.lastName = 'De Grave',
    myNewObj.phone = '479-715-7785',
    myNewObj.favNumber = '7'
    myArrayOfObjects.push(myNewObj); 
    printStuff('array of objects: ', myArrayOfObjects);
        
    
}    








// Practicing functions - counting on 'hoisting' to make this work - and it does!
function printStuff(name, obj) {
    console.log('An ' + name);
    console.log(obj);
    console.log('\n');
}



