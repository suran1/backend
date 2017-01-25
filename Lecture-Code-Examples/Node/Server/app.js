// creating a server 1/23/2017

var http = require('http');


http.createServer(function(request, response) {  //request and response are OBJECTS - not functions... the anonymous
                                                  // function that they are parameters of is a callback function
  console.log('RECEIVED REQUEST...');
  //console.log(request.headers);
  //console.log(request);

  var responseHeaders = {
     //'Content-Type' : 'text/plain'  //written in JSON format because header name has a dash

                                      // (not a valid JS name)

    'Content-Type' : 'application/json'
  };

  //servers usually send back a JSON object
  // this is just a JS object
  var jsonObject = {
    one : 'This is a property on my response',
    two: 'This is another response on my property'
  };

  response.writeHead(200, responseHeaders);
  //response.end('This is a response from my web server\n');
  response.end(JSON.stringify(jsonObject));   // have to convert object to JSON object - this is a JS function


}).listen(5000, '127.0.0.1'); // include the port to listen to and the host
                              // addresss
