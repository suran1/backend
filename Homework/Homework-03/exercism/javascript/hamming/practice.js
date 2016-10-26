function Hamming(strand1, strand2) {
    
  var count = 0;
  
    try {
            //strand1.localeCompare(strand2) !== 0;
            if (strand1.length !== strand2.length)
                throw(err);
    }catch (err) {
        console.log("Strings aren't equal.");
        return console.log('Exitng application');
    }     
    
    console.log(strand1, strand2);

    
    for (var i = 0; i < strand1.length; i++) {
        if (strand1.charAt(i) !== strand2.charAt(i)) {
                console.log(strand1.charAt(i), strand2.charAt(i));
                count++; 
            } // end if
        } // end for 
    
    console.log(count);
    return count;
}

Hamming('abjde', 'abcdf');
Hamming('abcd', 'abcd');
