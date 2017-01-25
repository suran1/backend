//


var http = require('http');
var querystring  = require('querystring')   // to send as text - objects are not text

// sometimes people call this the host

// most of the time need host, path, method, headers
var baseURL = 'jsonplaceholder.typicode.com';
var httpOptions = {
  host: baseURL,
  path: '/posts/1',
  method: 'PUT'
};

var payload = {
  title: 'Test',
  body: 'This is a test',
  userId: 500
};

var update = {
    id: 101,
    title: 'foo',
    body: 'bar - yo! this is updated',
    userId: 500
};

var req = http.request(httpOptions, function(response) {
  response.setEncoding('utf-8');
  var body = '';
  //listener - streams inherit from the Event Emitter
  response.on('data', function(chunk) {
    body += chunk;
  });
  //listener
  response.on('end', function () {
    console.log(body);
  });
})

// write posts our data
req.write(querystring.stringify(update));
// request object is calling the end event;
req.end();
