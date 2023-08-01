var express = require('express');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

var app = express();
const PORT = process.env.PORT || 3001;

var socket = require('./socket');
var http = require('http').createServer(app);
var io = require('socket.io')(http);
io.attach(http);
socket(io);

// Set Handlebars as the default template engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static('public'));

http.listen(PORT, () => {
    console.log('listening on 3001');
})

