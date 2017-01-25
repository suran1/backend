//Node.js http module returns a Client Request
var http = require('http');

// sometimes people call this the host

// most of the time need host, path, method, headers
var baseURL = 'jsonplaceholder.typicode.com';
var httpOptions = {
  host: baseURL,
  path: '/posts'
};

// http.get uses a callback
// this first functin returns a writeable stream
http.get(httpOptions, function(response) {
  response.setEncoding('utf-8');
  var body = '';
  // invoke the listener - includes a callback from the Event Emitter
  response.on('data', function(chunk){
    console.log('DATA RECEIVED');
    body += chunk;
  });

  // invoke listener for an 'end' event
  response.on('end', function(){
    console.log(body);
  });
});
