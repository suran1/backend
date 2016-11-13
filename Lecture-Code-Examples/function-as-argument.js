/* Write a function that takes two arrays and a function as a arguments. The function should merge the two corresponing
 array values using the function provided as an argument.
 
 function add (a, b) {
  return a + b;
}

console.log(zip([1, 2, 3, 4, 5], ['a','b'], add));    // ['1a', '2b']

function merge (a, b) {
  return a + b.charCodeAt(0);
}

console.log(zip([1, 2, 3, 4, 5], ['a','b','c','d','e'], merge));   // [98, 100, 102, 104, 106
 
 */
 
 
function zip (arr1, arr2, func) {
 
    var max = arr1.length;
    var newArr = [];
    
                                                // alternate way without checking lengths:
    if (arr1.length > arr2.length) {            // remove these lines, and in the for loop check for 
        max = arr2.length;                      // length of array like this:
    ]                                           // for (var i = 0; i < arr1.length; i++) {
                                                //     if (arr2[i]) {
                                                //            newArr.push(func(arr[i], arr2[i]));        
                                                //     }
                                                //  }
                                                // This checks to see if the 'i-th' element exists in the short array)
                                                           
    
    for (var i = 0; i < max; i++) {
       newArr.push(func(arr1[i], arr2[i]));
    }
    
    return newArr;
 
 } // end zip funciton
 
 
function add (a, b) {
     return (a + b);
}
 
 
function merge (a, b) {
    return a + b.charCodeAt(0);
}
 
 
 console.log(zip([1, 2, 3, 4, 5], ['a','b'], add));    // ['1a', '2b']
 console.log(zip([1, 2, 3, 4, 5], ['a','b','c','d','e'], merge));   // [98, 100, 102, 104, 106
 
 
 