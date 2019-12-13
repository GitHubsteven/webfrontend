let express = require('express');
let proxy = require('http-proxy-middleware');
let app = new express();
let TARGET_SERVER = "http://locahost:9010";

app.use('/',
  proxy({
    target: 'http://locahost:9010',
    changeOrigin: true,
    secure: false
  }));

app.use(express.static('dist'));
app.get('*', function (req, res) {
  res.sendFile('./dist/index.html');
});

app.listen(11000, function () {
  console.log('start localhost:11000 successfully!');
});