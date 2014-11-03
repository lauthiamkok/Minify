// Filename: app.js
define([
    'jquery',
    'dep3'
    
], function($,dep3){
        
    var initialize = function(){
        
        console.log("dependency 2");
        dep3.initialize();
    };
    
    return {
        initialize: initialize
    };
});