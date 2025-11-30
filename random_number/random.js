let randomNumber;


document.getElementById('button').onclick = function(){
    randomNumber1 = Math.round(Math.random()*100)
    randomNumber2 = Math.round(Math.random()*100)
    randomNumber3 = Math.round(Math.random()*100)
    document.getElementById('number1').textContent = randomNumber1
    document.getElementById('number2').textContent = randomNumber2
    document.getElementById('number3').textContent = randomNumber3
}