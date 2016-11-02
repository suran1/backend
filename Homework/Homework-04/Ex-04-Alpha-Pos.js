//Write a function that accepts a string and returns a string with every letter replaced with its position
//in the alphabet. Anything that is not a letter, ignore it, and don't replace it with anything.

function alphabetPosition (alphaStr) {
    
    var upperStr = alphaStr.toUpperCase();   // convert all string chars to uppoer case
    var upperArr = upperStr.split('');    // create an array for each characterin upperStr
    
    var codeStr = [0,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']; 
    var finalStr = [];
    
    
    for (var i = 0; i < upperArr.length; i++) {

        if ((upperStr.charCodeAt(i) >= 65) && (upperStr.charCodeAt(i) <= 90)) {  // charCodeAt didn't work when I attached to array[index],
                                                                                 // even thought array[index] resolves to a string...odd
            for (var j = 1; j < codeStr.length; j++) {
                
                if (upperArr[i] === codeStr[j]) {       // Hey - I know you're not supposed to use break, but it seemed a waste to
                    finalStr.push(j);                   // to keep running through the for loop once it matched. Just going for
                    break;                              // efficiency. I suppose I could have done a while loop, but this seemed
                }                                        // more straight-forward 
            } // end for

        } else {
            finalStr.push(upperArr[i]);
        }

    } // end outer for

return finalStr.join(' ');
    
    
} // end of function


console.log(alphabetPosition("The sunset sets at twelve o' clock."));  // "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
console.log(alphabetPosition("The narwhal bacons at midnight."));      // "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"

