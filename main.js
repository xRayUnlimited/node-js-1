var http = require('http');
var fs = require('fs');
var server = http.createServer();


server.on('request',)( function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.readFile('index.html', function(err, content) {
    res.end(content)
  })
}).listen(8080);

console.log('Server running at http://localhost:8080')



// 1. read in a file 
// 2. print contents of file
// 3. do something else

// 1. read in a file
//     callback: print contnets of file
// 2. Do something else

//request / response