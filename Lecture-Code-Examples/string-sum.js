/*
    Compare two strings by the sum of their character values. The strings should not be case sensitive. Return 'equal' if the the strings 
    are equal and 'not equal' if the are not.

*/

function compare(str1, str2){
    var sum1 = 0;
    var sum2 = 0;
    
    sum1 = addChar(str1);
    sum2 = addChar(str2);
    
    
    if (sum1 === sum2) {
        return 'equal';
    } else {
        return 'not equal';
    }
    
}

function addChar (str) {
    sum = 0;
    
    for (var i = 0; i < str.length; i++) {
        sum += str.toUpperCase().charAt(i).charCodeAt();
    }
    
    return sum;
}


console.log(compare("AD", "BC")); // equal
console.log(compare("AD", "DD")); // not equal
console.log(compare("gf", "FG")); // equal