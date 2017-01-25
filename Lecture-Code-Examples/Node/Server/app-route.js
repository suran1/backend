// creating a server 1/23/2017

var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {  //request and response are OBJECTS - not functions... the anonymous
                                                  // function that they are parameters of is a callback function
  var path = request.url;

  if (path === '/person') {

    var responseHeaders = {
     //'Content-Type' : 'text/plain'  //written in JSON format because header name has a dash

                                      // (not a valid JS name)

    'Content-Type' : 'application/json'
  };

  //servers usually send back a JSON object
  // this is just a JS object
  var personObject = {
    firstname : 'John',
    lastname: 'Smith',
    age : 35
  };

  response.end(JSON.stringify(personObject));
} // end if


if (path === '/lorem') {
  // create a readStream and pip results to response object
  fs.createReadStream(__dirname + '/lorem.txt').pipe(response);
} else {
  var responseHeaders = {
    'Content-Type' : 'text/plain'
  };

  response.writeHead(200, responseHeaders);
  //response.end('This is a response from my web server\n');
  response.end('This is a response from my web server\n');   // have to convert object to JSON object - this is a JS function
}

}).listen(5000, '127.0.0.1'); // include the port to listen to and the host
                              // addresss
