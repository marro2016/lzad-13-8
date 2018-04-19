var http = require('http'),
    fs = require('fs');

var server = http.createServer();

server.on('request', function(request, response) {
  response.setHeader('Content-Type', 'text/html');
  if (request.method === 'GET' && request.url === '/') {
    fs.readFile('./index.html', function(err, data) {
      if (err) throw err;
      console.log('Connected');
      response.write(data);
      response.end();
    });
  } else {
    response.setHeader('Content-Type', 'image/jpeg');
    response.statusCode = 404;
    fs.readFile('./404.jpeg',function(err, data) {
      if (err) throw err;
      console.log('Wrong path');
      response.write(data);
      response.end();
    });
  }
});

server.listen(8080);
