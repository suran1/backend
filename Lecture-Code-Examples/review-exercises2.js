// Write a function that accepts a string as an argument and returns the reverse of the string


function reverseMe (myString){
 
 
    var rev = myString.split('').reverse().join('');
    return rev;
}

console.log(reverseMe('Hello, World!'));
console.log(reverseMe('This is a test'));
console.log(reverseMe('Javascript is great!'));
console.log(reverseMe('wRjuUJvJxbnyTB3?sCLAp2mbGL3xe8'));
console.log(reverseMe('A'));


// Alternate way

function flip (word) {
    var backward = [];
    wordArr = word.split('');
    var j = word.length - 1;
    
    for (var i = 0; i < word.length; i++) {
        backward.push(wordArr[j--]);
    }
    
    // alternte way
    /*
    for (var k = wordArr.length; k >=0; k--){
        backward.push(wordArr[i]);
    }
    */
    
    return backward.join('');  
}

console.log(flip('Hello, World!'));
console.log(flip('This is a test'));
console.log(flip('Javascript is great!'));
console.log(flip('wRjuUJvJxbnyTB3?sCLAp2mbGL3xe8'));
console.log(flip('A'));
