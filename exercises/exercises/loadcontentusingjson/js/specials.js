$(function(){

    var form =$("#specials").children('form')
    $(form).append("<div id='division'></div>")
    $(form).
    children('ul').
    change(function(){
      $.getJSON('data/specials.json', function(my_json) {
      /* $.each(resp, function(k, v) {
          console.log(v[key]);
       });*/
        for (var key in my_json) {
        if($("select[name=day]").val()==key)
        {  $("#division").children().remove();
            $("#division").css("background-color",my_json[key].color); 
           $("#division").append("<h2>"+my_json[key].title+"</h2><br><img src="+my_json[key].image+"><br><h6>"+my_json[key].text+"</h6></img>")
         
           console.log($("#division").children(""))
           
        }
       }
   
    
    });

   });







});
