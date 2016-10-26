var Hamming = function() {};

Hamming.prototype.compute = function (strand1, strand2) {
  
    
/****  The try catch works, but test fails it!  This runs in practice.js in this folder with no issues! ******/    
   var count = 0;
  
    // Exits app if strings aren't equal
    try {
            if (strand1.length !== strand2.length)
                throw(err);
    } catch (err) {
            console.log("Strings aren't equal.");
            return console.log('Exitng application');
    }     
    
    // compares each element of the string; if not equal increments count by 1
    for (var i = 0; i < strand1.length; i++) {
        if (strand1.charAt(i) !== strand2.charAt(i)) {
                count++; 
            } // end if
        } // end for 
    
    console.log(count);
    return count;
};

module.exports = Hamming;