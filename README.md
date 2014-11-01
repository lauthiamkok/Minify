Minify
======

Minify Demos

These are minify test examples for future references.

1. Install node.js. Then navigate to the root folder (where all your projects are kept) from the command line, e.g. 
    $ cd wamp\www

Once installed, open a command prompt and enter:
    $ node -v

The installed Node.js version number will be displayed. You can do the same for npm — the Node.js package manager which is used to install modules.
    $ npm -v

2. Install Gulp via Command Prompt, using npm. Make sure to add a -g flag to ensure Gulp is available globally for any project. Run this line below to install,
    $ npm install gulp -g

3. Then we must install Gulp locally,
    $ npm install gulp --save-dev

This will create a node_modules folder within wamp/www where Gulp and plug-in code resides. 

3. Install Gulp plugins via Command Prompt. Use these lines below in your CMD,
    $ npm install gulp-changed --save-dev
    $ npm install gulp-imagemin --save-dev
    $ npm install gulp-autoprefixer --save-dev
    $ npm install gulp-concat --save-dev
    $ npm install gulp-minify-css --save-dev
    $ npm install gulp-minify-html --save-dev
    $ npm install gulp-strip-debug --save-dev
    $ npm install gulp-uglify --save-dev
    $ npm install gulp-browserify --save-dev (If you do not want to use requirejs, browserify is a good alternative for bundling up all of your dependencies.)

4. Create an empty gulpfile.js configuration file within the project folder. e.g. wamp/www/projectA/. This gulpfile.js is used to define our tasks.

BROWSERIFY (REQUIREJS ALTERNATIVE)

1. You need to optimise the js before you can browserify's minified js on your project. 

2. Install,
    $ npm install gulp-browserify --save-dev 
    $ npm install vinyl-source-stream --save-dev 
    $ npm install vinyl-buffer --save-dev 

3. Usage example: create a gulpfile.js in your project with this code below,

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

3. Run this line in your CMD,
    $ gulp

4. Add this link to your HTML head,
    <script src="bundle.js"></script>

That's it!

BOWER (REQUIREJS OPTIMISATION)

References: 
http://code.tutsplus.com/tutorials/a-requirejs-backbone-and-bower-starter-template--net-29211?post_id=10153274953588012_10153274953578012#_=_
https://www.youtube.com/watch?v=USk1ie30z5k&list=UUd-EhXGbXSozuzsAAdPIn3A

1. Install RequireJS.
    $ npm install requirejs

2. Next, we need an easy way to deal with dependency management. We'll use Bower,
    $ npm install bower

3. Let's now install the dependencies for this project. I'm assuming that we're building a Backbone project, so I've listed RequireJS, jQuery, Underscore, and Backbone as dependencies.
    $ bower install

Note that you need a .bowerrc in your project root, which contains,

    {
      "directory": "app/scripts/vendor"
    }

Then you need a bower.json or a component.json, which contains,

    {
      "name": "RequireJS Starter",
      "version": "1.0.0",
      "dependencies": {
        "requirejs": "latest",
        "jquery": "latest",
        "backbone-amd": "latest",
        "underscore-amd": "latest"
      }
    }

Then in app/build/ you need a app.build.js, which contains,

    ({
      appDir: "../",
      baseUrl: "scripts",
      dir: "../../dist",
      name: 'main',
      mainConfigFile: '../scripts/main.js',
      optimizeCss: 'standard'
    })

and a build.sh, which contains, 

    r.js -o app/build/app.build.js
    cd dist
    mv scripts/vendor/requirejs/require.js require.js
    rm -rf scripts/vendor/* build scripts/views scripts/models scripts/collections build.txt
    mkdir scripts/vendor/requirejs && mv require.js scripts/vendor/requirejs/require.js
    mv css/style.css style.css && rm -rf css/* && mv style.css css/style.css

Note that you need to use (for Windows users),
    r.js.cmd -o app/build/app.build.js

Instead of
    r.js -o app/build/app.build.js

4. When ready to build the project, run the line below on Git Bash (note that not on Windows CMD):
    $ app/build/build.sh 

Launch Git Bash, type this line to navigate to your project,
    cd /c/wamp/www/your/project/path/

Then type the Bash Script above to build the project,
    $ app/build/build.sh 

Note that you can perform these steps of command lines in Git Bash completely.
