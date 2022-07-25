function DeleteAll() {
    document.getElementById("MyResult").value = "" ;  

}
function DeleteOne() {
    document.getElementById("MyResult").value = 
    document.getElementById('MyResult').value.slice(0,-1);   

}



function calculator(NewValue){
    document.getElementById("MyResult").value += NewValue; 

}

function Answer() {
var a = document.getElementById("MyResult").value ; 
var b = eval(a);
document.getElementById("MyResult").value = b

}