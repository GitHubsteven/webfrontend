var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressLayouts = require('express-ejs-layouts');
var routes = require('./routes/routes');
var app = express();
var expressSession = require('express-session');
var MongoStore = require('connect-mongo')(expressSession);
var settings = require('./settings');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(expressLayouts);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressSession({
    name: 'app.sid',
    resave: true,
    saveUninitialized: true,
    secret: settings.cookieSecret,
    store: new MongoStore({
        host: settings.host,
        port: settings.default_port,
        db: settings.db,
        url: settings.url
    })
}));
//set router set file
app.use(routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
