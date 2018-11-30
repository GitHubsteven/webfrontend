// “__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
module.exports = {
  entry: __dirname + "/app/main.js",
  output: {
    path: __dirname +"/public",
    filename: "bundle.js"
  },
  mode:'development',
  devtool: "eval-source-map",
  devServer: {
    contentBase: "./public",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true,//实时刷新
    port:8200 //设置端口
  }
}