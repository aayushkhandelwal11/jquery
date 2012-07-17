$(function(){

function GetParents(childElement) {
    var parents = $(childElement).parents("*");
    var selector = "";
    
    for (var i = parents.length-4; i >= 0; i--) {
        selector += parents[i].id + "&";
    }

   
  
    return selector.trim("&");
}
$("li a").live('click', function() {
    allParents =GetParents(this)
    var x=$(this).attr("href");
   
    x=x+'?'+allParents;
     $(this).attr("href",x)

     
});

});
