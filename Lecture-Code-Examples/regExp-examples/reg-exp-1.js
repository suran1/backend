// Example: Looking for a specific file type - example find all the jpegs

//RegExp with constructor and match
// match is used on a string
var whatToCheckFor = 'test';

var firstString = 'grapes are small round fruites that can be different colors and I like drinking grape juice';

var re1 = new RegExp('test');
var re2 = new RegExp('test*', 'g');

console.log(firstString.match(re1));
console.log(firstString.match(re2));


// Reg expression with search
// Returns the starting index of the first occurence of what we're searching for in the string
var re3 = /test/;
var re4 = /test/g;

var String1 = 'This is another test string';

console.log(String1.search(re3));
console.log(String1.search(re4));


//Replace accepts a regular expression as an argument and a new string. 
// Replace is used with strings.

var re5 = /grape/g;
var re6 = /grape/;
console.log(firstString.replace(re5, 'apple'));
console.log(firstString.replace(re6, 'apple'));

