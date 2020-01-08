// “__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
let path = require('path');

module.exports = {
  entry: __dirname + "/app/main.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  mode: 'development',
  devtool: "eval-source-map",
  devServer: {
    contentBase: "./public",//本地服务器所加载的页面所在的目录
    inline: true,//实时刷新
    port: 8200, //设置端口
    after: function (app, server, compiler) {
      console.log("compiler.getName: " + compiler.getName)
    },
    before: function (app, server, compiler) {
      app.get('/some/path', function (req, res) {
        res.json({custom: 'response'})
      })
    },
    bonjour: true,
    clientLogLevel: 'silent',
    compress: true,
    disableHostCheck: true,
    lazy: true,
    fileName: 'bundle.js',
    headers: {'X-Custom-Foo': 'bar'},
    historyApiFallback: {
      rewrites: [
        {from: /^\/$/, to: '/views/landing.html'},
        {from: /^\/subpage/, to: '/views/subpage.html'},
        {from: /./, to: '/views/404.html'}
      ],
      disableDotRule: true,
      hot: true,
      hotOnly: true,
      http2: true,
      https: {
        key: fs.readFileSync('/path/to/server.key'),
        cert: fs.readFileSync('/path/to/server.crt'),
        ca: fs.readFileSync('/path/to/ca.pem'),
      },
      inline: false,
      mimeTypes: {'text/html': ['phtml']},
      noInfo: true,
      onListening: function (server) {
        let port = server.listeningApp.address().port;
        console.log('Listening on port:', port);
      },
      open: 'Google Chrome',
      openPage: ['/different/page1', '/different/page2'],
      overlay: {
        warnings: true,
        errors: true
      },
      useLocalIp: true,
      watchContentBase: true,
      watchOptions: {
        poll: true
      }
    }
  }
};