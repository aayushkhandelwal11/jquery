$(function(){
 
  $('.excerpt').prev().each(function(idx,el) {
       
      $(this).after("<div id=division"+idx+"></div>");
      $(this).data("divid","division"+idx);
      $(this).data("href",$(this).children('a').attr('href'));
      $(this).text($(this).children("a:first").text())
       $(this).children("a:first").remove();
       console.log( $(this).data("href"));

});

   $('.excerpt').prev().prev().click(function(){
        
      $("#"+$(this).data("divid")).load('data/'+ $(this).data("href"))
   
   });
});
