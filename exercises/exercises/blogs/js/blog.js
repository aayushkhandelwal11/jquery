$(function(){
   $('.excerpt').prev().click(function() {
        $(this).next().slideDown(2000).delay(1000);
       $(this).parent().siblings().children(".excerpt").slideUp(2000);
     
   
});

});
