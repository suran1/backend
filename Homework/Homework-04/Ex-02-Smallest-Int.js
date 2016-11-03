// Write a function that accepts an array of integers and returns the smallest integer in the array.

function smallestInteger(smallInt) {
    
    
    /* Using this format to call an anonymous function that compares array elements to overcome the default lexicographical sort of the 
     * array.sort method. This anonymous compare function returns 1 of three values:
     *        return - 1    -- element a is less than element b (ascending order)
     *        return 0      -- element a is equal to element b, so stay the same
     *        return 1      -- element a is greater than element b, (descending order)
     * This functions assumes all array elements are Numbers
    */
    
    smallInt.sort(function(a,b) {
        
        return a - b;   //
    });
    
    return smallInt[0];   
}


console.log('The easy way - using the array.sort with a compare function: ');

console.log(smallestInteger([34, 15, 88, 2])); // 2
console.log(smallestInteger([34, -345, -1, 100])); // -345

/****************************************************************************************************************/

function smallInt (arr) {
    
    return Math.min.apply(null, arr);   // passes the array and passes each element into the min function; it tracks 
                                        // null sets the 'this' keyword
    
}

console.log(smallestInteger([34, 15, 88, 2])); // 2
console.log(smallestInteger([34, -345, -1, 100])); // -345


/**********************************************************************************************************************/

    function smInt (arr) {
        
        var smallest = arr[0];
        
        for (var i = 1; i < arr.length; i++){
            if (arr[i] < smallest) {
                smallest = arr[i];
            }
        }
        
        return smallest;
        
    } // end function

console.log(smallestInteger([34, 15, 88, 2])); // 2
console.log(smallestInteger([34, -345, -1, 100])); // -345

/*************************************************************************************************************************/

// Since you'll probably want me to carve this out of stone, I'm working on Quick Sort. Probably won't be done before class
//  QuickSort works by partitioning the array in place
 



function quickSort (intArr, left, right) {
    var index;                          // don't initialize it yet
    
  
    var process = validateArr (intArr);    // Thought I'd validate the array first before attempting to process it
    
    // Exit quickSort if the array isn't 100% numeric or evalutes to numeric; if there are boolean values, sort will proceed
    if (process === -1) {
        return console.log('This array has non-numeric values and is invalid for sorting. Exiting now.');
    } else if (process === 1) {
        console.log('This array has boolean values. Sorting will continue with 0 for false and 1 for true.');
    } else {
        ;   // do nothing
    }
    
    
    // Now that we know array is valid (i.e. all numeric values or evaluates to numeric), if the array has 1 or no elements, don't sort 
    // return array.

    if (intArr.length > 1){
        
        // check to see if left index has a value (1st time through, it won't), if not, set left to 0, otherwise left is left
        if (typeof left != 'number'){
            left = 0;
        }
        
        // check to see if the right index has a value (1st time through it won't), if not, set it to last index in intArr 
        if (typeof right != 'number') {
            right = intArr.length - 1;
        }
        
        index = partition(intArr, left, right);
        
        if (left < index -1){
            quickSort(intArr, left, index-1);
        }
        
        
        if (index < right) {
            quickSort(intArr, index, right);
        }
        
    }  // end outer if  
    
    return intArr[0];    //The first element in the array is the smallest integer
    
} // end function


function partition (numArr, left, right){
    var pivot = numArr[Math.floor((left + right) / 2)];     // find the pivot value 
    
    i = left;                                               // i is the pointer to the left of the pivot point
    j = right;                                              // j is the pointer to the right of the pivot point

    while (i < j) {
        
        while (numArr[i] < pivot) {                          // theck the values on the left side of the pivot to ensure
            i++                                             // they are less than it; if so increment i; if not, stop
        }
        
        while (numArr[j] > pivot) {                         // check the values on the right side of the pivot to ensure
            j--;                                            // they are greater than it; if so, decrement 1, if not stop
        }
        
        if (i <= j) {                                       // At this point, the pointers have stopped moving. If i is less than j 
            swap(numArr, i, j);                              // or equal to j, then swap the values at i and j so that all items greater
            i++;                                            // than pivot are on the right, and all items less than pivot are on the left
            j--;                                            // increment i and decrement j so that 
        } 
    } // end while
    
    return i;                                               // this sets us up to start at the correct position for next partiion
}


function swap (arr, leftPointer, rightPointer) {             // swap out the values that left pointer and right pointer are indexing
    
    var temp = arr[leftPointer];
        arr[leftPointer] = arr[rightPointer];
        arr[rightPointer] = temp;
}



function validateArr (arr) {                                  // validate the array to ensure it's 100% numeric or numeric equivalent
    var validArr = 0;
    
    for (var i = 0; i < arr.length; i++) {
        if ( arr[i] === NaN || arr[i] === undefined || arr[i] === null || arr[i] === '') {
            return validArr = -1;
        } 
        
        if (typeof arr[i] === 'boolean') {
            return validArr = 1;
        } 
    } // end for    
    
    return validArr;
} // end function
 

console.log('\n\nThe hard way - with a quickSort algorithm: ')

console.log(quickSort([34, 15, 88, 2])); // 2
console.log(quickSort([34, -345, -1, 100])); // -345       
// console.log(quickSort([34, 15, 88, true, 2])); // 2