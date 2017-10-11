var http = require('http');

var PORT = 7000;

function handleRequest(request, response) {
    response.end(`You're a handsome human nice job. + ${response.url}`);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function() {

    console.log(`Server listneing on: http:localhost: + ${PORT} `)
});