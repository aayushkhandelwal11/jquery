$(document).ready(function () {


    jQuery.extend({
        getValues: function () {
              var result = null;
            $.ajax({
                url: 'images/json.json',
                dataType: 'json',
                async: false,
                cache: true,
                // code to run if the request succeeds;
                // the response is passed to the function
                success: function (json) {
                     result=json
                    id=0;
                    var brand = []
                    var color = []
                    jQuery.each(json, function (index, itemdata) {
                              $("input:radio[name=available]").click();

                        if (brand.indexOf(itemdata.brand) < 0) {
                             
                            brand.push(itemdata.brand)
                           $("div #brand").append("<input type='checkbox' name='brands' value=" + itemdata.brand.replace(/\s/g,'') + " id='" + itemdata.brand.replace(/\s/g,'')+ "' /> <label for=" +itemdata.brand.replace(/\s/g,'') + ">" + itemdata.brand + "</label><br />")
                        }
                        if (color.indexOf(itemdata.color) < 0) {
                            color.push(itemdata.color)
                           $("div #color").append("<input type='checkbox' name='brands' value=" + itemdata.color + " id='" + itemdata.color + "'/><label for=" + itemdata.color + ">" + itemdata.color + "</label><br />")
                        }

                        $("div.right").append("<img src='images/" + itemdata.url + "' id='"+id+"'>&nbsp;&nbsp;</img>")
                      $("#"+id).addClass(itemdata.brand.replace(/\s/g,''))
                        $("#"+id).addClass(itemdata.color)
                        if(itemdata.sold_out==0)
                        $("#"+id).addClass("avail")
                        id=id+1;
                      

                    });
                  
                },

             });
        
            return result;
        }
    });
    var data = $.getValues();
 
    $("div#brand,div#color,div#available").delegate("input", 'click', function () {
        var cols = 0,
            brands = 0,
            quantity = 2;
        var allBrands = [];

        $('#brand :checked').each(function () {
            allBrands.push($(this).val());
           
        });
        var allColor = [];
        $('#color :checked').each(function () {
            allColor.push($(this).val());
        });
        if (allBrands.length == 0) {
            allBrands.push("BRAND A");
            allBrands.push("BRAND B");
            allBrands.push("BRAND D");
            allBrands.push("BRAND C");
        }
        if (allColor.length == 0) {
            allColor.push("Red");
            allColor.push("Green");
            allColor.push("Yellow");
            allColor.push("Blue");
        }
        var checked = $('input:radio[name=available]:checked').val();
        if (checked == "all") quantity = 1;
        
        $("div.right").children().hide();
        jQuery.each(data, function (index, itemData) {
         
            for (i = 0; i < allBrands.length; i++) {
                for (j = 0; j < allColor.length; j++) {
                      if(quantity==1) 
                    $("."+allBrands[i].replace(/\s/g,'')+"."+ allColor[j]).show()
                      else
                      $("."+allBrands[i].replace(/\s/g,'')+"."+ allColor[j] +".avail").show()
                  }
            }


        });
    });

});
