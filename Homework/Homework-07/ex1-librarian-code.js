/*
Did you know that librarians speak a secret language of just 'o's and 'k's? Write a function to decode the messages below.

Tip: "Hello World!" looks like - Ok, Ook, Ooo? Okk, Ook, Ok? Okk, Okk, Oo? Okk, Okk, Oo? Okk, Okkkk? Ok, Ooooo? Ok, Ok, Okkk? Okk, Okkkk? Okkk, Ook, O? Okk, Okk, Oo? Okk, Ook, Oo? Ook, Ooook!

Your task is to implement a function okkOokOo, that would take the message as input and return a decoded human-readable string.


*/

function okkOokOo (str) {
    
    var codeArr = [];
    var tempArr = str.split('? ');

    var decoder = {
        'Ok, Ook, Ooo': 'H',
        'Okk, Ook, Ok': 'e',
        'Okk, Okk, Oo': 'l',
        'Okk, Okkkk': 'o',
        'Ok, Ooooo': ' ',
        'Ok, Ok, Okkk': 'W',
        'Okkk, Ook, O':'r',
        'Okk, Ook, Oo':'d',
        'Ook, Ooook':'!' 
    }

    for (var i = 0; i < tempArr.length; i++) {

        // Check for exclamation point in array elements, and if it's there: 
        // -- Slice the string for that array element so that excludes the exclamation point (!)
        // -- Check if the array element contains the code for exclamation point - if it doesn't push the code for exclamation poin
        //    onto the array
        
        if (tempArr[i].lastIndexOf('!') !== -1 ) {
            tempArr[i] = tempArr[i].slice(0, (tempArr[i].length - 1));
            
            if (tempArr[i].lastIndexOf('Ook, Ooook') === -1){ 
                tempArr.push('Ook, Ooook');
            }
        }       
          
        // match decoder property name to tempArr[i] and push the value into codeArr
        for (var letterCode in decoder) {
            if (letterCode === tempArr[i]){ 
                codeArr.push(decoder[letterCode]);
            }
        }   
       
    } // end outer for
    
    return codeArr.join('');

}



console.log(okkOokOo('Ok, Ook, Ooo!'));  // 'H!'
console.log(okkOokOo('Ok, Ook, Ooo? Okk, Ook, Ok? Okk, Okk, Oo? Okk, Okk, Oo? Okk, Okkkk? Ok, Ooooo? Ok, Ok, Okkk? Okk, Okkkk? Okkk, Ook, O? Okk, Okk, Oo? Okk, Ook, Oo? Ook, Ooook!'));  // 'Hello World!'
console.log(okkOokOo('Ok, Ok, Okkk? Okk, Ook, Ok? Okk, Okk, Oo? Okk, Okk, Oo!'));  // 'Well!'
