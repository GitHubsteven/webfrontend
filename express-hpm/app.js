let express = require('express');
let proxy = require('http-proxy-middleware');
let app = new express();
let TARGET_SERVER = "http://locahost:8080";

app.use('/api', proxy({
  target: TARGET_SERVER,
  changeOrigin: true,
  pathRewrite: {
    '^/api': ''
  }
}));

app.use(express.static('dist'));
app.get('*', function (req, res) {
  res.sendFile('./dist/index.html');
});

app.listen(80, function () {
  console.log('链接成功');
});