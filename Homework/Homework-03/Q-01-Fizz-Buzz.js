/* Question 1: Fizz Buzz excercise
 * In a loop range of 1 to 100, check each number to that:
 *   - if evenly divisible by 3, print "Fizz" to the console 
 *   - if evenly divisible by 5, print "Buzz" to the console
 *   - if evenly divisible by 3 and 5, print "Fizz Buzz" to the console
 *   - if none of the previous cases are true, log the number to the console
 */

for (var i = 1; i <= 100; i++){
    
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log('Fizz Buzz');
    }
    else if (i %  3 === 0) {
        console.log('Fizz');
    }
    else if (i % 5 === 0) {
        console.log('Buzz');
    }
    else{
        console.log(i);
    }  
}