// Examples

//var a = 7;
//
//function foo() {
//    console.log(a);
//    
//}
//
//foo();   //7  because a is a global variable
//
//// Example 2
//
//var a = 7;
//
//function foo1() {
//    var b = 8;
//    
//    function bar () {
//        console.log(a + b);
//    }
//    
//    bar();
//}
//
//foo1();   //15 because a is a global variable
//console.log(b);  // error - doesn't know 'b' exists
//
//
////IIFE function example 
//// Use IIFE to hide implementation details, data hiding
//// This is the REVEALING MODULE PATTERN - VERY PREVALENT IN NODE
//var x = (function () {
//    var name = 'blake';
//    var nbr = 4;
//    var superSecretThing = 'cats are bad';
//    
//    
//    return {
//      y: nbr,
//      z: 7,
//      doSomething: doSomething    
//    };
//    
//    function doSomething() {
//        //...
//    }
//    
//})();
//
//
//doSomething();  //fails
//doSomethingElse();
//
//var doSomething = function () {
//    console.log('expression');
//}; // function expression - DOES NOT GET EXECUTED - it's treated as a variable expression
//   // which the engine won't know what it is until it's executing - remember, first pass
//   // with compiler, variables are identified and functions are hoisted; 2nd pass it will do // asignments at execution 
//
//function doSomethingElse() {
//    console.log('declaration');   // gets hoisted so it will be executed
//}
//        
//
//
////Scope Example
//
//var a = 10;
//
//(function ()) {
//    a = 20;
//}();
//
//console.log(a);  // a = 20  becuase it's reference the global variable - it's not declared in                    // the function - it's just changing the value of the global variable
//
//(function IIFE () {
//    var a = 20;
//}) ();
//
//console.log(a);  // a = 10  references the global instance - doesn't have access
//
//
//var b = 10;
//
//var doSomethingCool = function () {
//    var x = b;
//    console.log(x);
//}
//
//b = 20;
//
//doSomethingCool();  // 20  - Executes as expected. 
//

// another example

function doWork () {
    var x = 9;
    
    function anotherWork () {
        console.log(x);
    }
    
    return anotherWork;
    
}

var actuallyDoingSomething = doWork();

console.log(actuallyDoingSomething.toString()); // outputs inner function definition
console.log(actuallyDoingSomething);  

actuallyDoingSomething(); // 9



//// another example
//
//function x () {
//    var a = 9;
//}
//
//function y () {
//    console.log(a);
//}
//
//y();  // Reference Error: a is not defined - y has no access to 'a' variable


// another example

var myFunc; 

function foo () {
    
    var a = 7;
    
    function bar () {
        console.log(a);
    
    }
    
    myFunc = bar;  // assigns the entire definition to myFunc; there are 2 copies of bar
                    // function definition. myFunc is still global; bar is inside of foo
    
} // end foo

function baz () {
    myFunc();
}

foo();  // assigns bar to myFunc - at this point var a is assigned 7, which bar () has closure
        // over foo, so when myFunc is assigned to bar
baz();   // 7