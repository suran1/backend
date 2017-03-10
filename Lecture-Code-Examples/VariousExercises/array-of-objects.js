/*  

    You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup
    that you are organizing.
    
    Your taks is to return an array which includes the developer who is the oldest. In case of a tie , include the ssame-age 
    senior developers listed in the same order as they appeared in the orignal input array. If it's just one, then just an a number.

*/


  var listOne = [
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 19, language: 'PHP' },
  { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
  { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
      
];

var listTwo = [
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 54, language: 'PHP' },
  { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
  { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 30, language: 'PHP' },
];


function findOldest (arrObject) {
    
    var senior = [];
    var maxAge = 0;
    
    
    for (var i = 0; i < arrObject.length; i++) {
        
        if (maxAge <= arrObject[i].age) {
            maxAge = arrObject[i].age;
        }
    }

    for (var i = 0; i < arrObject.length; i++) {
        if (arrObject[i].age === maxAge){
            senior.push(arrObject[i]);
        }
    }
    
    if (senior.length > 1) {
        return senior;
    }
    
    return maxAge;
}


console.log(findOldest(listOne));
// [
//   { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
//   { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
// ]

console.log(findOldest(listTwo)); // 54


// Blake's solution using 'callback'
// NOTE:  THIS DOESN'T WORK IF YOU HAVE TWO PEOPLE OF THE SAME AGE BEFORE THE MAX AGE IS ENCOUNTERED (i.e. the age is currently the max age
// and another person has that same age before the true max age is encountered) 

function findOld (arr) {
  var age = 0;
  var sameAge = [];

  for (var i = 0; i < arr.length; i++) {
      
    if (arr[i].age > age) {                         //find max age by iterating through the loop 
      age = arr[i].age;
        
        
    
    } else if (arr[i].age === age) {                // If age[i] === age (i.e., equales the max age), there is more than 1 person with max age     
      sameAge = filter(arr, function (element) {    // Call function 'filter' and pass the entire array ('arr'), and an anonymous function 
        return element.age === arr[i].age;          // Note that it passes the entire function definition to filter function:
      });                                           //      function (element) { return element.age === arr[i].age; }  
                                                    // At this point the anonymous function is not exectued, it's just being passed               // Code execution goes to the filter function 
        
        break;                                      // breaks out of loop
    } // end else if
  } // end for loop

  return sameAge.length > 0 ? sameAge : age;
}

function filter (arr, func) {                       // filter function accepts the full array and the anonymous function (lines 80 thru 81)
  var output = [];                                  // empty array to push objects with duplicates/repeats of max age (see note above) into

  for (var j = 0; j < arr.length; j++) {            // Cycle through the entire array
      
    if (func(arr[j])) {                             // This code executes the anonymous function that was passed from lines 80-81. 
                                                    //  ('func' is the filter function's parameter name for the anonymous function passed to it )
                                                    // First time through the for loop it passes arr[0].  \
        
                                                    // Note that 'arr[j]' is the 'element' parameter in  the anonymous function ('func' function)
                                                    
                                                    // So... how this works: 
                                                    //   the anonymous function (aka 'func') defined in lines 80-81 then compares:
                                                    //     - element.age (which is actually arr[j].age) to arr[i].age
                                                    //     - arr[i].age is the array object that matched the max age - the duplicate first  
                                                    //       encountered in the 'else if' comparision on line 79
                                                    //     - if element.age equals arr[i].age then the anonymous function returns 'true' 
                                                    //        otherwise, it return 'false'
        
        output.push(arr[j]);                        // if 'func' function (aka 'the anonymous function declared in lines 80-81) returns true,
    } //end if                                      // push arr[j] into output (the array for duplicates). When all array elements have been 
  } // end for                                      // passed to 'func' (aka the anonymous function declared in lines 80-81), the filter function                                                   // returns 'output' to the original function call (line 80) and assigns it to the variable
  return output;                                    // 'sameAge'.  sameAge has all the duplicate objects with the same max age, in the original 
}                                                   // order.

console.log(findOld(listOne));
// [
//   { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
//   { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
// ]

console.log(findOldest(listTwo)); // 54
