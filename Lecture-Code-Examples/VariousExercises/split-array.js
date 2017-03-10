// Write a function that takes two arguments: first an array of letters; second a number. The function should split the array into a twodimensional // array with elements the size of the second arguments.


// Example output [['a', 'b'], ['c', 'd']]


function splitArray (arr, size) {

 var newArr = [];
 

 for (var i = 0; i < arr.length; i+=size) {
     newArr.push(arr.slice(i, size + i));     // this works because slice returns one less than the upper bound (e.g. i = 0, size + i = 2, slice
 }                                            // creates an array from index 0 to index 1; then by incrementing i by size, we're at the correct
                                                // spot in the array for the next iteration through the loop)
    
    
    
    
    return newArr;

}






console.log(splitArray(['a', 'b', 'c', 'd'], 2));
console.log(splitArray(['a', 'b', 'c', 'd', 'e'], 3));
console.log(splitArray(['a', 'b', 'c', 'd', 'e'], 4));
console.log(splitArray(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'], 6));
