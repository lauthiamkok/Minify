var gulp = require('gulp');
var amdOptimize = require('gulp-amd-optimizer');
var concat = require('gulp-concat-sourcemap');

var requireConfig = {
  baseUrl : "js/",
  paths: {
        jquery: 'jquery-min'
    },

    shim : {
        jquery: {
            exports: '$'
        }
    }
};

var options = {
  umd: false
};

gulp.task('default', function () {
  return gulp.src('src/js/*.js', {base: requireConfig.baseUrl})
    .pipe(amdOptimize(requireConfig, options))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('src/dist/'));
});