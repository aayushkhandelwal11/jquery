$(function(){
    $("li a").live('click', function() {
    var x=$(this).attr("href");
    $(this).attr("href",x+"?"+$(this).parent().attr("id"))
    });
});
