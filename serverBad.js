var http = require('http');

var PORT = 7500;

function handleRequest(request, response) {
    response.end(`You suck human BOO! + ${response.url}`);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function() {

    console.log(`Server listneing on: http:localhost: + ${PORT} `);
});