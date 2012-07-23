$(function(){

   $("div.module").hide();
   $('div.module').first().before('<ul id="ullist"></ul>');
   $('div.module h2').each(function(index,el) {
           
   $('ul#ullist').append("<li id=index"+index+">"+ $(el).text() +"</li>");
      $("#index"+index).data("h2",$(this))
        
    });
    
     $("ul#ullist li").bind({
           click: function() {
                 $("div.module").hide();
                 $($(this).data("h2")).parent().show();  
               
                 $(this).addClass("current");
                 $(this).siblings().removeClass("current");
            
             }
          });
  
   
});
