// Write a function that accepts a string as an argument and return the number of vowels in the string

function vowelCount (vowelStr) {
    
    var vowels = /[aeiou]/gi;   // reg expression to search all occurrences of voweles; 
                                //g = global so it will not stop at 1st occurrence (well search all occurences in the string
                                //i = case insensitive  
        
    return vowelStr.match(vowels).length;      /* What's happening here: 
                                                * <str>.match - this returns an array of all the matches that match the criteria in paranethesis
                                                * in this case, it's the reg exp checking for vowles: /[aeiou]/gi (explained previously)
                                                * since <str>.match returns an array of each successful match to the reg expression, we
                                                * can use the .length property to get the length of the array, which is equal to the number of 
                                                * matches, since each matched occurence of a vowel in the string gets its own element in the 
                                                * array.
                                                */
                                            
}

console.log(vowelCount('Hello, World!')); //3
console.log(vowelCount('abracadabra')); //5
console.log(vowelCount('Javascript is great!')); //6
console.log(vowelCount('wRjuUJvJxbnyTB3?sCLAp2mbGL3xe8')); //4
console.log(vowelCount('A')); //1
