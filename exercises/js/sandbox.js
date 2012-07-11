$(function(){
    console.log($("div.module"));
    console.log($("#myList :eq(2)"))//i found this more suitable as directly the child is found wheres in other all childs are searched
    console.log($("#myList :nth-child(3)"))
    console.log($($("#myList li")[2]))
    console.log($("#search").find("label"))
    console.log($(":hidden").length)
    console.log($("[alt]").length)
    console.log($()"table").find("tr:even"))
});
