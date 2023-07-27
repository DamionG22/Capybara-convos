var express = require('express')
var app = express()
var socket = require('./socket')
var http = require('http').createServer(app)
var io = require('socket.io')(http)

io.attach(http)
socket(io);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
})

http.listen(3001, function () {
    console.log('listening on 3001');
})

