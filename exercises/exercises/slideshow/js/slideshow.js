$(function(){

    $("body").before($('#slideshow'));
    var i=0;
    $("#slideshow  li:gt(0)").hide();
    $("#slideshow").after('image total<input type="text" id="text1" disabled="disabled" >    image no<input type="text" id="text2" disabled="disabled" >')
    $("#text1").val($("#slideshow li").length)
    setInterval(function() { 
    $("#slideshow").height(350)
   
  $('#slideshow >li:eq(0)')
    .fadeIn(500)
    .delay(2000)
    .fadeOut(500)
    .next()
    .end()
    .appendTo('#slideshow');
     $("#text2").val((i% $("#text1").val())+1)
     i=i+1;
    
},  3000);



});
   
