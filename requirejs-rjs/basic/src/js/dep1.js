// Filename: app.js
define([
    'jquery'
    
], function($){
        
    var initialize = function(){
        
        console.log("dependency 1");
    };
    
    return {
        initialize: initialize
    };
});