/*
    Write a function that accepts a number and a string, and return a string that contains the oringal string repeated 
    for the number provided.
*/

function repeatStr (num, str) {
    
    return str.repeat(num);
    
} 



console.log(repeatStr(3, "foo")); // "foofoofoo"
console.log(repeatStr(1, "bar spam")); // "bar spam"
console.log(repeatStr(3, "*")); // "***"
console.log(repeatStr(2, "ha ")); // "ha ha "


function repeaterStr (n, str1) {
    
    var newStr = str1;
    
    for (var i = 0; i < n; i++) {
        newStr += str;              //  this is the same as newStr = newStr + str; 
    }
    return newStr;
}


console.log(repeaterStr(3, "foo")); // "foofoofoo"
console.log(repeaterStr(1, "bar spam")); // "bar spam"
console.log(repeaterStr(3, "*")); // "***"
console.log(repeaterStr(2, "ha ")); // "ha ha "