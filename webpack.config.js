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
      { test: /\.jsx?$/, loaders: ['babel'] },
      { test: /\.json$/, loaders: ['json']  }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
