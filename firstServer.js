var http = require('http');

http.createServer(function (req, res){
    res.writeHead(200, {'Contet-Type': 'text/html'});
    res.end('<b>Hello World!</b>');
}).listen(8080);