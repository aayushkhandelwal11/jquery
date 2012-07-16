$(function(){
  
  $('li').each(function(idx,el) {
       if($(this).children("ul").length==0)
       {
      $(this).data("href",$(this).children('a').attr('href'));
        }
        else
        {
        $(this).data("href","nan");
        }
   

});

   $('li').click(function(){
    if($(this).data("href")!="nan")
     $(".right").load( $(this).data("href"))
      return false; 
   });
});
