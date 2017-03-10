//Write a function that takes a phone number as an argument and performs the following:

// if the phone num is < than 10 didgits return 10 digits



/*

function phoneCheck (num) {

var check = isNan(num);

 
    
if isNan(num){
    if (num.length > 14) {
        return '0000000000';
    } else if ()
    
    
}
    
    
if ((isNaN(num) && num.length === 10) || num.length < 10 || ( num.length > 11 && num === /{[0-9], 11}/)) {
    return '0000000000';
} else if (num.length === 10) {
    return num;       
} else if (num.length === 11 && num.charAt(0) == 1) {
        return num.substring(1, num.length);
} else if (num === /[0-9][0-9][0-9].[0-9][0-9][0-9].[0-9][0-9][0-9][0-9]/) {
   // else if (num === /[0-9]+\./)
    return num;
} else {
    return '0000000000';
}
    
*/
    
// Brenna's solution

function phoneNumber(nbr) {
    var splitNbr = nbr.split('');
    var goodNbr = []
    
    for (var i = 0; i < splitNbr.length; i++) {
        if ((parseInt(splitNbr[i]), 10) || splitNbr[i] === 0){   // have to explicitly call out zero - parseInt doesn't process it
            goodNbr.push(splitNbr[i]);                         // splitNbr[i] is a string, not an int; parste
        }
    }
    if (goodNbr.length === 11 && goodNbr[0] === '1') {
        goodNbr.shift();
        return goodNbr.join('');
    } else if (goodNbr.length > 11 || goodNbr.length < 10) {
        return '0000000000';
    } else {
        return goodNbr.join('');
    }
       
    
return goodNbr;


}

console.log(phoneNumber('1234567890'));


