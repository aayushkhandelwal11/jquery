$(function(){


var parms = new Array();


var query = window.location.search.substring(1);

var parms = query.split('&');


for(i=0;i<parms.length-1;i++)
{
if(parms[i].length>0)
$("#"+parms[i]).children("a").click();
}

});
