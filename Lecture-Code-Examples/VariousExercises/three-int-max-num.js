/*
    Write a function that takes one positive three-digit integer and rearranges its digits to get maximum 
    possible number. Assume the argument is an integer. Return null if argument is not valid:
    

*/

 function maxRedigit(num) {
     
     var newNum = [];
     var strNum = '';
     
   
     if (num < 100 || number > 999) {
        return null;    
     } 
     
    strNum = num.toString();
    newNum = strNum.split('');
     
    // alternately  newNum.sort().reversse(); 
    newNum.sort(function (a, b){
        return b-a;
     });
     
    
     return parsetInt(newNum.join(''));     //returns a number not a string
     }
     
 } 


console.log(maxRedigit(123)); // 321
console.log(maxRedigit(297)); // 972
console.log(maxRedigit(368)); // 863
console.log(maxRedigit(531)); // 531
console.log(maxRedigit(636)); // 663
console.log(maxRedigit(555)); // 555
console.log(maxRedigit(32)); // null

/** Manual solution */
var maxRedig = function(num) {

  if (!Number.isInteger(num) || num < 100 || num > 999) {
    return null;
  }

  var numString = num.toString();
  var numArray = numString.split('').sort();
  var answerArray = [];
  var answerString;
  var maxIndex = findMaxIndex(numArray);
  var minIndex = findMinIndex(numArray);
  var midIndex;

  if (maxIndex === 0 && minIndex === 1) {
    midIndex = 2;
  } else if (maxIndex === 0 && minIndex === 2) {
    midIndex = 1;
  } else if (maxIndex === 1 && minIndex === 0) {
    midIndex = 2;
  } else if (maxIndex === 1 && minIndex === 2) {
    midIndex = 0;
  } else if (maxIndex === 2 && minIndex === 0) {
    midIndex = 1;
  } else if (maxIndex === 2 && minIndex === 1) {
    midIndex = 0;
  } else if (maxIndex === minIndex) {
    midIndex = 1;
    maxIndex = 2;
  }

  answerArray[0] = numArray[maxIndex];
  answerArray[1] = numArray[midIndex];
  answerArray[2] = numArray[minIndex];
  answerString = answerArray.join('');

  return parseInt(answerString, 10);
}

function findMaxIndex(numArray) {
  var maxIndex = 0;

  for (var i = 1; i < numArray.length; i++) {
    if (numArray[i] > numArray[maxIndex]) {
      maxIndex = i;
    }
  }

  return maxIndex;
}

function findMinIndex(numArray) {
  var minIndex = 0;

  for (var i = 1; i < numArray.length; i++) {
    if (numArray[i] < numArray[minIndex]) {
      minIndex = i;
    }
  }

  return minIndex;
}

// Fancy Pants Array Operation Solution
var maxRedigit = function(num) {
  if (num < 100 || num > 999) {
    return null;
  }

  var numString = num.toString();
  var numArray = numString.split('');
  numArray.sort().reverse();
  var answerString = numArray.join('');

  return parseInt(answerString, 10);
}

console.log(maxRedig(123)); // 321
console.log(maxRedig(297)); // 972
console.log(maxRedig(368)); // 863
console.log(maxRedig(531)); // 531
console.log(maxRedig(636)); // 663
console.log(maxRedig(555)); // 555
console.log(maxRedig(32)); // null

