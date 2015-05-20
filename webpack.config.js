var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: [ "./app/js/app.jsx" ]
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: "js/[name].js"
  },
  module: {
    loaders: [
      { test: /\.jsx?$/,                   loader: 'jsx?harmony', exclude: /node_modules/ },
      { test: /\.json$/,                   loader: 'json' },

      { test: /\.css$/,                    loader: ExtractTextPlugin.extract('style', 'css') },
      { test: /\.less$/,                   loader: ExtractTextPlugin.extract('style', 'css!less') },

      { test: /\.(png|jpg|jpeg|gif)$/,     loader: 'url-loader?limit=10000&name=images/[name].[ext]' },
      { test: /\.(woff|woff2)$/,           loader: 'url-loader?limit=10000&name=fonts/[name].[ext]' },
      { test: /\.(ttf|eot|svg)$/,          loader: 'file-loader?name=fonts/[name].[ext]' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new ExtractTextPlugin("css/[name].css", {
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: './app/index.html',
      inject: true
    })
  ]
};
