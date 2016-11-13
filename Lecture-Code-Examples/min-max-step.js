/*
    Write a function that accepts three integers:
        min
        max
        step
        
    and returns an array where the first element is the min, and eqch subsequent element is counted up by
    the step until the max is reached.
      
*/

function generateRange (min, max, step) {
    
    newArr = [];
    
    for (i = min; i <= max; i+=step) {
        newArr.push(i);
        
    }
    return newArr;
} 





console.log(generateRange(2, 10, 2)); // [2, 4, 6, 8, 10]
console.log(generateRange(1, 10, 3)); // [1, 4, 7, 10]
console.log(generateRange(19, 49, 2)); // [19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49]
console.log(generateRange(10, 82, 9)); // [10, 19, 28, 37, 46, 55, 64, 73, 82]


// using a while loop:

function genRange (min, max, step) {
    arr = [];
    var i = min;
    while (current <= max){
        arr.push(i);
        i += step;
    }    
    return arr;
}