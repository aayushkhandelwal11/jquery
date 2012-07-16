$(function(){
  var i=1;
  $("button").live('click', function() {
 
    $(".maindivision").append("<div>"+ i +"</div>")
    i++;
});
  $(".maindivision div:last").live('click', function() {
 
   $(this).remove();
   i--;
});

    $(".maindivision div").live('click', function() {
 
   $(this).siblings().removeClass("click");
   $(this).addClass("click");
  
});
});
