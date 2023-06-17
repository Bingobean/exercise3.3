var http = require("http");
PORT = 8008
http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end('Hello World - Konnichiwa  \n');
}).listen(PORT);

// Console will print the message
console.log(`Server running at port - ${PORT}`);