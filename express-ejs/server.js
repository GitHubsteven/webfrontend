// let flash = require('express-flash'),
//     express = require('express'),
//     app = express(),
//     session = require('express-session'),
//     cookieParser = require('cookie-parser');
//
// app.use(cookieParser('keyboard cat'));
// app.use(session({
//     name: 'app.sid',
//     resave: true,
//     saveUninitialized: true,
//     secret:"ssss"
// }));
// app.use(flash());
// app.listen(3100);
//
// app.get('/', function (req, res) {
//     req.flash('info', 'Welcome');
//     res.render('index', {
//         title: 'Home'
//     })
// });
// app.get('/addFlash', function (req, res) {
//     req.flash('info', 'Flash Message Added');
//     res.redirect('/');
// });