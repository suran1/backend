/*

Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

Note that inserting the three dots to the end will add to the string length.

However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.


*/

function truncateString (str, maxSize) {

    var strArr = str.split('');   // convert string to array
    var newArr = [];
    
    
    if (strArr.length <= maxSize) {         // return string in less than or equal to max string size
        return str;
        
    } else {
        
        newArr = strArr.slice(0, maxSize);
        for (var i = 1; i <= 3; i++) {
            
            if (strArr.length > maxSize && maxSize > 3) {
                newArr[maxSize - i] = '.';
                
            } else {
                newArr.push('.');
            }
        } // end for
    
    return newArr.join('');
    }
    
    
    
    
}


console.log(truncateString('A-tisket a-tasket A green and yellow basket', 11));
console.log(truncateString('Peter Piper picked a peck of pickled peppers', 14));
console.log(truncateString('A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A green and yellow basket'.length));
console.log(truncateString('A-tisket a-tasket A green and yellow basket', 3));


// alternate way - use substring

function trunc (str, max) {
    
    var string = (str > max) ? str.substring(0, max-3) + '...' : str;
    
    return string;
    
}

console.log(trunc('A-tisket a-tasket A green and yellow basket', 11));
console.log(trunc('Peter Piper picked a peck of pickled peppers', 14));
console.log(trunc('A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A green and yellow basket'.length));
console.log(trunc('A-tisket a-tasket A green and yellow basket', 3));
