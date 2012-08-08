$(function(){
  $("button").click(function(){
 var j=[]
var counter=0
 $("#addrecord input[type='text']").each(function(){
  j[counter]=$(this).val()
  counter++
 });


    var found=0
   	$("tr td").parent().each(function(){
   	 	  ct=0;
	   	 
		   	while (found!=1&&ct<counter) {  
		     if($(this).children()[ct].innerText>j[ct]) {
		 	       $(this).before("<tr><td>"+j[0]+"</td><td>"+j[1]+"</td><td>"+j[2]+"</td></tr>")
		 	       found=1 
		 	   }
 		 	   ct= $(this).children()[ct].innerText<j[ct] ? counter:ct+1
		 	 }
   
   });
   if(found==0) {
     $("table").append("<tr><td>"+j[0]+"</td><td>"+j[1]+"</td><td>"+j[2]+"</td></tr>")
   }
   });
});   
