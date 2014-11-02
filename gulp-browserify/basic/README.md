BROWSERIFY (REQUIREJS ALTERNATIVE)

1. You need to optimise the js before you can browserify's minified js on your project.

2. Install Browserify locally,
    $ npm install browserify -save-dev

3. Install jQuery locally - your project depends on it,
     $ npm install jquery -save-dev

4. Install other plugins to work with Gulp,
    $ npm install gulp-browserify --save-dev 
    $ npm install vinyl-source-stream --save-dev 
    $ npm install vinyl-buffer --save-dev 

5. Usage example: create a gulpfile.js in your project with this code below,

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

    gulp.task('default', ['browserify'], function() {
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

In your js file that has the dependencies, e.g src/js/index.js,

    var square = require('./square');
    var $ = require('jquery');

    console.log(square(125)); //=> 15625

    $( document ).ready(function() {
        var item = $("#item_1").removeAttr( "style" );
        console.log(item.get(0).outerHTML);
    });

    $.fn.outerHTML = function() {
        return $($('<div></div>').html(this.clone())).html();
    };

6. Run this line in your CMD,
    $ gulp

7. Add this link to your HTML head,
    <script src="bundle.js"></script>

That's it!