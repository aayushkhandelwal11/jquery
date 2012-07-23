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
                    
                    var brand = []
                    var color = []
                    jQuery.each(json, function (index, itemdata) {
                              

                        if (brand.indexOf(itemdata.brand) < 0) {
                             
                            brand.push(itemdata.brand)
                           $("div #brand").append("<input type='checkbox' name='brands' value=" + itemdata.brand.replace(/\s/g,'') + " id='" + itemdata.brand.replace(/\s/g,'')+ "' /> <lablel for=" +itemdata.brand.replace(/\s/g,'') + ">" + itemdata.brand + "</label><br />")
                        }
                        if (color.indexOf(itemdata.color) < 0) {
                            color.push(itemdata.color)
                            $("div #color").append("<input type='checkbox' name='brands' value=" + itemdata.color + " id='" + itemdata.color + "'/><lablel for=" + itemdata.color + ">" + itemdata.color + "</label><br />")
                        }

                        $("div.right").append("<img src='images/" + itemdata.url + "' />")
                        $("div.right").append("<text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</text>")

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
        if (checked != "all") quantity = 1;
        
        $("div.right").children().remove();
        jQuery.each(data, function (index, itemData) {
         
            for (i = 0; i < allBrands.length; i++) {
                for (j = 0; j < allColor.length; j++) {
                    if (itemData.brand.replace(/\s/g,'') == allBrands[i].replace(/\s/g,'') && itemData.color == allColor[j] && itemData.sold_out < quantity) {
                        console.log(itemData.url)
                        $("div.right").append("<img src='images/" + itemData.url + "'/>")
                        $("div.right").append("<text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</text>")
                    }


                }
            }


        });
    });

});
