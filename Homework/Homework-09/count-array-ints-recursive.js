/*

    Given a multidimensional array, return the total number of integers stored anywhere in the array. Do not specifically hardcode for a number of dimensions. You may assume that no other data types will be present in the arrays. 
    
    Examples:
    
        [] results in 0
        [[]] results in 0
        [1, [1]] results in 2
        [1, [], 2, [], 3, []] results in 3
        [0, [1, [5, [4, 3], 1], 1]] results in 7
        [[[5], 3], 0, 2, [], [4, [5, 6]]] results in 7

*/




/*********************************************************************************************
    Solution logic: Recursive function is placed inside of another function in order to keep
    the count variable incrementing correctly. (That is, the solution takes advantage of closure). 
    The following explanation uses the input to explain what is happening
    
    Case 1:  [] // results in 0
        In this case, the for loop arr.length check is false ([].length == 0). 
        CountInts simply returns count, which was set to 0
        
    Case 2:  [[]] // results in 0  
        Here, the array has a length of 1, so we enter the for loop.
        Now, i = 0 so arr[i] = [], an array. 
        Make recursive call to CountInts, passing arr[i], which is [] (an empty array)
        Now, i = 0 in the for loop of the 1st recursive call to CountInts. 
        arr.length fails because [].length is 0. 
        Exit for loop.
    
        
    Case 3: [1, [1]]   // results in 2
        Here the initial array has a length of 2.
        Initial call to CountInts:
          For loop:
            i = 0
            arr.length = 2
            arr[i] is not an instanceof Array (false)
            increment count
          For loop:
            i = 1
            arr.length = 2
            arr.[i] is an array, so
            Make recursive call to countInts
              For Loop:
                 i = 0;
                 arr.length = 1
                 arr[i] is not an instanceof Array (false)
                 increment count
              For loop:
                i = 1
                i is not less than arr.length
                exit for loop
                exit this instance of CountInts (remove from the stack)
            For Loop:
              i = 2
              i is not less than arr.length
              Exit for loop
        Log '2' to the console 
            
    Case 4:  [1, [], 2, [], 3, []]  // results in 3 
        Initial array length is 6
        Initial call to CountInts:
          For loop:
            i = 0
            arr.length = 6
            arr[i] is not an instanceof Array (false)
            increment count   // count == 1 now
          For loop:
            i = 1
            arr.length = 6
            arr.[i] is an array, so
            Make recursive call to countInts
              For Loop:
                 i = 0;
                 arr.length = 0
                 Exit for loop (i is not less length arr.length)
              Exit this instance of CountInts (remove from the stack)    
          For loop:                         
            i = 2
            arr.length = 6
            arr[i] is not an instanceof Array (false)
            increment count   // count == 2 now
         For loop:                         
            i = 3
            arr.length = 6
            arr.[i] is an array, so
            Make recursive call to countInts
              For Loop:
                 i = 0;
                 arr.length = 0
                 Exit for loop (i is not less than length arr.length)
              Exit this intance of CountInts (remove from the stack)     
       ... And so on for the rest of the array the console.log '3' 
       
       
    Case 5: [0, [1, [5, [4, 3], 1], 1]]    // result is 7
    // This one is the true test - lots of nested arrays. The key is not to use 'return' to make the recursive call. Using return to make the
    // recursive call stops the calling function at that point, so there is no way to reference the calling function's place in the array when it // make the recursive call. This makes it impossible to check the rest of the calling function's array
    
      Call array check;  arrayCheck([0, [1, [5, [4, 3], 1], 1]])        
      Initial call to CountInts:   countInts(input);
          For loop:
            i = 0
            arr.length = 2
            arr[i] is not an instanceof Array (false)
            increment count   // count == 1 
          For loop:
            i = 1
            arr.length = 2
            arr.[i] is an array, so
            Make recursive call to countInts   // checking array = [1, [5, [4, 3], 1], 1]
              For Loop:
                 i = 0;
                 arr.length = 3
                 arr[i] is not an instanceof Array (false)
                 increment count   // count == 2 
              For Loop:
                 i = 1
                 arr.length = 3
                 arr.[i] is an array, so
                 Make recursive call to countInts  // checking array =  [5, [4, 3], 1]
                    For Loop:
                        i = 0;
                        arr.length = 3
                        arr[i] is not an instanceof Array (false)
                        increment count   // count == 3 
                    For Loop:
                        i = 1;
                        arr.length = 3
                        arr.[i] is an array, so
                        Make recursive call to countInts     //checking array == [4, 3]
                            For loop:
                                i = 0
                                arr.length = 2
                                arr[i] is not an instanceof Array (false)
                                increment count   // count == 4 
                            For loop:
                                i = 1
                                arr.length = 2
                                arr[i] is not an instanceof Array (false)
                                increment count   // count == 5
                            For loop:
                                i = 2
                                i is not less than arr.length
                                Exit for loop
                            Exit this instance of countInts (remove from stack) (count = 5) 
                    For Loop:
                        i = 2
                        arr.length = 3
                        arr[i] is not an instanceof Array (false)
                        increment count   // count == 6 
                    For Loop:
                        i = 3
                        i is not less than arr.length
                        Exit for loop
                        Exit this instance of countInts (remove from the stack) (count = 6) 
              For Loop:
                 i = 2;
                 arr.length = 3
                 arr[i] is not an instanceof Array (false)
                 increment count   // count == 7 
              For Loop   
                 i = 3;
                 arr.length = 3
                 is not less than arrl.length  
                 Exit for loop
                 Exit this instance of countInts (remove from the stack) (count = 7) 
          For loop:
            i = 2
            arr.length = 2
            i is not less than  arr.length
            Exit for loop
            Exit the initial call to countInts // count is 7 now
            
      // Now we're in ArrayCheck (the outer function) 
      console.log(count)   // prints 7 to the console

    Case 6:  [[[5], 3], 0, 2, [], [4, [5, 6]]]  // result is 7   - This works similar to Case 5 - see that for specifics.
                
***********************************************************************************************/

function arrayCheck (input) {
    
    var count = 0; 

    
    function countInts (arr) {


        for (var i = 0; i < arr.length; i++) {
            if (arr[i] instanceof Array) { 
                countInts(arr[i]);
                
            } else if (arr[i] >= 0) {   
                count++;
            }    
        }  
    }
    
    countInts(input);
    console.log(count);
}
arrayCheck([]);                                 // 0
arrayCheck( [[]] );                             // 0
arrayCheck([1, [1]]);                           // 2
arrayCheck([1, [], 2, [], 3, []]);              // 3
arrayCheck([0, [1, [5, [4, 3], 1], 1]]);        // 7
arrayCheck([[[5], 3], 0, 2, [], [4, [5, 6]]]);  // 7
       
