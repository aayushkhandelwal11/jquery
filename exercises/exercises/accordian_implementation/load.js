$(function(){
   var parms = new Array();
   var query = window.location.search.substring(1);
   $("#"+query).parents().show().focus()
   $("#"+query).children("a").css("background-color","green")
});
