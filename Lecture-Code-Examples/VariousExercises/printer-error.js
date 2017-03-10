/*  In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example, a "good" control string would be aaabbbbhaijjjm meaning that the printer used color a three times, color b four times, then color a again, etc.

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm.

Write a function named printerError, which given a string will output the error rate of the printer as a string with a fraction where the numerator is the number of errors and the denominator the length of the control string. Letters will always be lowercase.

*/

function printerError(str) {
    
    var count = 0;
    
    function colorCode(c) {
        return  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'].indexOf(c) !== -1; 
    }

    
    for (var i = 0; i < str.length; i++) {
        if (!colorCode(str.charAt(i))) {
        count++;         
        } 
    }
    
    return count + '/' + str.length;
    
}




console.log(printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz'));   // '3/56'
console.log(printerError('aaabbbbhaijjjm'));   // '0/14'
console.log(printerError('aaaxbbbbyyhwawiwjjjwwm'));   // '8/22'


// Alternate solution #!

function printError(arg){
  
  var count = 0;
  var err =arg.split('');
  for( var i =0; i< err.length; i++){
    if (err[i].charCodeAt() > 109 && err[i].charCodeAt() < 123 ){
        count ++;
    }
  } 
    return count + '/' + arg.length;
}
console.log(printError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz'));   // '3/56'
console.log(printError('aaabbbbhaijjjm'));   // '0/14'
console.log(printError('aaaxbbbbyyhwawiwjjjwwm'));   // '8/22'

// Blake's solution

