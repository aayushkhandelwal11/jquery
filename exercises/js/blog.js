$(function(){
   $('.excerpt').prev().click(function() {
       $(".excerpt").not(this).slideUp();
      $(this).next().slideDown();
   
});

});
