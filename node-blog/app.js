let express = require('express');
let app = express();
let mongoose = require('mongoose');
const mongourl = "mongodb://localhost:27017/node-blog";
mongoose.connect(mongourl);
let bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let postSchema = new mongoose.Schema({body: String});
let Post = mongoose.model('Post', postSchema);

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//routes
app.get('/', (req, res) => {
    Post.find({}, (err, posts) => {
        res.render('index', {posts: posts})
    });
});

app.post('/addpost', (req, res) => {
    let postData = new Post(req.body);
    postData.save().then(result => {
        res.redirect('/');
    }).catch(err => {
        res.status(400).send("unable to save data");
    });
});


app.listen(7100, () => {
    console.log("server listening on 7100");
});