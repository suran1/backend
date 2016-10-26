var rnaTrans = function() {};

rnaTrans.prototype.toRna = function(toRna) {
/*
* `G` -> `C`
* `C` -> `G`
* `T` -> `A`
* `A` -> `U`
*/  
    
    var str = [];
    str = toRna.split('');
    console.log('str value: ', str, str.length);
    
    for (var i = 0; i < str.length; i++) {
        switch(str[i]) {
            case 'G':
                str[i] = ('C');
                break;
            case 'C':
                str[i] = ('G');
                break;
            case 'T':
                str[i] = ('A');
                break;
            case 'A':
                str[i] = ('U');
                break;
            default:
                console.log('Invalid DNA sugar');
                break;
    } // end switch
  } // end for
    
    
    toRna = str.join('');
    return toRna;
}

    
module.exports = rnaTrans;