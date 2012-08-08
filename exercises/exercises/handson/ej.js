$(function(){
  $("button").click(function(){
 var j=[]
var counter=0
 $("#addrecord input[type='text']").each(function(){
  j[counter]=$(this).val()
  counter++
 });

    x=$("tr").length
    var found=0
   	for(i=1;i<Number(x);i++) {
   	 	  ct=0;
	   	  var u =$("tr")[i]
		   	while (found!=1&&ct<counter) {  
		     if($(u).children()[ct].innerText>j[ct]) {
		 	       $(u).before("<tr><td>"+j[0]+"</td><td>"+j[1]+"</td><td>"+j[2]+"</td></tr>")
		 	       found=1 
		 	   }
 		 	   ct= $(u).children()[ct].innerText<j[ct] ? counter:ct+1
		 	 }
		 }
   if(found==0) {
     $("table").append("<tr><td>"+j[0]+"</td><td>"+j[1]+"</td><td>"+j[2]+"</td></tr>")
   }
   });
});   
