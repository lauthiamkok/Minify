GULP OPTIMISATION

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

This will create a node_modules folder within wamp/www where Gulp and plug-in code resides. Use Git Bash or CMD to navigate to wamp/www.

3. Install Gulp plugins via Command Prompt. Use these lines below in your CMD,
    $ npm install gulp-changed --save-dev
    $ npm install gulp-imagemin --save-dev
    $ npm install gulp-autoprefixer --save-dev
    $ npm install gulp-concat --save-dev
    $ npm install gulp-minify-css --save-dev
    $ npm install gulp-minify-html --save-dev
    $ npm install gulp-strip-debug --save-dev
    $ npm install gulp-uglify --save-dev
    $ npm install gulp-less --save-dev
    $ npm install gulp-browserify --save-dev (If you do not want to use requirejs, browserify is a good alternative for bundling up all of your dependencies.)

4. Create an empty gulpfile.js configuration file within the project folder. e.g. wamp/www/projectA/. This gulpfile.js is used to define our tasks. (This step is done by default already)

5. Move all your CSS files (accept tinymce.css) into source/ (do the same for images). Then run this keyword only in your Command Prompt,
    $ gulp