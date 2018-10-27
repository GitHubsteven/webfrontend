var express = require('express');
var router = express.Router();
var crypto = require('crypto');
module.exports = router;
router.use(function timelog(req, res, next) {
    console.log('time:', Date.now());
    next();
});

router.get("/", function (req, res) {
    res.render('index', {title: '首页'})
});

router.get("/reg", function (req, res) {
    res.render('reg', {
        title: '用户注册'
    });
});

router.post('/reg', function (req, res) {
    if (req.body['password-repeat'] !== req.body['password']) {
        req.flash('error', 'two passwords are not the same!');
        return res.redirect('/reg');
    }

    var md5 = crypto.createHash('md5');
    var password = md5.update(req.body.password).digest('base64');

    var newUser = new User({
        name: req.body.username,
        password: password
    });

    User.get(newUser.name, function (err, user) {
        if (err) {
            req.flash("error", err);
            return res.redirect('/reg');
        }
        req.session.user = newUser;
        req.flash('success', "reg succeed")
        res.redirect('/');
    })
});




