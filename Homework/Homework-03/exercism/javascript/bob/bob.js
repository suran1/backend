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
    var numbers = input.split(', ');
    var check =;
    
        
    console.log('yell = ', yell);
    console.log('input = ', input);
    console.log('numbers : ', numbers);
    
    if (numbers.fiter(function(elem){
        return 
    } 
    
    if ((yell === input) && (input !== numbers)){
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
            case [0-9]:
            default:
                return 'Whatever.';
        } // end switch
    } // end else
        
};

module.exports = Bob;
