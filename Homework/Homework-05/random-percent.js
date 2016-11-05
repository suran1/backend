/// Write a function that generates a random percentage between 75 & 99.99.

function randPercent () {
   var min = 75;
   var max = 100;           
    
   var result = (Math.random() * (max -min) + min).toFixed(2);     // Generates random number inclusive of min but exclusive of max;
                                                                    // rounded to 2 decimal places   
   return result + '\%';   
                                                                             
}

console.log(randPercent());