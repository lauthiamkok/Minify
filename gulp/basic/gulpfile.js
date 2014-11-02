// Be sure to include gulp at the top.
var gulp = require('gulp');

// Optimise HTML.
// Include plug-ins
var minifyHTML = require('gulp-minify-html'),
    changed = require('gulp-changed');
 
// Minify new or changed HTML pages
gulp.task('html', function() {
    var htmlDst = 'build';
 
    gulp.src([
        'src/*.html',
        'src/*.php'
    ])
    .pipe(changed(htmlDst))
    .pipe(minifyHTML())
    .pipe(gulp.dest(htmlDst));
});

// Optimise js.
// Include plug-ins
var concat = require('gulp-concat'),
    stripDebug = require('gulp-strip-debug');
    uglify = require('gulp-uglify');
 
// JS concat, strip debugging and minify
gulp.task('scripts', function() {
  gulp.src([
      'src/js/lib/*.js',
      'src/js/*.js'
    ])
    .pipe(concat('bundle.js'))
    //.pipe(stripDebug())
    .pipe(uglify())
    .pipe(gulp.dest('build/js/'));
});

// CSS concat, auto-prefix and minify.
// Include plug-ins
var autoprefix = require('gulp-autoprefixer'),
    minifyCss = require('gulp-minify-css');

gulp.task('styles', function() {
  gulp.src([
      'src/css/*.css'
    ])
    .pipe(concat('styles.css'))
    .pipe(autoprefix('last 2 versions'))
    .pipe(minifyCss())
    .pipe(gulp.dest('build/css/'));
});

// Run the task.
gulp.task('default', ['scripts','html','styles'], function() {
    
    // Tasks automation.
    // Using gulp.watch you can easily automate any tasks when files are modified. 
    // It is really convenient because you do not have to run single tasks by hand every time a file is modified, 
    // and therefore your code is always up to date.
    /*
    // watch for HTML changes
    gulp.watch('src/*.html', function() {
        gulp.run('html');
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