/*
    Write a function that accepts a sequence of positive numbers as a string.  There is at least one number missing.
    
    Return the first missing number in the sequence.
    
    If the array contains any invalid elements (negative numbers, alphabetic characters, punctuation,), return 1
    
    if the array is empty or no number is missing, return 0.
    
    If more than one number is missing, return the smallest missing number.
    
    The sequences you receive in not necessarily in numeric order.
    

*/

function findMissingNumber(str){
    var numCheck = str.split(' ').join('');  //create a string without spaces
    var result = -1;
   
    var arr = numCheck.split('').sort(function (a, b){
            return a - b;
        });
    
    
    if (arr[0] === undefined){
        result = 0;
        
    } else if (isNaN(Number(numCheck)) || arr[0] !== '1') {
        result = 1; 
    } else {
        
        var i = 0;
        while (result < 0) {
            var nextNum = parseInt(arr[i], 10) + 1;
            if ((nextNum) !== parseInt(arr[i+1], 10)) {
                result = nextNum;               
            }
            
            (i === arr.length - 1) ? result = 0 : i++;
        }
    }
    return result;
}

console.log(findMissingNumber('1 2 3 5')); // 4
console.log(findMissingNumber('1 3')); // 2
console.log(findMissingNumber('1 5')); // 2
console.log(findMissingNumber('')) // 0
console.log(findMissingNumber('1 2 3 4 5')) // 0
console.log(findMissingNumber('2 3 4 5')) // 1
console.log(findMissingNumber('2 6 4 5 3')) // 1
console.log(findMissingNumber('2 1 4 3 a')) // 1
console.log(findMissingNumber('1 2 4 5')) // 3


// Alternate Soltion

function missingNumber (str) {

    var numCheck = str.split(' ').join('');  //create a string without spaces
    var check = /^[0-9]+$/;                 
    var arr = [];
    var result = -1;
    
    var arr = numCheck.split('').sort(function (a, b){
            return a - b;
        });
    
    
    if (check.test(numCheck)){
        arr = arr.map(function (a){
            return parseInt(a, 10);   
        });
        
        if (arr[0] !== 1){
            result = 1;
        } else {
            var i = 0;
            
            while (result < 0) {
                if (arr[i] + 1 !== arr[i+1]) {
                    result = arr[i] + 1;               
                }
            
                (i === arr.length - 1) ? result = 0 : i++;
            }
        }
    } else if (numCheck === '') {
        result = 0;
    } else {
        result = 1;
    }
    
    
    return result;
    
    
}

console.log('\nAlternate solution: \n');
console.log(missingNumber('1 2 3 5')); // 4
console.log(missingNumber('1 3')); // 2
console.log(missingNumber('1 5')); // 2
console.log(missingNumber('')) // 0
console.log(missingNumber('1 2 3 4 5')) // 0
console.log(missingNumber('2 3 4 5')) // 1
console.log(missingNumber('2 6 4 5 3')) // 1
console.log(missingNumber('2 1 4 3 a')) // 1
console.log(missingNumber('1 2 4 5')) // 3