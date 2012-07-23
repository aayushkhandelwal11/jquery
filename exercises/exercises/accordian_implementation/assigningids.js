$(function(){
   var i=0;
   var j=0;
   $("#main li").each(function() {
      if($(this).children("ul").length==0) {
         $(	this).attr("id",i);
         i++;
      }
    });
   $("#main ul").each(function() {
       $(	this).attr("id","ul"+j);
       j++;
   });
});
