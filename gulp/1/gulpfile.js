var browserify = require('browserify');
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

gulp.task('browserify', function() {
  return browserify('./src/js/index.js')
    .bundle()
    .pipe(source('bundle.js')) // gives streaming vinyl file object
    .pipe(buffer()) // <----- convert from streaming to buffered vinyl file object
    .pipe(uglify()) // now gulp-uglify works 
    .pipe(gulp.dest('./build/scripts'));
});

gulp.task('browserify1', function() {
  return browserify('./src/js/main.js')
    .bundle()
    .pipe(source('main.js')) // gives streaming vinyl file object
    .pipe(buffer()) // <----- convert from streaming to buffered vinyl file object
    .pipe(uglify()) // now gulp-uglify works 
    .pipe(gulp.dest('./build/scripts'));
});

gulp.task('default', ['browserify','browserify1'], function() {
    /*
    // watch for HTML changes
    gulp.watch('src/*.html', function() {
        gulp.run('htmlpage');
    });
    
    // watch for JS changes
    gulp.watch('src/js/*.js', function() {
        gulp.run('scripts');
    });
 
    // watch for CSS changes
    gulp.watch('src/css/*.css', function() {
        gulp.run('styles');
    });
    */
});