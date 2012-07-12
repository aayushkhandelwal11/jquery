$(function(){

  $("#search :eq(1)").val($("#search :eq(0)").text())
  $("#search :eq(1)").attr("class","hint")
  $("#search :eq(0)").remove();
		  
	//$("#search :eq(0)").blur(function() {
	//    alert("hello");
	//});

	$("#search :eq(0)").
	focus(function() {
	$(this).val("");
	$(this).removeClass("hint") ;
	});

  $("#search :eq(0)").
  blur(function() {
   if($(this).val().trim(" ").length==0);
   {
      $(this).val("Enter Search Term");
	    $(this).addClass("hint") ;
   }
  });
});




