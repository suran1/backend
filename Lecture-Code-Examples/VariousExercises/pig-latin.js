/* Exercise 1

Translate the provided string to Pig Latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and 
suffixes an 'ay'.

If a word begins with a vowel you just add 'way' to the end.

*/

function translatePigLatin(value){
  var suffixAy = ['ay'];
  var suffixWay = 'way';
  var newArray = [];
  var consArray = [];
  var i = 0;

  var arrValue = value.split('');
    
  if (/[aeiou]/gi.test(arrValue[0])) {
    return value + suffixWay;
  } else {
    while (!(/[aeiou]/gi.test(arrValue[i]))) {
      consArray.push(arrValue[i]);  
      i++;
    }
     return newArray = arrValue.slice(i).join('') + consArray.join('') + suffixAy.join('');
  }
}

console.log(translatePigLatin("california")); // "aliforniacay"
console.log(translatePigLatin("paragraphs")); //"aragraphspay"
console.log(translatePigLatin("glove")); // "oveglay"
console.log(translatePigLatin("algorithm")); //"algorithmway"
console.log(translatePigLatin("eight")); //"eightway"


// Blake's solution
function translate(str) {
  function isVowel(c) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1;
  }

  if (isVowel(str.charAt(0))) {
    return str + 'way';
  } else {
    for (var i = 1; i < str.length; i++) {
      if (isVowel(str[i])) {
        var letters = str.slice(0, str.indexOf(str[i]));
        var remainder = str.slice(str.indexOf(str[i]));
        return remainder + letters + 'ay';
      }
    }
  }
}

console.log(translate("california")); // "aliforniacay"
console.log(translate("paragraphs")); //"aragraphspay"
console.log(translate("glove")); // "oveglay"
console.log(translate("algorithm")); //"algorithmway"
console.log(translate("eight")); //"eightway"