$(function(){


var parms = new Array();


var query = window.location.search.substring(1);

//$("#"+query).children("a").click();
var parents = $("#"+query).parents("*");
for (var i = parents.length-4; i >= 0; i--) {
         if(parents[i].id.length!=0)
        {  console.log("it clicked")
            $("#"+parents[i].id).children("a").show();
            $("#"+parents[i].id).children("a").focus();
            $.browser.chrome = /chrome/.test(navigator.userAgent.toLowerCase()); 

               if($.browser.chrome){

                      $("#"+parents[i].id).children("a").click();
                 }
           // $("#"+parents[i].id).children("a").click();
           // $("#"+parents[i].id).children("a").hide();
           // $("#"+parents[i].id).children("a").click();
            
        }
     
      $("#"+query).children("a").css("background-color","green")
    }

   

});
