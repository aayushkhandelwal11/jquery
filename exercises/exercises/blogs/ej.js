function sort()
{
 

var x1= Number($("tr").length)
for(i=1;i<x1-1;i++)
{
  var x =$("tr")[i]
for(j1=i+1;j1<x1;j1++)
{
  var y=$("tr")[j1]
  if(Number($(x).children()[0].innerText)>Number($(y).children()[0].innerText))
    $(x).before(y) 
 }
}

}

