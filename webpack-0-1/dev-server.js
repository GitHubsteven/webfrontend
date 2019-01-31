let webpack = require("webpack");
let config = require('./build/webpack.config');
webpack(config, (stats, err) => {
  if (err) throw err;
});