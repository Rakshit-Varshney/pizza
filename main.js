name_array=["cheese pizza","pinnaple pizza","veg pizza"];
function submit(){
    var name1=document.getElementById("student_1").value;
    name_array.push(name1);
    console.log(name_array);
    document.getElementById("display_name").innerHTML=name_array;
}