$(function(){
   var parms = new Array();
   var query = window.location.search.substring(1);
   var parents = $("#"+query).children().parents("*")
   for (var i = parents.length-4; i >= 0; i--) {
           if(parents[i].id.length!=0) {
                console.log($("#"+parents[i].id))
                $("#"+parents[i].id).css("display","block");
               $("#"+parents[i].id).children("a").show();
               $("#"+parents[i].id).children("a").focus();
      
               $.browser.chrome = /chrome/.test(navigator.userAgent.toLowerCase()); 
               if($.browser.chrome) {
                     $("#"+parents[i].id).children("a").click();
               }
            }
         
           $("#"+query).children("a").css("background-color","green")
          
   
   }
});
