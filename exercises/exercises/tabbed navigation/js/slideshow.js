$(function(){

    $("body").before($('#slideshow'));
    
   for(i=0;i<$("#slideshow li").length;i++)
   {     
           $($("#slideshow li").get(i)).fadeIn('5000'); 
          $($("#slideshow li").get(i)).delay('10000') ;   
          $($("#slideshow li").get(i)).fadeOut('5000');
          $($("#slideshow li").get(i)).delay('10000') ; 
    }




});
