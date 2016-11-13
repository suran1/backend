// Write a functon 'describeList' which tells if the list is empty or ontains only one elemnt or more than one element


function describeList (arr) {
    var message = '';
    
    if (arr.length === 0) {
        message = 'empty';    
    } else if (arr.length === 1) {
        message = 'singleton';
    } else {
        message = 'longer';
    }
   
    return message;
}

console.log(describeList([]));          // "empty"
console.log(describeList([1]));         // "singleton"
console.log(describeList([1,2]));       // "longer"
console.log(describeList([]));          // "empty"
console.log(describeList([1.5]));       // "singleton"
console.log(describeList([1.5,2.5]));   // "longer"

// alternate solution

function descList (arr) {
  if (arr.length === 0) {
    return 'empty';
  } else {
    return arr.length > 1 ? 'longer' : 'singleton';
  }
}

console.log(descList([]));          // "empty"
console.log(descList([1]));         // "singleton"
console.log(descList([1,2]));       // "longer"
console.log(descList([]));          // "empty"
console.log(descList([1.5]));       // "singleton"
console.log(descList([1.5,2.5]));   // "longer"

