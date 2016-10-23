// This function compares two strings, checking to see if the second string matches the end of the first string.

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  
  
  if (target.length > str.length) {   //immediately returns false if the 2nd string is longer than the 1st strubg
      return false;
      
  } else if ((target === '') || (str === '')){   // If either string is the empty string, return false      
      return false;
      
  } else if (((str.length === 1) && (target.length === 1)) && (str === target)) { // evaluates str and target have only 1 char
      return true;
      
  } else if  ((str.substr((-target.length), (str.length - 1))) === target) {   // both str and target have at least 1 char; proceed
        return true;  
  } else
      return false;
} 

confirmEnding('Bastian', 'n');
