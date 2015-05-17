var bootstrapPackageJson = require('../node_modules/bootstrap/package.json');

var node_modules = './node_modules';
var src = './app';
var dest = './build';

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
  less: {
    src: [
      node_modules + '/bootstrap/' + bootstrapPackageJson.less,
      src + '/css/**/*.less'
    ],
    watch: [
      src + '/css/**/*.less'
    ],
    dest: dest + '/css'
  },
  markup: {
    src: src + "/*.html",
    dest: dest
  },
  fonts: {
    src: node_modules + '/bootstrap/fonts/**',
    dest: dest + '/fonts'
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
