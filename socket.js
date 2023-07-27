module.exports = function (io) {
    var count = 0;
    io.on('connection', function (socket) {
        console.log('a user has joined');
        count++;
        io.emit('usercnt', count);
        socket.on('disconnect', function () {
            console.log('a user has disconnected');
            count--;
            io.emit('usercnt', count);
        })
        socket.on('sendmsg', function (msg) {
            io.emit('sendmsg', msg);
        })
    })
}