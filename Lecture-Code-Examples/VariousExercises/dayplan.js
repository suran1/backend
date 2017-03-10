/* The best way to have a productive day is to plan out your work schedule. Given the following three inputs, please create an an array of time allotted to work, broken up with time allotted with breaks:

Input 1: Hours - Number of hours available to you to get your work done!
Input 2: Tasks - How many tasks you have to do throughout the day
Input 3: Duration (minutes)- How long each of your tasks will take to complete
Criteria to bear in mind:

Your schedule should start with work and end with work.
It should also be in minutes, rounded to the nearest whole minute.
If your work is going to take more time than you have, return "You're not sleeping tonight!"

*/


function dayPlan(hr, task, duration) {
    var hrmin = hr * 60;
    var totalbrk = hrmin -  (task*duration);
    var indbreak = Math.round(totalbrk/(task-1));
    var arr=[];
    
    if (duration * task > hrmin) {
      return "You're not sleeping tonight";
    } else {
        for (var i = 0; i< (task); i++){
            if (i === (task-1)) {
                arr.push(duration);
            } else {
                arr.push(duration, indbreak);
            }
        } // end for
    return arr;
    }  // end else
} // end function

console.log(dayPlan(8, 5, 30));   // [30, 83, 30, 83, 30, 83, 30, 83, 30]
console.log(dayPlan(3, 5, 60));   // 'You're not sleeping tonight!'
console.log(dayPlan(2, 2, 60));   // [60, 0, 60]


// Alternate solution 

function dayPlanner(hours, tasks, duration) {
  var minutes = hours * 60;
  var outArray= [];
  
  if ((duration * tasks) > minutes) {
    return "You're not sleeping tonight!";
  } else {
      breakTime = Math.round((minutes-(tasks*duration))/(tasks -1));
    
    for (i = 0; i < tasks; i++) {
        outArray.push(duration);
        if (i < tasks-1){
            outArray.push(breakTime);
        }
    } // end for
    
    return outArray;  
  } // end else

} // end function

  
console.log(dayPlanner(8, 5, 30));   // [30, 83, 30, 83, 30, 83, 30, 83, 30]
console.log(dayPlanner(3, 5, 60));   // 'You're not sleeping tonight!'
console.log(dayPlanner(2, 2, 60));   // [60, 0, 60]            
        

// Blake's solution

function dayPlanning (hours, tasks, duration) {
  var remainingTime = (hours * 60) - (tasks * duration);
  var breakTime = Math.round(remainingTime / (tasks - 1));
  var arrayLength = tasks + (tasks - 1);
  var schedule = [];

  if (remainingTime < 0) {
    return 'You\'re not sleeping tonight!';
  }

  for (var i = 1; i <= arrayLength; i++) {
    if (i % 2 === 1) {
      schedule.push(duration);
    } else {
      schedule.push(breakTime);
    }
  }
  return schedule;
}

console.log(dayPlanning(8, 5, 30));   // [30, 83, 30, 83, 30, 83, 30, 83, 30]
console.log(dayPlanning(3, 5, 60));   // 'You're not sleeping tonight!'
console.log(dayPlanning(2, 2, 60));   // [60, 0, 60]            
