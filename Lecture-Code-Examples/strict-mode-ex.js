//Strict mode examples - 

// Example - non strict mode

//var person;
//
////other code and and stuff going on here
//// there's a lot of lines of code
//// I'm really far separated from where I'm delcaring my undefined variable parameters
//
//persom = {name: 'Joe'};
//
//console.log(person);
//console.log(persom);

// With strict mode - prevents global variables (persom isn't defined)

//'use strict';
//var my_person;
//
////other code and and stuff going on here
//// there's a lot of lines of code
//// I'm really far separated from where I'm delcaring my undefined variable parameters
//
//my_persom = {name: 'Joe'};
//
//console.log(person);
//console.log(persom);

// without 'use strict' this will fail with no info - fails silently. With strict mode, you get a specific error message

'use strict';
var myObject = {};

Object.defineProperty(myObject, 'myProperty', {value: 19, writable: false});

// more code doing other things

//myObject.myProperty = 7;
//
//console.log(myObject.myProperty);
//
//
//delete Object.prototype;


// example of duplicate parameter names

function sum(a, a, c) {
    return a + a + c;   // returns 7 without 'use strict' because it assigns the value '2' to both 'a' parameters since it's the most recent value
}

console.log(sum(1, 2, 3));

