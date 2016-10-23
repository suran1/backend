// This function returns an array of the largest number in each sub-array of an array
function largestOfFour(arr) {
  // You can do this!

    var newArr = [];  // placeholder for the largest elements of each sub-array
    var j = 0;        // index for largest element in each sub-array
   


    for (var i = 0; i < arr.length; i++){
        
      arr[i] = arr[i].sort(function(a,b){    // Had to use this to ensure a numerical sort in descending order
          return b - a;
      });
      
      newArr.push(arr[i][j]);

    } // end for     

    arr = newArr;
    return arr;
    
} // end function

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);