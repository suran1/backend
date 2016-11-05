/*

    Write a function that given the number (n), will populate an array with all numbers up to and including that number, but excluding zero.

    For example, if n = 10:

    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

*/


function counting (size) {
    
    var newArr = [];
    
    if (size !== 0 && typeof size === 'number') {
        
       if (size < 0) {
           
            for (var i = size; i < 0; i++) {
                newArr.push(i);
            }
       } else {
           
            for (var i = 1; i <= size; i++) {
                newArr.push(i);
            }
        }
        
        return newArr;
        
    } else {
        return 'Array size invalid. Exiting function.';
    
    }
    
    
    
}




console.log(counting(1));
console.log(counting(0));
console.log(counting(-4));
console.log(counting(10));
console.log(counting(6));