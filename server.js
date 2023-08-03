var express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const hbs = exphbs.create({});
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

var app = express();
const PORT = process.env.PORT || 3001;

const dbURL = process.env.capybara_convo_db;
console.log('Database URL:', dbURL);

//All sessions info
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };


//All the socket.io info
var socket = require('./socket');
var http = require('http').createServer(app);
var io = require('socket.io')(http);
io.attach(http);
socket(io);

// Set Handlebars as the default template engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('homepage');
})

http.listen(PORT, () => {
    console.log('listening on 3001');
})

