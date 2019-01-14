let path = require('path');
let webpack = require('webpack');
let nodeExternals = require('webpack-node-externals');
let HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    server: './server.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: "/",
    filename: "[name].js"
  },
  target: "node",
  node: {
    //need this when working with express, otherwise the build fails
    __dirname: false,
    __filename: false,
  },
  //need this to avoid error when working with express
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        // Transpiles ES6-8 into ES5
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        // Loads the javacript into html template provided.
        // Entry point is set below in HtmlWebPackPlugin in Plugins
        test: /\.html$/,
        use: [{loader: "html-loader"}]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./index.html",
      filename: './index.html',
      excludeChunks: ['server']
    })
  ]
}
