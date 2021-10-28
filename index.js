/*const { fstat } = require('fs')
const http= require('http');
console.log(`Your port is ${process.env.PORT}`); /

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('chat server started');
    res.end();
}).listen(process.env.PORT);

console.log(`Your port is ${process.env.PORT}`);*/
//express//

const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
app.listen(process.env.PORT, function(){
    console.log(`server started on port ${process.env.PORT} `)
})
