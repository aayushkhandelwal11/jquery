$(function(){

$("input:radio[name=available]").click();
$("div#brand,div#color,div#available").delegate("input",'click', function() {
      var cols=0,brands=0,quantity=2;
       var allBrands = [];
     $('#brand :checked').each(function() {
       allBrands.push($(this).val());
     });
     var allColor=[];
    $('#color :checked').each(function() {
       allColor.push($(this).val());
     });
     if(allBrands.length==0)
     {     allBrands.push("BRAND A"); allBrands.push("BRAND B"); allBrands.push("BRAND D"); allBrands.push("BRAND C");
     }
     if(allColor.length==0)
     {
       allColor.push("Red");allColor.push("Green");allColor.push("Yellow");allColor.push("Blue");
     }
     var checked=$('input:radio[name=available]:checked').val();
     if(checked!="all")
     quantity=1;
    $.ajax({
       url: 'images/json.json',
         cache: true,
        dataType: "json",
      success: function(my_json) {
                 $("div.right").children().remove();
               jQuery.each(my_json, function(index, itemData) {
                   console.log(itemData)
                    for(i=0;i<allBrands.length;i++)
                      {   
                         for(j=0;j<allColor.length;j++)
                         {   
                            if(itemData.brand==allBrands[i]&&itemData.color==allColor[j]&&itemData.sold_out<quantity)
                            {
                               console.log(itemData.url)
                               $("div.right").append("<img src='images/"+itemData.url+"'/>")
                               $("div.right").append("<text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</text>")
                            }
                         
                         
                         }
                      }               
                     
                    
                 });
              
                }
         });
     
     
     });
});
