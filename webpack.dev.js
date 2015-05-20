var webpack = require('webpack');

var config = require('./webpack.config');

config.devtool = 'eval';
config.devServer = {
  hot: true
}

config.entry.app = [
  "webpack-dev-server/client?http://localhost:8080",
  "webpack/hot/only-dev-server",
].concat(config.entry.app);

delete config.module.loaders[0].loader
config.module.loaders[0].loaders = ['react-hot', 'jsx?harmony'];

config.plugins.push( new webpack.HotModuleReplacementPlugin() );
config.plugins.push( new webpack.NoErrorsPlugin() );

module.exports = config;
