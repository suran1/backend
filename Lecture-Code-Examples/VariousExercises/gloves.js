/* Winter is coming! You must prepare for the bitter cold of Arkansas winter. Determine the number of pair of gloves you can constitute from the gloves you have in your very unorganized drawer.

A pair of gloves is constituted of two gloves of the same color.

You are given an array containing the color of each glove.

You must return the number of pairs you can create.

You must not change the input array.
*/

function numberOfGloves (gloves) {
    
  var unique = [];                          
  var gloveCount = [];
  var pairCount = 0;
    
  for (i = 0; i < gloves.length; i++) {                 // create an array that holds unique color values from glove array
      if (unique.indexOf(gloves[i]) === -1) {
          unique.push(gloves[i]);
      }
  }
        
  for (i = 0; i < unique.length; i++) {             // Counting each glove of each color. unique array is the limiting factor - meaning 
      var count = 0;                                // check all values in the original array against the unique array
                                                    // We have to initialize count inside the outer for loop so it resets for each color
      for (j = 0; j < gloves.length; j++) {
        if (unique[i] === gloves[j]) {
            count++;
        }        
      }
      gloveCount.push(count);                         // When we're done counting a color, we push the count for that color into a new array
  }
        
  for (i = 0; i < gloveCount.length; i++) {           // Loop through the gloveCount array and calculate the cummulative glove pair count 
      if (gloveCount[i] > 1) {
          pairCount += Math.floor(gloveCount[i] / 2);
      }
  }    
  return pairCount;             
}

console.log(numberOfGloves(['red','red', 'red', 'red']));   // 2
console.log(numberOfGloves(['red','green','blue']));   // 0
console.log(numberOfGloves(['gray','black','purple','purple','gray','black']));   // 3


// Blake's solution - he creates an object which is populated with the color of the glove as a 
// a property of the object



function numOfGloves (gloves) {
  var gloveList = {};               // empty object
  var gloveCount = 0;

  for (var i = 0; i < gloves.length; i++) {
    if (gloveList.hasOwnProperty(gloves[i])) {      // check to see if the glove color already exists in the object  
      gloveList[gloves[i]] += 1;                    // if so, increment the value of the property by one
    } else {
      gloveList[gloves[i]] = 1;                     // if the glove color doesn't exist, create it as a new property in the 
    }                                               // gloveList object and set it's value to 1
  }
  for (var gloveColor in gloveList) {               // loop through the properties in the gloveList object
    if (gloveList[gloveColor] > 1) {
        gloveCount += Math.floor(gloveList[gloveColor] / 2);  // increment the umulative glove pair count
    }
  }
  return gloveCount;
}

console.log(numOfGloves(['red','red', 'red', 'red']));   // 2
console.log(numOfGloves(['red','green','blue']));   // 0
console.log(numOfGloves(['gray','black','purple','purple','gray','black']));   // 3