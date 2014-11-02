({
    paths: {
        jquery: 'jquery-min'
    },

    shim : {
        jquery: {
            exports: '$'
        }
    },

    baseUrl : "js/",
    name: "main",
    out: "dist/main.js",
    removeCombined: true
})