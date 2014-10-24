// Require.js allows us to configure shortcut alias
// There usage will become more apparent further along in the tutorial.
require.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js',
    
    //except, if the module ID starts with 'app',
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a '.js' extension since
    //the paths config could be for a directory.
    paths: {
        jquery: 'jquery-min'
    },
    shim: {
        jquery: {
            exports: '$'
        }
     }
});

require([
    // Load our app module and pass it to our definition function
    'jquery',
    'dep1',
    'dep2'

], function($, dep1, dep2){
    
    $( document ).ready(function() {
        var item = $("#item_1").removeAttr( "style" );

       console.log(item.get(0).outerHTML);
       dep1.initialize();
       dep2.initialize();
   });


   $.fn.outerHTML = function() {
       return $($('<div></div>').html(this.clone())).html();
   };
    
});

