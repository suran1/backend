var express = require('express');  //install express in individual project folders because not every project uses it
                                   // to install in a folder type this command:
                                   //    npm init -y && npm install express --save

var app = express();               // attaches all the express fucntionality to the app variable


//This sends a response to a request to the root ('/')
app.get('/', function(request, response) {  // enter the route (path) - can also receive a Regular expression
  response.send('Hello from my first Express app\n');
});


//listen to a connection on port 3000  - you don't need the function but it's good to have a
// a message to know that it's running
// defaults to local host, so you dont
app.listen(3000, function() {
  console.log('Server listening on port 3000...')
})

// could also write:
//  app.listen(3000);
