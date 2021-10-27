const { fstat } = require('fs')
const http= require('http');
const port = 3000
console.log(`Your port is ${process.env.PORT}`); // undefined
const dotenv = require('dotenv');
dotenv.config();

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('chat server started');
    res.end();
}).listen(process.env.PORT);

console.log(`Your port is ${process.env.PORT}`);
