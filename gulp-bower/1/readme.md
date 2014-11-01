BOWER

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
