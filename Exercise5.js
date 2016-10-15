/* Exercise 5
 - Create and log:
   - An object with 3 properties
   - A string
   - The result of averaging 5 numbers
   - A string that translates to 'false'
   - An array containing 5 different types of data

*/

  var myObj = {
    animal: 'cat',
    food: 'mouse',
    caged: 'false'
  };

console.log('My animal object: ', myObj);

 var season = 'Fall';
 console.log('My string: ', season);

 var ave = 1 + 3 + 3 + 5 + 9 / 5;
 console.log('Average of 5 numbers: ', ave);

 var thisIsFalse = ''
 console.log('False string \'\' ', Boolean(thisIsFalse));

 var crazyArray = ['Arkansas', myObj, 5, NaN, null];
 console.log('Array with 5 different data types: ', crazyArray);
