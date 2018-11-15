let express = require('express');
let router = express.Router();
let Todo = require('../models/Todo');

module.exports = router;
router.all((req, res, next) => {
    console.log("request receive time: " + new Date().toDateString());
    next();
});

router.route('/create').post((req, res) => {
    let todo = new Todo(req.body);
    todo.save().then((todo) => {
        res.status(200).json({
            'message': 'todo successfully added'
        });
    }).catch((err) => {
        res.status(400).send("error when saving to database!")
    })
});

router.route('/todos').get((req, res) => {
    Todo.find((err, todos) => {
        if (err) {
            console.log(err);
        } else {
            res.json(todos);
        }
    });
});

router.route('/todos/:id').get((req, res) => {
    Todo.findById(req.params.id, (err, todo) => {
        res.json(todo);
    })
});

router.route('/todos/:id').put((req, res) => {
    Todo.findById(req.params.id, (err, todo) => {
        if (!todo) {
            return next(new Error('erro getting the todo!'));
        } else {
            todo.name = req.params.name;
            todo.save().then(todo => {
                res.json('todo updated successfully');
            })
                .catch(err => {
                    res.status(400).send('error when updating this todo')
                })
        }
    })
});

router.route('/todo/:id').get((req, res) => {
    Todo.findByIdAndRemove({_id: req.params.id}, (err, todo) => {
        if (err) res.json(err);
        else res.json('todo removed successfully!');
    })
});