/*

    Given an array of strings representing a list of usernames, return true only if all usernames 
    comply ith your company's guidelines. Return false otherwise
    
    The guidelines say that hte username is valid only if:
    
    - it is between 6-10 chars long
    - contains at least 1 lowercase letter
    - contains at least 1 number
    - contains only numbers and lowercase letters
    
    
*/


function authList(arr) {
    
    var valid = true;
    var i = 0;
    var username = /^[a-z0-9]+$/;  // regex that tests for only numbers and lowercase letters (must have at least 1 occurence)
    
    while (i < arr.length) {
        
        // check username length - end loop and get out of function if incorrect length
        if ((arr[i].length < 6 || arr[i].length > 10 )) {
            console.log('valid is false - username too short or too long');
            return valid = false;
        } 
        
        
        if (username.test(arr[i])) {    
           console.log('string is true - valid = ', valid);
        } else {    
            valid = false;
            console.log('this string is false! valid = ', valid)
        }

        i++;
    } // end while
        return 'user names are ' + valid;    
        
} // end function
    



console.log(authList(['john123', 'alex222', 'sandra1']));    // returns true
console.log(authList(['john123', 'alex222', 'sandraW']));    // returns false because sandraW has no number
console.log(authList(['john_123', 'alex222', 'sandra1']));   // returns false because john_123 contains an invalid character



function authUser(arr) {
    
    var valid = true;
    var username = /^[a-z0-9]+$/;   // regex that tests for only numbers and lowercase letters (must have at least 1 occurence)
                                    /* regex explained:
                                         /   /  - demarcation of regex beginning and end
                                        
                                        ^   - beginning of the string
                                        
                                        [a-z0-9]  - match lower case letters and digits
                                        
                                        +  match one or more of the preceding token - in this case only lowercase letters and numbers 
                                           if there are any other characters besides lowercase letters and numbers, the string won't    
                                           match
                                           
                                        $ - end of the string            
                                    */
    for (var i = 0; i < arr.length; i++) {
        if ((arr[i].length < 6 || arr[i].length > 10 ) || (!(username.test(arr[i])))) {
            return valid = false;
        } 
    } 
    return valid;
} 


console.log('\nCondensed version\n');
console.log(authUser(['john123', 'alex222', 'sandra1']));    // returns true
console.log(authUser(['john123', 'alex222', 'sandraW']));    // returns false because sandraW has no number
console.log(authUser(['john_123', 'alex222', 'sandra1']));   // returns false because john_123 contains an invalid character