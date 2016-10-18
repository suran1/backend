// Conditional Lecture - 10/17/2016 - Brenna

/*
   First check to see if object exits, and if object is not empty

*/


var myNumber = 0;
// var myString = 'house';
//
// //check for null and undefined...Read more about this
// if(!myString){
//   console.lgo ('myString is not defined');
// }
//
//
//
//
// if (myNumber > 5){
//   console.log('my number is big');
// } else if (myNumber < 5){
//     console.log('my number is small');
// } else {
//   console.log('my number is five');
// }
//
// // In this case, if myNumber is 5, only the first if statement executes, not the
// // else if.
// if (myNumber === 5){
//   console.log('my number is big');
// } else if (myNumber === 5){
//     console.log('my number is small');
// } else {
//   console.log('my number is five');
// }
//
// // In this case, the first if condition is a mistake - accidentally assigning
// // a number (9) to myNumber instead of comparing myNumber. This will still run,
// // because myNmber has a value and it evaluates to true. Only the fist if will
// // execute
// if (myNumber = 9){
//   console.log('my number is big');
// } else if (myNumber < 5){
//     console.log('my number is small');
// } else {
//   console.log('my number is five');
// }
//
// if (myNumber === 5) && myString === 'house'{
//   console.log('my number is big');
// } else if (myNumber < 5){
//     console.log('my number is small');
//
//
//
//
//
// if (myNumber > 10 ) {
//   console.log('my number is big');
// }
//
// if (myString === 'house') {
//   console.log('user does not live in an apartment');
// }

// ternary operator
var isBig =  myNumber > 6 ? 'greater than 6':'less than 6';
console.log(isBig);



//Switch statement - you don't need to say 'case'
switch(myNumber){
  case 1:
    console.log('one');
    break;
  case 2:
    console.log('two');
    break;
  case 3:
    console.log('three');
    break;
  case 4:
    console.log('four');
    break;
  case 5:
    console.log('five');
    break;
  default:
      console.log('not 1 - 5');
}
