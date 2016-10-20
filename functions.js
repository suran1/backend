// Functions are a reusable group of instructions
// that you can use to acoomplish a task

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
