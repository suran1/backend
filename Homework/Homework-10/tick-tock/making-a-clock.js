
/*
Exercise 5
1. Create new folder in all-together named tick-tock
2. Initialize the tick-tock folder as a git repository
3. Create new file named making-a-clock.js from the command line
4. Within this file, create a function that will log the current time to the console and
   continue logging the time every minute until the application has manually been terminated with Ctrl+C
    -- The time should be reported in the format: MM/DD/YYYY HH:MM
    -- This will require some Googling and research to accomplish
5. Commit and push all changes to a new GitHub repository from the command line

*/


//setTimeout will only return it once; intervalID is continuous
var timeOutID = setTimeout(function(){clock()});  // display current time
var intervalID = setInterval(function(){clock()}, 60000); //diplay time every minute




function clock () {

  var currentTime = new Date();

  var month = currentTime.getMonth();
  var day = currentTime.getDay();
  var year = currentTime.getFullYear();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();

  var finalTime = '';

  (function formatTime () {
    if (minutes < 10) {
     minutes = '0' + minutes;
    }

  	if (hours < 10) {
      hours = '0' + hours;
    }
    if (month < 10) {
      month = '0' + month;
    }

    if (day < 10) {
      day = '0' + day;
    }
    finalTime = month + '/' + day + '/' + year + ' ' + hours + ':' + minutes;
  })();


  console.log(finalTime);

}
