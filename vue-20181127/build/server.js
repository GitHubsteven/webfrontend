// 引入模块
let express = require('express');
let webpack = require('webpack');
let config = require('./webpack.dev.conf');

//创建一个express后台实例
let app = new express();
//调用webpack并且传递配置
let compiler = webpack(config);
//使用webpack-dev-middleware中间件
var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
});

app.use(devMiddleware);

// 使用 webpack-hot-middleware 中间件
var hotMiddleware = require('webpack-hot-middleware')(compiler)
// 注册中间件
app.use(hotMiddleware);

// webpack插件，监听html文件改变事件
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    //发布事件
    hotMiddleware.publish({action: 'reload'});
    cb();
  })
});

let PORT = 8888;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:8888')
});
