var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: {
    app: [ "./app/js/app.jsx" ]
  },
  output: {
    path: path.join(__dirname, 'build', 'js'),
    filename: "[name].js"
  },
  module: {
    loaders: [
      { test: /\.jsx?$/,                   loaders: ['react-hot', 'jsx?harmony'], exclude: /node_modules/ },
      { test: /\.json$/,                   loader: 'json' },

      { test: /\.css$/,                    loader: 'style!css' },
      { test: /\.less$/,                   loader: 'style!css!less' },

      { test: /\.(png|jpg|jpeg|gif|svg)$/, loader: 'url-loader?limit=10000' },
      { test: /\.(woff|woff2)$/,           loader: 'url-loader?limit=100000' },
      { test: /\.(ttf|eot)$/,              loader: 'file-loader' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html',
      inject: true
    })
  ]
};
