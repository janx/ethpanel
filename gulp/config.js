var dest = './build';
var src = './src';

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
    src: src + '/less/main.less',
    watch: [
      src + '/less/**'
    ],
    dest: dest
  },
  markup: {
    src: src + "/www/**",
    dest: dest
  },
  fontIcons: {
    src: src + "/less/font-icons/**",
    dest: dest + '/font-icons'
  },
  browserify: {
    // Enable source maps
    debug: true,
    extensions: [ '.jsx' ],
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + '/app/app.jsx',
      dest: dest,
      outputName: 'app.js'
    }]
  },
  uglify: {
    src: dest + '/*.js',
    dest: dest
  }
};
