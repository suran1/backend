var http = require('http'); // to create web server
var fs = require('fs');  // for stream objects
var url = require('url'); // for query parameters
//var queryString = require('querystring'); // parses query string - not needed it 'true' included as 2nd param in url.parse


// createServer takes a callback as its argument
// The callback's arguments (the anonymous function) in turn
// takes two objects: a request object and a response object
http.createServer(function(request, response){
  var path = request.url;      // the url the request sends - this is a string
  var method = request.method; // the method the request is using - this is a string

  // web servers often return a JSON object
  // however, catObject is just a JavaScript object at this point

  //var getCheck = /\/cat.*/i;   - alternate method of creating reg expression
  var getCheck = new RegExp('\/cat.*', 'i');

  //root request
  if (path === '/') {
      response.writeHead(200, {
        'Content-Type' : 'text/plain'
      });
      response.end('ROOT ENDPOINT');


  } else if ((getCheck.test(path)) && (method === 'GET')) {
        var message = '';  // message to customize based on query string

        var catObject = {
          name : 'Gator',
          breed : 'maine coon mutt',
          sex : 'male',
          age : 'eternal'
        }

        var resultsObj = {};  // results of URL query parsing

        // What's happening next:
        // Create a URL object ('queryObject') by:
        // Use 'url.parse' - this expects a URL, so...
        //     -- request.url this is the url property of our request object
        //     -- true   - this means - 'parse the url' - if set to false, it won't parse the url
        //     -- .query  - this is method chaining; url.parse returns a url object, and
        //                .query is a property on that object.
        // queryObject is therefore set equal to the value of the .query property
        // queryObject, is, in fact, an object ****however, its prototype isn't Object.prototype
        // so it won't have certain methods such as "hasOwnProperty"

        var queryObject = url.parse(path,true).query;

        //Since queryObject is a special object from querystring module, its prototype doesn't
        // point to the Object prototype. Therefere, 'hasOwnProperty' isn't available. Instead
        // we use Object.keys, which is an array. If the length is 0, there are no properties
        // however, other objects could also have length zero (such as Date(), so we check the
        // constructor. queryObject constructor is undefined).
        if (Object.keys(queryObject).length === 0 && queryObject.constructor === undefined) {
          console.log('No query string');
          message = 'Your GET request provided no queries for specific data. Returning all data: \n';

          resultsObj = new Object(catObject); // put all data in new object, to preserve original cat object
          console.log(resultsObj);
        } else {
          message = 'Response to your GET query: \n';
          console.log(message);

          // exmaple test URLs (to be typed in the browser):
          // http://localhost:3000/cat?name=Gator&breed=Maine%20Coon%20mutt

          for (var prop in queryObject) {
            if (queryObject[prop] === catObject[prop]){  //cant's use hasOwnProperty
               resultsObj[prop] = queryObject[prop];
            } else {
              message = message +
               'Error: Malformed query, and/or 1 or more key/value pair(s) do(es) not exist\n' +
               'Returning valid matches only.\n';
            }
          }

        }


        // Metadata about the request - to be sent back as header information
        var responseHeaders = {
          'Content-Type' : 'application/json'
        };


        // Best practice return HTTP status code and header info
        response.writeHead(200,responseHeaders);
        response.end(message + JSON.stringify(resultsObj));



  } else if(path === '/cat' && method === 'POST') {
    // POST has a body -- read it into chunks
        var body = '';

        request.on('data', function(chunk) {
            body += chunk;
        });

        console.log('Response to your POST request...');

        request.on('end', function () {
            var jsonBody = JSON.parse(body);   // we decided to accept json - convert to JSON

            // to test the next lines, put this in a separate terminal window from the server:
            // curl -i -X POST -H 'Content-Type: application/json' -d '{"name" : "Punkin","breed" : "domestic short hair","sex" : "female", "age": 20}' localhost:3000/cat
            // (note that -i will print out headers, and -X means we are making a request)
            // or
            // curl -X POST -H 'Content-Type: application/json' -d '{"name" : "Punkin","breed" : "domestic short hair","sex" : "female", "age": 20}' localhost:3000/cat
            response.writeHead(200);
            response.end('POST request successful. New cat created:\n ' +
                JSON.stringify(jsonBody) + '\n');  //object is a JSON object - use stringify to convert to string to print to console
        });
  } else {
    // all other cases - '404' is the response (i.e., "not found")
    response.writeHead('404');
    response.end();
  }

}).listen(3000, '127.0.0.1');
