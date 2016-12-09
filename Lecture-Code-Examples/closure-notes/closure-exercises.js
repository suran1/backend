/*# Exercise 1

Create a function that uses a closure to one number to another number. The first number should be stored in a closure.

Hint: you're actually creating multiple functions. You'll need 5 functions

console.log(addTen(30))       // 40
console.log(addTwenty(30))    // 50
console.log(addFifty(30))     // 80



*/



function addNumbers (num) {
    
    var x = num;
    return function (y) {     //returns a definition of  a function - it doesn't execute
      return x + y;  
    };
    
}

var addTen = addNumbers(10);         // assigning function definition - value of x (or num) is 10 and y is undefined
var addTwenty = addNumbers(20);     // assigning function definition - value of x (or num) is 20 and y is undefined
var addThirty = addNumbers(30);     // assigning function definition - value of x (or num) is 30 and y is undefined
var addForty = addNumbers(40);      // assigning function definition - value of x (or num) is 40 and y is undefined
var addFifty = addNumbers(50);     // assigning function definition - value of x (or num) is 50 and y is undefined


//call the functions
console.log(addTen(30));       // 40   (x = 10 via closure, y = 30)
console.log(addTwenty(30));    // 50   (x = 20 via closure, y = 30)
console.log(addFifty(30));     // 80   (x = 50 via closure, y = 30)



