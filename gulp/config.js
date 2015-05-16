var dest = './build';
var src = './app';

module.exports = {
  browserSync: {
    server: {
      // We're serving the src folder as well
      // for sass sourcemap linking
      baseDir: [dest, src]
    },
    files: [
      dest + '/**'
    ]
  },
  markup: {
    src: src + "/*.html",
    dest: dest
  },
  browserify: {
    // Enable source maps
    debug: true,
    extensions: [ '.jsx' ],
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + '/js/app.jsx',
      dest: dest,
      outputName: 'js/app.js'
    }]
  },
  uglify: {
    src: dest + '/*.js',
    dest: dest
  }
};
