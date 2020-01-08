let express = require('express');
let proxy = require('http-proxy-middleware');
let app = new express();
let TARGET_SERVER = "http://127.0.0.1:9010";

app.use('/api', proxy({
  target: TARGET_SERVER,
  changeOrigin: true,
  pathRewrite: {
    '^/api': ''
  },
  router: {
    'api/comments': 'http://127.0.0.1:9200'
  }
}));

app.use(express.static('dist'));
app.get('*', function (req, res) {
  res.sendFile('./dist/index.html');
});

app.listen(9020, function () {
  console.log('connect to http://localhost:9020 successfully!');
});