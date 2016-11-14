/* 

Dan, president of a large company, could use your help. He wants to implement a system that will switch all his devices into offline mode depending on his meeting schedule. When he's at a meeting and somebody texts him, he wants to send an automatic message informing him that he's currently unavailable and the time when he's going to be back.

Your task is to write a helper function checkAvailability that will take 2 arguments:

schedule, which is going to be a nested array with Dan's schedule for a given day. Inside arrays will consist of 2 elements - start and finish time of a given appointment.

currentTime - is a string with specific time in hh:mm 24-h format for which the function will check availability based on the schedule.

If no appointments are scheduled for currentTime, the function should return true. If there are no appointments for the day, the output should also be true. If Dan is in the middle of an appointment at currentTime, the function should return a string with the time he's going to be available.

*/


//the hard way first...
function checkAvailability (schedule, currentTime) {
    var availability = true;        

    
    //console.log(schedule, currentTime);
    
    if (schedule.length !== 0) {  
        
        var curTime = convertToInt(currentTime);
        var schedArr = convertToInt(schedule);
        availability = compareTimeAvailable(schedArr, curTime);    
    }
    return availability;
} 


function convertToInt (time) {
    var intArr = [];
    
    if (typeof time === 'string') {
        time = convertTimeReq(time);
    } else {
        time = convertSchedule(time);
    }
    return time;
} 


function convertTimeReq (timeReq) {
    
    var time = timeReq.split(':').join('');
    time = parseInt(time, 10);
    
    return time;
} 

function convertSchedule (appointments) {
    
    finalArr = [];
    
    for (var i = 0; i < appointments.length; i++) {
        for (j = 0; j < appointments[i].length; j++) { 
            var check = appointments[i][j];
            appointments[i][j] = convertTimeReq(check);
            finalArr.push(appointments[i][j]);  
        }   
    }  
    
    return finalArr;
} 

/* Not used - but could be depending on how much you love Uncle Bob
function convertToFlat (app) {
    var finalArr = [];
    var flat = finalArr.concat.apply(finalArr, app);
    console.log(flat);
}
*/

function compareTimeAvailable (sched, requested){
    var format = 0;
    var free = -1;
    
    if ((requested < sched[0]) || (requested > sched[sched.length-1]) || (sched.indexOf(requested) % 2) === 1) {
        free = true;    
        
    } else if ((sched.indexOf(requested) % 2) === 0) {
        format = sched[sched.indexOf(requested) + 1];
        free = formatTime(format);
        
    } else {
        var checkArr = injectAndSort(sched, requested);
            
        if (checkArr.indexOf(requested) % 2 === 0) {
            free = true;
        } else {
             format = checkArr[checkArr.indexOf(requested) + 1]
             free = formatTime(format); 
        }
    }
    
    return free;
}   

// injects the requested time into the schedule array and sorts it, returning a new array
function injectAndSort(arr, num) {
    
    var finalArr = arr;
    finalArr.push(num);          // inject time in array
    
    finalArr.sort(function(a,b) {
           return a - b; 
    });
    
    return finalArr;
}

function formatTime (num) {
    
    var format = num.toString().split('');
    
    if (format.length % 2 == 0) {
        format.splice(2, 0, ':');
    } else {
        format.splice(1, 0, ':');
    }
    
    return format.join('');;
}


console.log(checkAvailability([['09:30', '10:15'], ['12:20', '15:50']], '11:00'));   // true
console.log(checkAvailability([['09:30', '10:15'], ['12:20', '15:50']], '10:00'));   // '10:15'
console.log(checkAvailability([['09:30', '10:15'], ['12:20', '15:50']], '13:24'));   // '15:50'
console.log(checkAvailability([], '8:30'));   // true
console.log(checkAvailability([['08:30', '09:15'], ['12:20', '15:50']], '09:00'));   // '10:15'


// the easy (easier) way:

function checkAvail (schedule, currentTime) {
    var availability = true;   
    var flatSchedule = [];
    var testScedule = [];
    
    //console.log(schedule, currentTime);
    
    if (schedule.length !== 0) {  
        
        var curTime = convertTimeReq(currentTime);
        var schedArr = flatSchedule.concat.apply(flatSchedule, schedule) ;
        for (var i = 0; i < schedArr.length; i++) {
            testScedule.push(convertTimeReq(schedArr[i]));
        }
        
        availability = compareTimeAvailable(testScedule, curTime);    
    }
    return availability;
} 


console.log('\nEasier way - flatten schedule array via concat.apply')
console.log(checkAvail([['09:30', '10:15'], ['12:20', '15:50']], '11:00'));   // true
console.log(checkAvail([['09:30', '10:15'], ['12:20', '15:50']], '10:00'));   // '10:15'
console.log(checkAvail([['09:30', '10:15'], ['12:20', '15:50']], '13:24'));   // '15:50'
console.log(checkAvail([], '8:30'));   // true
console.log(checkAvail([['08:30', '09:15'], ['12:20', '15:50']], '09:00'));   // '10:15'