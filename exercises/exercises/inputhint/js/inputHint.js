$(function(){

  $("#search :input[type=text]").val($("#search label[for=q]").text())
  $("#search :input[type=text]").attr("class","hint")
  $("#search label[for=q]").remove();
  console.log($("#search :input[type=text]"))
  $("input.hint").live('focus',function() {
	$(this).val("");
	$(this).removeClass("hint") ;
	});

  $("#search :first").
  blur(function() {
    var x=$(this).val().trim(" ").length;

   if(x< 1)
   {  
      $(this).val("Enter Search Term");
	    $(this).addClass("hint") ;
   }
  });
});




