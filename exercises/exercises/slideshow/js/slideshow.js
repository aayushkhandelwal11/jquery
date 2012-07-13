$(function(){

    $("body").before($('#slideshow'));
 
 $("#slideshow  li:gt(0)").hide();
    
   
    setInterval(function() { 
    $("#slideshow").height(350)
   
  $('#slideshow >li:eq(0)')
    .fadeIn(500)
    .delay(2000)
    .fadeOut(500)
    .next()
    .end()
    .appendTo('#slideshow');
},  3000);



});
   
