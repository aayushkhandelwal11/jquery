$(function(){
    console.log("Selecting")
    console.log($("div.module"));
    console.log($("#myList :eq(2)"))//i found this more suitable as directly the child is found wheres in other all childs are searched
    console.log($("#myList :nth-child(3)"))
    console.log($($("#myList li")[2]))
    console.log($("#search").find("label"))
    console.log($(":hidden").length)
    console.log($("[alt]").length)
    console.log($("table").find("tr:even"))
    console.log("traversing");
    
    $("img").each(function(idx, el) {
      console.log($(el).attr("alt"));
     });
   
   
    $("input", document.body).each(function () {
       var parentTag = $(this).parent("form")
       parentTag.attr("class","input_text")
     });
    
   
     $("#myList").
      children('li.current').
        each(function(idx,el){
           if($(el).attr("class")=="current")
           {
              $(el).removeClass('current') ;
              $(el).next().addClass('current')
           }
     });
  
     
     
     $("#specials").
       find("*").
         each(function() { 
            if($(this).attr("class")=="buttons")
              {
               console.log($(this))
              }
         });
     
   var firstelement=$("#slideshow :eq(0)") ;
   $(firstelement).addClass('current'); 
   $(firstelement).nextAll().addClass('disabled');    
   
   for(i=1;i<6;i++)
   {
     $('#myList').append('<li> text no' + i + '</li>');
   }   
   
   $('#myList :odd').remove();
   
   $('div.module:last').append('<h2>   new heading inserted</h2>')
   $('div.module:last').append('<p>   new paragraph isnserted after the heading</p>')
   $("div.module select").append('<option value="wednesday">Wednesday</option>');
   $("body").append('<div class="module"></div>')
   $('img:last').clone().appendTo($('div.module:last'))
   
    
});
