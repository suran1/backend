// This function computes the factorial of a givin number

//function factorial (num) {
//  if ((num === 0) || (num === 1)) {
//    return 1;
//  }
//  else {
//    for (i = num; i >= 2; i--) {
//      num *= (i - 1);
//    }
//    return num;
//  }
//}
//
//console.log(factorial(5));
//
//
////Making factorial recurive
//
//function factorialRecursive(n){
//    
//    if (n< 0) {
//        return - 1;
//    }
//    
//    if (n == 0) {
//        return 1;
//    } 
//    
//    return (n * factorialRecursive (n - 1));
//}
//
//console.log(factorial(5));
//
//
//  Fibonacci probblem where you're given a number 'n' that represents the 'nth' positin
//  in the Fibonacci sequence. Find the value in the sequence at that position
//function fibonacci (n) {
//    
//    var a = 0;
//    var b = 1;
//    var f = 1;
//    
//    if (n <= 0) {
//        return -1;
//    } 
//    
//        
//    for (var i = 2; i <= n; i++) {
//        f = a + b;
//        a = b;
//        b = f;
//    } 
//    return f;
//}
//
//
//console.log(fibonacci(1));
//console.log(fibonacci(2));
//console.log(fibonacci(3));
//console.log(fibonacci(4));
//console.log(fibonacci(17));
//
//
//function fibRecursive (n){
//    if (n <= 2) {
//        return 1;
//    } else {
//        return fibRecursive (n-2) + fibRecursive(n-1);
//    }
//    
//}
//
//console.log(fibRecursive(1));
//console.log(fibRecursive(2));
//console.log(fibRecursive(3));
//console.log(fibRecursive(4));
//console.log(fibRecursive(17));


// Write a function that logs a series of numbers, starting at 0 up until 'n'
// Solve with recursion

function numSequence (num) {
      
        if (num === 0){
            console.log(num);
        } else {
            numSequence(num - 1);
            console.log(num);
        }   
}

console.log('\n')
numSequence(15);

// Write a function that logs a series of numbers, starting at num and going down 
// to 0
// Solve with recursion
function numSequenceDown (num) {
      
        if (num === 0){
            console.log(num);
        } else {
            console.log(num);
            numSequenceDown(num - 1);
        }   
}
console.log('\nCounting down via recursion');
numSequenceDown(15);
