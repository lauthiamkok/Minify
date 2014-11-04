$( document ).ready(function() {
    var item = $(".blue");
    console.log('Hello from bundle.js');
    console.log(item.get(0).outerHTML);
});
    
    
$.fn.outerHTML = function() {
    return $($('<div></div>').html(this.clone())).html();
};