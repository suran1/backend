// Write a function that accepts a string and returns a string with all the vowels replaced with exclamation marks

function replaceVowels (str) {
    
    var vowels = /[aeiou]/gi;             // Regular expression replaces all occurences of vowels with exclamation point (!)
                                          // g = global - searches all occurences of regular expresson in the string (if you don't have
                                          //              the 'g' switch, it only searches for 1st occurence and then stops)
                                          // i = case insensitive
    
    return str.replace(vowels, '!');      /* What's happening here:
                                           * Using the <str>.replace() method with a regular expression
                                           * Since 'vowels' contains our regular expression (a lis of vowels in this case), it will 
                                           * replace any vowels found with an exclamation point (!).
                                          */
    
    
}


console.log(replaceVowels('Hi!')) //'H!!'
console.log(replaceVowels('!Hi! Hi!')) // '!H!! H!!'
console.log(replaceVowels('aeiou')) // '!!!!!'
console.log(replaceVowels('ABCDE')) //'!BCD!'