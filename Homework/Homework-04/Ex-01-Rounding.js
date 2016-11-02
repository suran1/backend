// Write a function that returns the average of the given array rounded down to its nearest integer.


// getAverage does some basic error checking. If the element is a boolean it will calculate it anyway using 1 for true and 0 for false
function getAverage (arr) {
    
    var average = 0;
    var total = 0;
    
    for (var i = 0; i < arr.length; i++) {
        
        if (arr[i] === NaN || arr[i] === null || arr[i] === undefined || arr[i] === '') {
            return 'Array contains non-numeric elements. Exiting now.';      
        }  
        
        if (typeof arr[i] === 'boolean') { 
            console.log('This array has an element that is a Boolean. Will calculate average with "true" as 1 and "false" as 0');
        } 
        
        total += arr[i];       
            
    } // end for
    
    average = Math.floor(total/arr.length);
    
    return average; 
    
} // end function

// test calls

console.log(getAverage([2,2,2,2])); //2
console.log(getAverage([1,2,3,4,5,])); //3
console.log(getAverage([1,1,1,1,1,1,1,2])); //1
console.log(getAverage([4,3,0,1,true,1,1,2])); //1
