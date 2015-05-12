var gulp   = require('gulp');
var uglify = require('gulp-uglify');
var config = require('../config').uglify;

gulp.task('uglify', ['browserify'], function(callback) {
  return gulp.src(config.src)
    .pipe(uglify())
    .pipe(gulp.dest(config.dest));
});
