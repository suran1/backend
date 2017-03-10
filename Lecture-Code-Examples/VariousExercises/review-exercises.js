// Write a functon that it accepts a string such tat each lowercase letter becomes uppercase and each
// uppercase leter becomes lowercase.




function changeCase (letter) {
    var letterArr = []; // array to store each character from letter (which is a string)
      
    
    
     for (var i = 0; i < letter.length; i++) {
              
        if ((letter.charCodeAt(i) >= 65) && (letter.charCodeAt(i) <= 90)) {
            letterArr.push(String.fromCharCode(letter.charCodeAt(i) + 32));
        } else if ((letter.charCodeAt(i) >= 97) && (letter.charCodeAt(i) <= 122)) {                           
            letterArr.push(String.fromCharCode(letter.charCodeAt(i) - 32));
        } else {
            letterArr.push(letter.charAt(i));
        }
    } // end for
    return letterArr.join('');
    
    
}

/************************************************************************************************************/


// Alternate method to change upper case to lower case and vise ver using substring, but had to use a variable
function altCase(myString) {
    var letterChange = [];
    var change = '';
    
    for (var i = 0; i < myString.length; i++) {
        if ((myString.charCodeAt(i) >= 65) && (myString.charCodeAt(i) <= 90)) {
            //letterChange.push(myString.toLowerCase(myString.charAt(i)));   
            change = myString.substr(i, 1).toLowerCase();
            letterChange.push(change);
            
            
        } else if ((myString.charCodeAt(i) >= 97) && (myString.charCodeAt(i) <= 122))  {    
             //letterChange.push(myString.toUpperCase(myString.charAt(i)));
             change = myString.substr(i, 1).toUpperCase();
             letterChange.push(change);
        } else {
            letterChange.push(myString.charAt(i));   
        }
        
    } // end for
    
    
    return letterChange.join('');
    
}

/************************************************************************************************************/


// Alt method 2 - splitting the original string and using separate functions 


function alternateCase (inputString){
    var inputStringArray = inputString.split('');
    var alteredStringArray = [];
    
    for (var i = 0; i < inputStringArray.length; i++) {
        if (isUppercase(inputStringArray[i])) {
            alteredStringArray.push(inputStringArray[i].toLowerCase());
        } else if (isLowercase(inputStringArray[i])) {
            alteredStringArray.push(inputStringArray[i].toUpperCase());
        } else {
            alteredStringArray.push(inputStringArray[i]);
        }
        
    } // en dfor
    
    var alteredString = alteredStringArray.join('');
    return alteredString;
    
}


function isUppercase(letter){
    var charCode = letter.charCodeAt();
    if (charCode => 65 && charCode <= 90) {
        return true;
    } else {
    return false
    }
} // end isUppercase

function isLowercase(letter) {
    var charCode = letter.charCodeAt();   //charCodeAt is ok with no index passed to it because letter ia a single element string 
                                            // charCodeAt defaults to 0 as the index if none is passed
    if (charCode >= 97 && charCode <= 122) {
        return true;
    } else {
        return false;
    }
} // end isLowercase
    
    

// Call with changeCase

console.log(changeCase('FREaky StRaNgEr'));

console.log(changeCase('hello world'));
console.log(changeCase('HELLO WORLD'));
console.log(changeCase('hello WORLD'));
console.log(changeCase('HeLLo WoRLD'));
console.log(changeCase('12345'));
console.log(changeCase('1a2b3c4d5e'));
console.log(changeCase('String.prototype.charCodeAt'));
console.log(changeCase(changeCase('Hello World')));

console.log('\nAlternate Method: \n');

// Call with altCase

console.log(altCase('hello world'));
console.log(altCase('HELLO WORLD'));
console.log(altCase('hello WORLD'));
console.log(altCase('HeLLo WoRLD'));
console.log(altCase('12345'));
console.log(altCase('1a2b3c4d5e'));
console.log(altCase('String.prototype.charCodeAt'));
console.log(altCase(altCase('Hello World')));


// Call with alternateCase

console.log('\nAlternate Method - 2: \n');

console.log(alternateCase('hello world'));
console.log(alternateCase('HELLO WORLD'));
console.log(alternateCase('hello WORLD'));
console.log(alternateCase('HeLLo WoRLD'));
console.log(alternateCase('12345'));
console.log(alternateCase('1a2b3c4d5e'));
console.log(alternateCase('String.prototype.charCodeAt'));
console.log(alternateCase(alternateCase('Hello World')));
