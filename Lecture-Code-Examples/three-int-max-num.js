/*
    Write a function that takes one positive three-digit integer and rearranges its digits to get maximum 
    possible number. Assume the argument is an integer. Return null if argument is not valid:
    

*/

 function maxRedigit(num) {
     
     var newNum = [];
     var strNum = '';
     
   
     if (num < 100 || number > 999) {
        return null;    
     } 
     
    strNum = num.toString();
    newNum = strNum.split('');
     
    // alternately  newNum.sort().reversse(); 
    newNum.sort(function (a, b){
        return b-a;
     });
     
    
     return parsetInt(newNum.join(''));     //returns a number not a string
     }
     
 } 


console.log(maxRedigit(123)); // 321
console.log(maxRedigit(297)); // 972
console.log(maxRedigit(368)); // 863
console.log(maxRedigit(531)); // 531
console.log(maxRedigit(636)); // 663
console.log(maxRedigit(555)); // 555
console.log(maxRedigit(32)); // null

/** REPLACE THIS WITH BRENNA'S CODE
function maxRed (n) {
    
    var newNum = [];
     var inValid = 'Not a valid number';
     var strNum = ''; 
     
    
    
    
   
     if (n < 100) {
        newNum = inValid;
     } else {
        strNum = n.toString();
        newNum = strNum.split('');
        
        var max = newNum[0];
    
        for (i = 0; i < strNum; i++) {
            if (newNum[i] > max) {
                temp = max;
                max = newNum[i];
                
                
            }
        } 
     
    
        return newNum.join('');
     }
    
}


console.log(maxRed(123)); // 321
console.log(maxRed(297)); // 972
console.log(maxRed(368)); // 863
console.log(maxRed(531)); // 531
console.log(maxRed(636)); // 663
console.log(maxRed(555)); // 555
console.log(maxRed(32)); // null


**/