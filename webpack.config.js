module.exports = {
  entry: [
    "./app/js/app.jsx"
  ],
  output: {
    path: "./build/js",
    filename: "[name].js"
  },
  module: {
    loaders: [
      { test: /\.jsx?$/,                   loader: 'babel' },
      { test: /\.json$/,                   loader: 'json'  },

      { test: /\.css$/,                    loader: 'style!css' },
      { test: /\.less$/,                   loader: 'style!css!less' },

      { test: /\.(png|jpg|jpeg|gif|svg)$/, loader: 'url-loader?limit=10000' },
      { test: /\.(woff|woff2)$/,           loader: 'url-loader?limit=100000' },
      { test: /\.(ttf|eot)$/,              loader: 'file-loader' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
