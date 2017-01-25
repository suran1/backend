var http = require('http');
var fs = require('fs');
var url = require('url');  // for query parameters

http.createServer(function(request, response) {  //request and response are OBJECTS - not functions... the anonymous
                                                  // function that they are parameters of is a callback function
  var path = request.url;
  var method = request.method;

  if (path === '/'){
    response.writeHead(200, {
      'Content-Type' : 'text/plain'
    });
    response.end('ROOT ENDPOINT\n');
  } else if (path === '/person' && method === 'GET') {

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

} else if (path === '/person' && method === 'POST') {
    var body = '';
    // POST has a body -- read it into chunks
    request.on('data', function(chunk) {
      body += chunk;
    });

    request.on('end', function () {
        var jsonBody = JSON.parse(body);   // we decided is accepting json

        // to test the next lines, put this in a separate terminal window from the server:
        // curl -i -X POST -H 'Content-Type: application/json' -d '{"firstname" : "Sara"}' localhost:5000/person
        // (note that -i will print out headers, and -X means we are making a request)
        // or
        // curl -X POST -H 'Content-Type: application/json' -d '{"firstname" : "Sara"}' localhost:5000/person
        response.writeHead(200);
        response.end('YOU CREATED A NEW USER: ' + jsonBody.firstname + ' \n');
    });
} else if (path === '/lorem') {
  // create a readStream and pip results to response object
  fs.createReadStream(__dirname + '/lorem.txt').pipe(response);
} else {

    response.writeHead(404);
    response.end();
}


}).listen(5000, '127.0.0.1'); // include the port to listen to and the host
                              // addresss
