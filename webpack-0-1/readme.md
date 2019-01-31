如果没有webpack.config.js的话，并不是不能运行webpack命令，如下代码：
```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack --mode development",
    "build": "webpack --mode production"
  },
```
但是不能没有src/index.js，这是默认的入口，因为这里没有设配置文件，没有配置入口文件。

出乎我的想象，我没想到node和express的web整合如此之简单，对于我这个菜鸟来说，真是意外之喜。
1. 在待创建的server.js中引入webpack，
```
let webpack = require("webpack");
let config = require('./build/webpack.config');
webpack(config, (stats, err) => {
  if (err) throw err;
});
```
2. 在server.js中引入配置 webpack.config.js
```
module.exports = {
  mode:'development'
};
```
3. 在package.json中添加运行脚本
```
"dev-start": "node dev-server.js"
```
最后执行：
```
npm run dev-start
```
虽然最后会出现些许问题，但是起码流程走通了。