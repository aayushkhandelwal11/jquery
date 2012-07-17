$(function(){
  var i=1;
  $("body").delegate('button','click', function() {
 
    $(".maindivision").append("<div>"+ i +"</div>")
    i++;
});
  $(".maindivision").delegate('div:last','click', function() {
 
   $(this).remove();
   i--;
});

    $(".maindivision").delegate("div",'click', function() {
 
   $(this).siblings().removeClass("click");
   $(this).addClass("click");
  
});
});
