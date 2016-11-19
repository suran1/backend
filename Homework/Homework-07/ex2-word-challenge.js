/*

The principal of a school likes to put challenges to the students related with finding words of certain features. One day she said: "Dear students, the challenge for today is to find a word that has only one vowel and seven consonants but cannot have the letters 'y' and 'm'. I'll give a special award for the first student that finds it." One of the students used his dictionary and spent all the night without sleeping, trying in vain to find the word. The next day, the word had not been found yet. This student observed that the principal has a pattern in the features for the wanted words:

The word should have n vowels, may be repeated, for example: in "engineering", n = 5.
The word should have m consonants, may also be repeated: in "engineering", m = 6.
The word should not have some forbidden letters.
Create a function that receives the three arguments in the order given above, wantedWords(list, vowels, consonants, forbidLetters) and output an array with the word (or words) having the words in the order given in the pre-loaded list. If no words are found, return an empty array.

*/


function wantedWords (list, vowels, consonants, forbidLetters) {
    
   
    var answers = [];
    var arrayList = [];   // to hold strings in list converted to arrays
    
    
    for (var i = 0; i < list.length; i++) {
        
        var forbidFlag = false;
        arrayList.push(list[i].split(''));          
                
        var j = 0;
        var countVowels = 0;
        var countConsonants = 0;
        
        
        while ((!forbidFlag) && (j < arrayList[i].length)) {
            var k = 0;
            
                        //check for forbidden letters
            while (k < forbidLetters.length && forbidFlag === false) {
                if (arrayList[i][j] === forbidLetters[k]) {
                    forbidFlag = true;
                }
                k++;
            }
            

            if (/[aeiou]/i.test(arrayList[i][j]) && forbidFlag === false) {
                countVowels++; 
            } else {
                countConsonants++; 
            }
            
            j++;
            
        } // end while
        
        if (forbidFlag === false && countVowels === vowels && countConsonants === consonants) {
            answers.push(list[i]);
        }
    
    } // end for loop


    return answers;


}

var wordList = ['strength', 'afterwards', 'background', 'photograph', 'successful', 'understand'];

console.log(wantedWords(wordList, 1, 7, ['m', 'y']));     // ['strength']
console.log(wantedWords(wordList, 3, 7, ['m', 'y']));     // ['afterwards', 'background', 'photograph', 'successful', 'understand']
console.log(wantedWords(wordList, 3, 7, ['a', 's' , 'm', 'y']));    // []

