/*
    Write a funciton that accepts an array of integers and a target.
    If any two consective numbers in the array add up to the target, remove the second number. 
    Return the altered array.
*/ 


function removeTargetSum (arr, target) {
    
    var i = 0;
    var removed = false;
    
    while (i < arr.length - 1) {
        if (arr[i] + arr[i + 1] === target) {
            arr.splice(i+1, 1);
            removed = true;
        }
        
        if (!removed) {
            i++;
        }
        
        removed = false;
    } // end while
    
    return arr;
} // end function
    



console.log(removeTargetSum([1, 3, 5, 6, 7, 4, 3], 7)); // [1, 3, 5, 6, 7, 4]
//console.log(removeTargetSum([4, 1, 1, 1, 4], 2)); // [4, 1, 4]
//console.log(removeTargetSum([2, 2, 2, 2, 2, 2], 4)); // [2]