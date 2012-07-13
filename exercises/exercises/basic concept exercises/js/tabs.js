$(function(){

   $("div.module").hide();
   $('div.module').first().before('<ul id="ullist"></ul>');
   $('div.module h2').each(function(index,el) {
           
   $('ul#ullist').append("<li id=index"+index+">"+ $(el).text() +"</li>");
         $("#index"+index).bind({
           click: function() {
                  $("div.module").hide();
               $(el).parent().show();
               $(this).addClass("current");
               $(this).siblings().removeClass("current");
            
             }
          });
    });
  
   
});
