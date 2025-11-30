let temparature = document.getElementById("input");
let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
let result = document.getElementById("result")
let temp;



document.getElementById("submit").onclick = function (){
    if(celsius.checked){
        temp = Number(temparature.value) * 9 / 5 + 32
        result.textContent = temp.toFixed(1) +" F";
    }
    else if(fahrenheit.checked){
        temp = (Number(temparature.value) - 32) * 5/9
        result.textContent = temp.toFixed(1) + " C";
    }
    else{
        result.textContent = "Select a unit"
    }
}