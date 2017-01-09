/* BABY STEPS (Exercise 2 of 13)

  Write a program that accepts one or more numbers as command-line arguments
  and prints the sum of those numbers to the console (stdout).

*/


//Slice off the first and second index value of process.argv since
// the index 0 is always node, and index 2 is always the path to this
// js file. Index 2 marks the beginning of user input.  Index 2 is an array.
var arr = (process.argv).slice(2, (process.argv).length);
var total = 0;

for (var i = 0; i < arr.length; i++){
        total += Number(arr[i]);
}


console.log(total);

/* Alternate solution - without creating a fresh array


var result = 0;

for (var i = 2; i < process.argv.length; i++) {
  result += Number(process.argv[i]);
}

console.log(result);

*/
