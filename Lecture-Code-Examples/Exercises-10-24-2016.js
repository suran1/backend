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