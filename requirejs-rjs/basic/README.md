RJS OPTIMISATION

1. RequireJS optimiser as its own build system. So best to optimise all your RequireJS project with its own optimiser.

2. Install node.js. Then navigate to the root folder (where all your projects are kept) from the command line, e.g. 
    $ cd wamp\www

3. Install Requirejs,
    $ npm install requirejs -g

4. Create a build.js.

5. Run this line in Git Bash,
    $ r.js -o src/build.js  
or
    $ r.js.cmd -o src/build.js (for Windows CMD)

RJS + GULP OPTIMISATION

1. Install node.js. Then navigate to the root folder (where all your projects are kept) from the command line, e.g. 
    $ cd wamp\www

2. Install Gulp globally and locally.

3. Install Requirejs locally,
    $ npm install requirejs -save-dev

4. Create a gulpfile.js

5. Run this line in Git Bash,
    $ gulp

NOTE: RequireJS optimiser as its own build system above, incompatible with gulp. So don't use gulp with requirejs for now as the script in gulpfile.js does not work.