// Write a function that takes an array of ones and zeros and convert the equiavlent binary value to a decimal integer.

function binaryArrayToNumber (binArr){
    
    var arr = binArr.join('');
    
    var decimal = parseInt(arr, 2);
    
    return decimal;
    
    
} // end of funciton


console.log('Converting to binary the easy way via parseInt: ');

console.log(binaryArrayToNumber([0, 0, 0, 1]), 1); // 1
console.log(binaryArrayToNumber([0, 0, 1, 0]), 2); // 2
console.log(binaryArrayToNumber([1, 1, 1, 1]), 15); // 15
console.log(binaryArrayToNumber([0, 1, 1, 0]), 6); // 6




// Doing it the hard way..

function binArrToNum (binArr, baseTen){
    
    var expo = binArr.length - 1;  // max power to convert to
    var base = 2;   // base to convert to 
    var decimal = 0;  // final decimal value

    // Loop through the array, starting at binArr[0], which happens to be the highest power of base 2    
    for (var i = 0; i < binArr.length; i++) {
        if (binArr[i] !== 0) {
            decimal += Math.pow(base, expo);
        }
        expo--;
    } // end for
    
    
    return decimal;
} // end function
        

console.log('\nNow doing it the hard way via my code: ');

    
console.log(binArrToNum([0, 0, 0, 1]), 1); // 1
console.log(binArrToNum([0, 0, 1, 0]), 2); // 2
console.log(binArrToNum([1, 1, 1, 1]), 15); // 15
console.log(binArrToNum([0, 1, 1, 0]), 6); // 6
    
    
    
    
    
