//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};


Bob.prototype.hey = function(input) {
//
    
    var finalChar = input.substr(input.length - 1);
    console.log(finalChar);
    
    var yell = input.toUpperCase();
    var numbers = /[0-9],\s[0-9],\s[0-9]\s/.test(input);
    //var if (input(/[0-9],\s[0-9],\s[0-9]/))
        ;
        
    console.log('yell = ', yell);
    console.log('input = ', input);
    console.log('numbers : ', numbers);
    
    //if (numbers) 
    
    
    
    if ((yell === input) || (numbers)){
        console.log(yell === input);
        console.log(input === numbers);
        return 'Whoa, chill out!';
    } else {
        
        switch(finalChar){
            case '':
            case '   ':    
                return 'Fine. Be that way!';
                break;
            case '?':
                return 'Sure.';
                break;
            default:
                return 'Whatever.';
        } // end switch
    } // end else
        
};

module.exports = Bob;
