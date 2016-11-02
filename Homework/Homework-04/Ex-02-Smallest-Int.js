// Write a function that accepts an array of integers and returns the smallest integer in the array.

function smallestInteger(smallInt) {
    
    var smallest = 0;
    
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
    
    //console.log(smallInt);

    return smallInt[0]; 
}



console.log(smallestInteger([34, 15, 88, 2])); // 2
console.log(smallestInteger([34, -345, -1, 100])); // -345

/*Since you'll probably want me to carve this out of stone, I'm working on quicksort. Probably won't be done before class
  This isn't the final code (or close to it)...tried to squeeze out a sorting algorighm with my brain but, realized I'd have
  to track position and what not.
 

function smallestInt (intArr){
    var smallestPos = 0;
    var swap = 0;
    
    for (var i = 0; i < intArr.length; i++){
        if (intArr[i] === NaN || intArr[i] === undefined || intArr[i] === null || intArr[i] === '') {
            return 'This array has non numeric values. Exiting now.';
        } 
        
        if (typeof intArr[i] === 'boolean') {
            console.log('This array has boolean values. Sorting will continue with 0 for false and 1 for true.');
        }
        
        
        // So I looked up some sorting algorithms. Went with Quick Sort
        if (i !== intArr.length - 1){
            console.log('Working on it...');
            
        } else if (intArr[i] > intArr[i + 1]){
            swap = intArr[i+1];     // store larger number in swap variable
            intArr[i+1] = intArr[i]  // move larger number into the next element
            intArr[i] = swap;       // the smaller element is in its proper place
            smallestPos = i          
            
        }
    } // end for
    
    return intArr[0];
    
} // end function

console.log(smallestInt([34, 15, 88, 2])); // 2
console.log(smallestInt([34, -345, -1, 100])); // -345
*/
