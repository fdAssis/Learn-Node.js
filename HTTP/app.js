var http = require('http');

http.createServer((request, response) => {
  response.end("<h1> Hello Word! </h1>");
}).listen(8181);

console.log("Server is running...");