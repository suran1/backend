//don't put routes in index.js ; instead create a folder for routes
var express = require('express');
var bodyParser = require('body-parser'); // needed for POST requests - have to install separately
                                         // used to be included as part of Express but not now
                                         // to install run: npm install body-parser --save
                                         // body-parser inspects the body portion of the POST request
                                         // and turn it into a format Express can regonize, like JSON format

var routes = require('./routes');  // folder works as long as there is an a file named 'index.js'

var app = express();               // attaches all the express fucntionality to the app variable
                                   // the server gets created at this point, among other things


app.use(bodyParser.json());        // app.use statements are processed in the order they are listed,
                                   // therefore, have to setup the body parser first, before we setup the routes
                                   // so that the routes can use the body parser

app.use('/', routes);              // when we start the server, this will grab all our routes and set them up for us

app.listen(3000, function() {
  console.log('Server listening on port 3000...')
})

// could also write:
//  app.listen(3000);
