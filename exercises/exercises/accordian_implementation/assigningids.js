$(function(){
   var i=0;
   $("#main li").each(function() {
      if($(this).children("ul").length==0) {
         $(	this).attr("id",i);
         i++;
      }
    });
});
