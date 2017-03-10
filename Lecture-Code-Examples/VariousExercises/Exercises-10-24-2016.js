// Exercises 10/24/2016 -1

//Create a function that returns true if the argument provided is a number, and false if otherwise

function check(num) {
    
    if (isNaN(num)) {
        return false;
    } else {
        return true;
    }
}
var answer = check('feet');
console.log(answer);


// Alternate answer

function isNumber(num) {
    
    if (typeof arg === 'number') {
        return true; }
    return false;
}
var myVar = isNumber('feet');
console.log(myVar);


// Create a function that takes two arguments and is created after it is invoked. This function should multiply the first number by 
// the second number and return the value. This returned vale should be logged to the console. 
// HOISTING EXAMPLE

console.log(timesTwo(3, 4));

function timesTwo (num1, num2) {
    return num1 * num2;
} 

// The following text is IN MY Javascript Word doc as well
// Compiler example                         
//  console.log(x()):                   // First time through, compiler notes x and y exist, but does not assign anything to them (undefined)
//  console.log(y());                   // Throws error - function EXPRESSIONS (indeed all expresions) are NOT hoisted; y is not yet defined
//  
//  function x() { return 2;}    
// 1.5  time through - compiler assigns this value to function x (it's hoisted becasue it's a 
                                        // function DECLARTION)
//
//  var y = function () {return 10;};     // Funciton EXPRESSION - compiler doesn't get here until lexicolgraphic (it reaches the
                                         // this line in sequence_. Function EXPRESSIONS don't get hoisted so sequence of placement in js
                                         // file is important
                             
// Create a functioon that will find the longest word in a string/

function longWord(str){
    var longest = '';
    var arr = str.split(" ");
    console.log(arr);
    
    for (var i = 0; i < arr.length; i++) {
            if (longest.length < arr[i].length) {     
                longest = arr[i];
            }   
        } // end for
        return str = longest;
}// end function

console.log(longWord("Are elephants big?"));

// Blake's solution 
function findLong(str){
    var wordLengths = [];
    var words = str.split(" ");
    
    // put all the 
    for (var i = 0; i < words.length; i++){
        wordLengths.push(words[i].length);
    }
    
    var longestLength = Math.max.apply(null, wordLengths);      // max won't accept an array as argument which is why you use 'apply;
                                                                // Purpose of 'apply' takes the array and goes through each of the elements
                                                                // and passes it into th max function. Apply's main purpose is to set the 
                                                                // context of this keyword. As a side side-effec, if you pass an in the 2nd
                                                                // argument it passes each element into the preceding the function
    
    return words[wordLengths.indexOf(longestLength)];            // Takes the longestLength (a number) and then checkes wordLengths to see
                                                                 // match to the element that has the same numbers as longestLength and then
                                                                 // indexOf gives the index of where longestLength matched in wordLength 
                                                                 // (the index of wordLengths) which will match the index in words array
                                                                 // which has the actual word in it
    
    
}
console.log(findLong('Whatever is the longest word'));



// Create a function that takes another function as an argument and multiples the returned value of that function by 10.

function multiply(fn) {    // At this point fn is defined, but not assigned anything 
    return fn() * 10;       // this calls the numberFun function from insede the mulitply function
}

function numberFun () {
    return 5;
}

console.log(multiply(numberFun));      // This works; but multiply(); would fail because it did not pass anything , so fn in multiply
                                       // function is not defined


// Create a funciton (a) that takes a number and a function (b) as an argument.  Divide the number argument by 25 and use function b
// to log the quotient of the number divided by 25.
function a (num, fn) {
    fn (num / 25);
}

function b (q) {
    console.log(q); 
}

console.log(a(50, b));


// Same thing but in the following format - this is present in node al the time:
// This is the callback pattern in node

a(50, function(q) {
    console.log(q);          // this is part of the anonymous function; function 'a' passess ALL of this to the parameter when a passes
});                          // as an argument:  function(q) { console.log(q)};}