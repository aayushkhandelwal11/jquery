$(function(){
var i=0;
var j=0;
$("#main li").each(function()
{
$(	this).attr("id",i);
i++;
});
$("#main ul").each(function()
{
$(	this).attr("id","ul"+j);
j++;
});



});
