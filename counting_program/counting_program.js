// COUNTER PROGRAM

const decreaseButton = document.getElementById('decrease')
const resetButton = document.getElementById('reset')
const increaseButton = document.getElementById('increase')
const countLabel = document.getElementById('increase')

let count = 0;

increaseButton.onclick = function(){
    count++;
    document.getElementById('number').textContent = count;
}

decreaseButton.onclick = function(){
    count--;
    document.getElementById('number').textContent = count;
}

resetButton.onclick = function(){
    count=0;
    document.getElementById('number').textContent = count;
}