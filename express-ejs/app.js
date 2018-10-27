let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let expressLayouts = require('express-ejs-layouts');
let routes = require('./routes/routes');
let app = express();
let expressSession = require('express-session');
let MongoStore = require('connect-mongo')(expressSession);
let settings = require('./settings');
let flash = require("express-flash-messages");

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
app.use(flash());
//set router set file
app.use(routes);

app.get('/addFlash', function (req, res) {
    req.flash('info', 'Flash Message Added');
    // res.redirect('/');
});

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

// app.user({
//     user: function (req, res) {
//         return req.session.user;
//     },
//     error: function (req, res) {
//         let err = req.flash('err');
//         if (err.length) {
//             return err;
//         } else {
//             return null;
//         }
//     },
//     success: function (req, res) {
//         let succ = req.flash('success');
//         if (succ.length) {
//             return succ;
//         } else {
//             return null;
//         }
//     }
// });

app.use(function (req, res, next) {
    res.locals.user = req.session.user;
    res.locals.error = function (req, res) {
        let err = req.flash('err');
        if (err.length) {
            return err;
        } else {
            return null;
        }
    };
    res.locals.success = function (req, res) {
        let succ = req.flash('success');
        if (succ.length) {
            return succ;
        } else {
            return null;
        }
    }
});


module.exports = app;
