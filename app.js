var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* task2.1 */
var requestCount = 0;
app.use(function(req, res, next) {
    requestCount++;
    console.log(`Received ${requestCount} requests`);
    next();
});

/* task2.2 */
app.post('/users', function(req, res, next) {
    console.log("POST from a user");
    next();
});

app.post('/users/*', function(req, res, next) {
    console.log("POST from a user");
    next();
});

/* task2.3 */
app.post('/users', function(req, res, next) {
    if (!req.is('application/json')) {
        res.status(412).send();
    }
    next();
});

app.post('/users/*', function(req, res, next) {
    if (!req.is('application/json')) {
        res.status(412).send();
    }
    next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
