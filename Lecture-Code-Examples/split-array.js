// Write a function that takes two arguments: first an array of letters; second a number. The function should split the array into a twodimensional // array with elements the size of the second arguments.


// Example output [['a', 'b'], ['c', 'd']]


function splitArray(arr, size){

 var newArr = [];
 

 for (var i = 0; i < arr.length; i+=size) {
     newArr.push(arr.slice(i, size + i));
 }    
    

 return newArr;

}






console.log(splitArray(['a', 'b', 'c', 'd'], 2));
console.log(splitArray(['a', 'b', 'c', 'd', 'e'], 3));
console.log(splitArray(['a', 'b', 'c', 'd', 'e'], 4));
