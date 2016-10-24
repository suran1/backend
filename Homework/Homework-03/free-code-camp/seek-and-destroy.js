// This function returns a new array composed of all the elements that don't match elements in a 2nd array.
// This function will read in any number of arguments, but assumes the first argument is or can be coverted to an array. 

// NOTE:  I've left unnecessary code in here so that I can ensure my understanding. This took me FOREVER to figure out!

function destroyer(arr) {
  // Remove all the values

    var argArr = Array.from(arguments);    // convert all the arguments into an array (or array with subarrays)
    var newArr = argArr.shift();           // removing the first element of the argArr because it is the subaarry to filter 
    console.log(argArr);                   // shows argArr only contains elements that will be criteria for filtering the array
                                           // (i.e, items to exclude in this case, as the code will bear out)
    console.log(newArr);                   // shows newArr contains the array to filter
    
    
    
    
   var index = -1;                          // set to -1 to as an indicator to mean 'not found' in the newArr for indexOf method

   arr = newArr.filter(function(elem)  {    // elem is an element of newArr - filter cycles through newArr ( each newAarr value ('element') has a                                          // turn at being elem). array.filter returning an array of the matches that meet crtiteria in the                                              // anonymous predicate function ('function') , or a separate named function (I chose predicate)
                                            // array.filter expects the predicate function to return a boolean value for each iteration
                                            // through the values ('elem's') so it knows whether to keep / include the value in the new 
                                            // array it creates. If predicate function evaluates elem to true, it's included in the new array
                                            // otherwise, if it's false, it's 'filtered out' (excluded).
       
            console.log(elem);              // the current value of elem (from newArr). Remember array.filter automcically cycles through
                                            // all the values in newArr. array.filter doesn't change the original array - newArr is the 
                                            // same as it was befoe array.filter started

            console.log(argArr.indexOf(elem));                //returns index of 1st occurence in argArr where it matched value in elem (i.e.                                                       // a specific value in NewArr)

            console.log(argArr.indexOf(elem) === index);      //returns a boolean value - if it's a match or not. If the element 
                                                              // in argArr is in elem (i.e., newArr), indexOf returs a positive value
                                                              // indicating where it found the argArr element in elem (i.e., newArr).
                                                              // Thus, the comparison with index returned by indexOf <> index 
                                                              // (index = -1), the result is 'false'. If the result is false, the
                                                              // newArr.filter won't include the matching element in the final array
                                                              // However, if the item in argArr is not found in elem (i.e., newArr), then 
        return argArr.indexOf(elem) === index;                // indexOf returns =1, indicating not found, which is   
            
    });
    
    console.log(newArr);                                      // just to prove newArr remains unchanged; I could have assigned newArr the results
                                                              // of newArr.filter, and then it would have changed, but didn't for clarity
    console.log(arr);                                         // shows that 'arr' is the result of the filtering newArr
   return(arr);

   
}

destroyer([2, 3, 1, 4, 2, 3, 1], 3, 2);
