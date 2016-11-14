/*
Write a function, persistence, that takes a positive integer (num) as input and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example:

persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                     // and 4 has only one digit

persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                      // 1*2*6 = 12, and finally 1*2 = 2

persistence(4) === 0 // because 4 is already a one-digit number

*/

/* Failed attempt at recursion 
function persist(num, count) {
    
    var arr = num.toString().split('');
    var product = 1;
    
    
    if (typeof count !== 'number') {
        count = 0;
        console.log('count in first if statement: ', count);
    } else {
        console.log('this is count after ' + count +  ' time(s) through: ', count);
    }
    
    if (arr.length <= 1 && count === 0) {           // if array has only element, count = 0;
        return count;
    } else {
        for (var i = 0; i < arr.length; i++) {
            product = product * arr[i];
            console.log(product);
        }
        count++;
        console.log('count is: ', count);
        console.log('product is: ', product);
        
        if (product > 9) {    
            persistence(product, count);
        } else {
            console.log('final count value: ', count);
        }    
    
        
    } // end outer else
    
} // end function

*/

// hard way
function persistence (num) {
   
    var count = 0;
    
    while (num >= 10) {
        num = multi(num);
        count++;
    }
    return count;
}


function multi (num) {
    var arr = num.toString().split('');
    var product = 1;    
    
    for (var i = 0; i < arr.length; i++) {
            product = product * arr[i];
    }    
    return product;
}

console.log(persistence(39));    // 3
console.log(persistence(4));     // 0
console.log(persistence(25));    // 2
console.log(persistence(999));   // 4


// easier way
function persist (num) {
    var count = 0;
    var result = num;
    
    
    while (result >= 10) {
        var arr = result.toString().split('');
        result = arr.reduce(function (a, b){
             return a * b;
        });
        count++;
    } 
    return count;
} 


console.log('\nUsing array.reduce function:\n')
console.log(persist(39));    // 3
console.log(persist(4));     // 0
console.log(persist(25));    // 2
console.log(persist(999));   // 4
