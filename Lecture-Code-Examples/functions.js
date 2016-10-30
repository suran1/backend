// Functions are a reusable group of instruction
// that you can use to accomplish a discrete (i.e separate and not continuous) task

nameOfFunction(1); // this is possible because functions get

function nameOfFunction (arg1, arg2) {
  console.log(arg1);
  console.log(arg2);
  arguments[0] = 'hi'; // bad! but possible - uses 'arguments' keyword
  return arg1 + arg2;   //
}


// myFunc('Blake');      // causes a reference error because function expression
                      // is lexical (i.e., sequence matters)
//Function expression
var myFunc = function (arg) {
  console.log(arg);
}

// Example of passign a function into another function - using function expressions)
function howdy (fn, a) {
    fn(a);
}
howdy (myFunc, 'Blake');


console.log(nameOfFunction(1,2));


// More examples

// Demonstrate the use of function. This is a function declaration
function addOne (num) {
    return num + 1;
}


// Anonymous funciton  - function keyword is followed by arguments list and assigned to a variable
// It is also a function expression - 
// NOTE:  that 'function (num) { return num + 1}; is the expression function - 
var addTwoFunction = function (num) {
    var one = 1;
    var sum = one + num;
    return sum;
};

var a = 3;   // an expression in JS ; '3' is the expression value


// function with no arguments
function sayAThing() {
    console.log('I\'m saying a thing');
}


// function with 3 parameters
// Parameters vs arguments - when you're defining the function, what you are expecting to receive are called parameters
// Arguments are the data sent to a function when a function is invoked (called)



function addNumbers(first, second, third, fourth){   
    return first + second + third;
}


// functions don't run at this point - we haven't called the function yet

console.log(addOne(1));
console.log(addTwoFunction(1));
console.log(sayAThing);   // this is just treating it sayAThing like a variable - returns what it is - identifes it as a function
console.log(sayAThing());   // this gives undefined because after it exectues sayAThing, and there is nothing to log (already logged it)4
                            // to avoid this just call the function

sayAThing();                // calls the function;

console.log(addNumbers(3, 5, 7));


// example of calling a function within a function

function external(){
    
    var a = 3.5;
    
    function addNum (num){
        return num + 1;
    }
    
    console.log(addNum(a));         // returns 4
    
    return (a);
}

console.log(Math.round(external()));            // returns 3


function addNumber (num){
        console.log(external(1));
        return num + 1;
    }
    
console.log(Math.round(external(addNumber(9.6))));
