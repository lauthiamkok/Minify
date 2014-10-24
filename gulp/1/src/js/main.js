var $ = require('jquery');

$( document ).ready(function() {
     var item = $("#item_1").removeAttr( "style" );
     
    console.log(item.get(0).outerHTML);
});
    
    
$.fn.outerHTML = function() {
    return $($('<div></div>').html(this.clone())).html();
};