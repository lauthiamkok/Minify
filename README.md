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

4. Create an empty gulpfile.js configuration file within the project folder. e.g. wamp/www/projectA/. This is used to define our tasks. (This step is done by default already)

5. Move all your CSS files (accept tinymce.css) into source/ (do the same for images). Then run this keyword only in your Command Prompt $ gulp, to optimise them. 

6. Add the new CSS path in your HTML head to <link rel="stylesheet" media="screen" type="text/css" href="<?php echo BASE_URL.RP_LOCAL_STYLE_CSS;?>styles.css" /> and comment out the ones have been minified.

7. You can add more CSS files for minification, just open gulpfile.js and add the file's path in gulp.src([..]).

8. Do this the same for CSS files in Core, then use this link at the Core HTML head <link rel="stylesheet" media="screen" type="text/css" href="<?php echo BASE_URL.RP_CORE_STYLE_CSS;?>styles.css" />.

9. To optimise all your javascript files that rely on requirejs, please read the README in core/ and in local/. If you are not using requirejs for managing your js files, then you can minify them via gulp. Just edit gulpfile.js before running $ gulp in your Command Prompt.

OPTIMISATION (OTHER IMPORTANT NOTES)

1. Note that you don't need to type the $ in your CMD (but you see it in Git Bash as a default in every new line). In CMD, you just have to type the command line you need, e.g. in C:\Users\YourName>. So if you type cd..\..\ as in,
    C:\Users\YourName>cd..\..\

You will be navigating to,
    C:> (the root)

Then type 
    C:>cd wamp\www

You will end up at,
    C:\wamp\wwww\

Then you can start installing Gulp, etc.

2. Also, it is very important to make sure the node executable is in your User Variable PATH (if you're using Windows). Once added node to the path, you have to restart CMD (important to restart it!).

In case you needed to check your PATH you can view it by right clicking the Computer in File Explorer or from the security settings in Control Panel. Once there select Advanced System Settings. A dialog will open with the Advanced tab selected. At the bottom is a button, Environment Variables. Add this line after the list,
    ;C:\Program Files\nodejs; (note that you must add a ; before any additional stuff)

3. You also need this line for Bower (you need to install Git for running Bower),
    C:\Program Files (x86)\Git

Did you install Git correctly? According to the Bower site, you need to make sure you check the option,
    "Run Git from Windows Command Prompt".

Otherwise you may have this issue where Git was not found - "git is not installed or not in the PATH". If you have this issue, re-ran the installer for Git and changed the setting and then it worked.

Reference: http://stackoverflow.com/questions/19290899/git-is-not-installed-or-not-in-the-path

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
