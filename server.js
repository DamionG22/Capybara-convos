var express = require('express')
var app = express()
var http = require('http').createServer(app)
var io = require('socket.io')(http)
var count = 0;

io.on('connection', function (socket) {
    console.log('a user has joined');
    count++;
    io.emit('usercnt', count);
    socket.on('disconnect', function (socket) {
        console.log('a user has disconnected');
        count--;
        io.emit('usercnt', count);
    })
    socket.on('sendmsg', function (msg) {
        io.emit('sendmsg', msg);
    })
})



app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
})


http.listen(3001, function () {
    console.log('listening on 3001');
})