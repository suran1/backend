//Global Example

//var myVar = 'I am a variable';
//
//function myFunc() {
//    console.log('I am logging from a function');
//    
//}
//
//console.log(this);

//Function - Simple Call Example

//function simpleCall() {
//    console.log('Simple Call This');
//    
//    console.log(this);
//    console.log(this.myVar);
//}
//
//
//function strictCall() {
//    'use strict';
//    console('Strict Call This:');
//    console.log(myVar);
//    console.log(this.myVar);
//}
//
//var myVar = 'I ma a string';
//
//simpleCall();   //in a browser returns the window
//strictCall();   //returns undefined because using strict mode and nothing is defined



// call and apply and global examples

//'use strict'
//
//var a = 5;
//var b = 6;
//
//var numberObject = {
//    a: 10,
//    b: 25
//};
//
//
//var numberObjectTwo = {
//    a: 7,
//    b: 136
//};
//
//
//function add(c, d) {
//    return this.a + this.b + c + d;
//}
//
//console.log(add.call(this, 3, 4));   // returns 18 in browser; returns NaN because the global object is empty object, and empty object is Not a Number
//console.log(add.call(numberObject, 3, 4))  // returns 42 
//console.log(add.apply(numberObject, [3, 4]));  //returns 42 - for apply you have to put the parameters in an array (or use on array arguments)
//console.log(add.apply(numberObjectTwo, [3, 4])); // returns 150


// Bind  example
//'use strict';

function myFunc() {
    return this.myProperty;
}

var myObject = {
    myProperty: 'I am a property'
};

//var aFunc = myFunc.bind({myProperty: 'I am a property'});

var aFunc = myFunc.bind(myObject);
console.log(aFunc());  // returns 'I am a property' 

myObject.myProperty = 'I am a changed property';
console.log(aFunc());

var bFunc = myFunc.bind({myProperty: 'I am yet another property'});
console.log(bFunc());


//Object and this example
//'use strict';

var person = {
    firstName: 'Joe',
    lastName: 'Smith',
    number: 4,
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
    
};

console.log(person.getFullName());