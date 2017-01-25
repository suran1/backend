var http = require('http');
var fs = require('fs');
var url = require('url');  // for query parameters

http.createServer(function(request, response) {  //request and response are OBJECTS - not functions... the anonymous
                                                  // function that they are parameters of is a callback function
  var path = request.url;

  if (path === '/'){
    response.writeHead(200, {
      'Content-Type' : 'text/plain'
    });
    response.end('ROOT ENDPOINT\n');
  } else if (path === '/person') {

    var responseHeaders = {
    'Content-Type' : 'application/json'
  };

  //servers usually send back a JSON object
  // this is just a JS object
  var personObject = {
    firstname : 'John',
    lastname: 'Smith',
    age : 35
  };

  response.writeHead(200, responseHeaders);
  response.end(JSON.stringify(personObject));
} // end if


if (path === '/lorem') {
  // create a readStream and pip results to response object
  fs.createReadStream(__dirname + '/lorem.txt').pipe(response);
} else {

    response.writeHead(404);
    response.end();
}


}).listen(5000, '127.0.0.1'); // include the port to listen to and the host
                              // addresss
