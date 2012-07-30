$(function(){
   var i=0;
   $("li a").live('click', function() {
    var x=$(this).attr("href");
    $(this).attr("href",x+"?"+$(this).parent().attr("id"))
    });
   
   $("#main li").each(function() {
      if($(this).children("ul").length==0) {
         $(	this).attr("id",i);
         i++;
      }
    });
    
});
