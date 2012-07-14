$(function(){

    $('#nav').children().mouseover(function() {
             $(this).addClass("hover")
             $(this).children().show();
    });
    $('#nav').children().mouseout(function() {
             $(this).removeClass("hover")
            $(this).children("ul").hide();
    });



});
