# CSS CONCAT OPTIMISATION

1. You need @import url( "..." ); to concat CSS files.

2. Create a main.css, and in it,

    ```
    /* Base styles. */
    @import url( "orange.css" );

    /* Layout styles. */
    @import url( "blue.css" );
    ```

3. Create a build.css.js, in it,

    ```
    ({
        cssIn: '../src/css/main.css',
        out: '../src/css/styles.css',
        optimizeCss: 'standard'
    })
    ```

4. Create a build.sh, in it,

    `r.js -o build/build.css.js`

5. Run the Bash script in your Git Bash,
    
    `build\build.sh`
