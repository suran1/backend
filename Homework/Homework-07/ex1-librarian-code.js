/*
Did you know that librarians speak a secret language of just 'o's and 'k's? Write a function to decode the messages below.

Tip: "Hello World!" looks like - Ok, Ook, Ooo? Okk, Ook, Ok? Okk, Okk, Oo? Okk, Okk, Oo? Okk, Okkkk? Ok, Ooooo? Ok, Ok, Okkk? Okk, Okkkk? Okkk, Ook, O? Okk, Okk, Oo? Okk, Ook, Oo? Ook, Ooook!

Your task is to implement a function okkOokOo, that would take the message as input and return a decoded human-readable string.


*/

function okkOokOo (str) {
    
    var decoded = '';

    
    var codeArr = [];
     

        var tempArr = str.split('? ');
        console.log(tempArr);
        codeArr = tempArr()
        
        
        var decoder {
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
        
        for (int i = 0; i < tempArr.length; i++) {
            if tempArr[i] ===
            
            
        }
    
    
    
    
    
    
    
    return decoded;   
}



console.log(okkOokOo('Ok, Ook, Ooo!'));  // 'H!'
console.log(okkOokOo('Ok, Ook, Ooo? Okk, Ook, Ok? Okk, Okk, Oo? Okk, Okk, Oo? Okk, Okkkk? Ok, Ooooo? Ok, Ok, Okkk? Okk, Okkkk? Okkk, Ook, O? Okk, Okk, Oo? Okk, Ook, Oo? Ook, Ooook!'));  // 'Hello World!'
console.log(okkOokOo('Ok, Ok, Okkk? Okk, Ook, Ok? Okk, Okk, Oo? Okk, Okk, Oo!'));  // 'Well!'
