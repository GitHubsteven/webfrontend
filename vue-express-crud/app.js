let express = require('express');
let app = express();
let path = require('path');
let bodyParser = require('body-parser');
let cors = require('cors');
let mongoose = require('mongoose');
let router = require('./route/routes');


mongoose.connect("mongodb://localhost:27017/vuenodedb").then(() => {
        console.log("connect successfully!")
    }, (err) => {
        console.log('error when connect to mongo db!' + err)
    }
);

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());
app.use(router);

let port = 4000;


app.listen(port, () => {
    console.log("server listen to :" + port);
});
