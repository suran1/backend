var http = require('http');

http.createServer(function(request, response) {
  if (request.url === '/') {
    response.writeHead(200);
    response.end('ROOT ENDPOINT');
  } else if (request.url === '/person') {
    var personObject = {
      firstname: 'James',
      lastname: 'Smith',
      age: 35
    };

    response.writeHead(200, {
      'Content-Type': 'application/json'
    });
    response.end(JSON.stringify(personObject));
  } else {
    response.writeHead(404);
    response.end();
  }
}).listen(5000, '127.0.0.1');
