function race (blurtle, harriet, lead) {
                                                                        // find the difference between Harriet and Blurtle's speed
var timeToCatch = lead/(harriet - blurtle);                             // time to catch Blurtle    

var hours = Math.floor(timeToCatch);
var minutes = Math.floor(timeToCatch * 60 - hours * 60);
var seconds = Math.floor(timeToCatch % 1 !==0) ? Math.floor(timeToCatch * 3600 - hours * 3600 - minutes * 60):0;
    
return [hours, minutes, seconds];

}


console.log(race(720, 850, 70));    // [0, 32, 18]
console.log(race(80, 91, 37));      // [3, 21, 49]
console.log(race(80, 100, 40));     // [2, 0, 0]