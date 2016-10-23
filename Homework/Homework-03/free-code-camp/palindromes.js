// This function checks a string to see if it's a palindrom
// NOTE: This function removes all non-alphanumeric characters in the string 
// and then checks the string

function palindrome(str) {
  // Good luck!
    
    
  /* Convert alpha characters to lower case. Then method chain with regular expression to find
   * all occurences on non-alphanumeric characters
   * The reg expresion explained  /[^0-9a-z]/gi,"":
       /    / match the pattern of whatever is inside the forward slashes
       [    ] match any digit 0-9 and any lower-case letters a through z
       ^      this equates to "not" - so match anything that does not match 0-9 or a-z
       +      matches any string that contains at least one occurrence of the reg-exp (i.e. non-alphanumeric character) 
       g      g means global, that is don't stop searching/matching after the 1st occurrence - search the entire string
       i      case insensitve (this isn't necessary, but included so I can learn it's a switch)
       ,      separator - separates search expression from replacement expression/string
       ""     replace with the empty string - this is what replaces the non-alpha numeric characters
  */
    str = str.toLowerCase().replace(/[^0-9a-z]+/gi,"");  
    
    var endIndex = str.length - 1;
    
    
    for (var i = 0; i <= Math.round((str.length)/2); i++) {
        
      if (str.charAt(i) !== str.charAt(endIndex)) {
          
          return false;
          
      } else {
          endIndex--;      
      }      
  } // end for loop     
        return true;
        
} // end function


// call function
palindrome('race (*#_) car');
