// creating a server 1/23/2017

var http = require('http');
var fs = require('fs');
var url = require('url');  // for query parameters

http.createServer(function(request, response) {  //request and response are OBJECTS - not functions... the anonymous
                                                  // function that they are parameters of is a callback function

  //http://localhost:5000/cat?name=Thorvald&color=black  // this is what we type in the browser (what front end)                                                
  var queryData = url.parse(request.url, true).query;  // send true to parse query  parameters
  console.log(queryData);
  response.writeHead(200);
  //response.end('This is a response from my web server\n');
  response.end();   // have to convert object to JSON object - this is a JS function


}).listen(5000, '127.0.0.1'); // include the port to listen to and the host
                              // addresss
