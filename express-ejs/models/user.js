let mongodb = require('./db.js');

function User(user) {
    this.name = user.name;
    this.password = user.password;
}

module.exports = User;

User.prototype.save = function save(callback) {
    let user = {
        name: this.name,
        password: this.password
    };

    mongodb.open(function (err, db) {
        if (err) {
            return callback(err);
        }
        //read users collection
        db.collection('user', function (err, collection) {
            if (err) {
                mongodb.close();
                return callback(err);
            }
            collection.ensureIndex('name', {unique: true});
            //write to user doc
            collection.insert(user, {safe: true}, function (err, user) {
                mongodb.close();
                callback(err, user);
            });
        });
    });

    User.get = function (username, callback) {
        mongodb.open(function (err, db) {
            if (err) {
                return callback(err);
            }
            //read users collections
            db.collection('users', function (err, collection) {
                if (err) {
                    mongodb.close();
                    return callback(err);
                }
                //find the doc with att named username
                collection.findOne({name: username}, function (err, doc) {
                    mongodb.close();
                    if (doc) {
                        let user = new User(doc);
                        callback(err, user);
                    } else {
                        callback(err, null);
                    }
                })
            })
        })
    }
};