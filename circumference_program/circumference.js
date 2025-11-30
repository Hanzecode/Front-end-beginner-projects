let radius;
let pi =3.14;
let circumference;


document.getElementById('button').onclick = function(){
    radius = document.getElementById('input').value;
    circumference = pi*2*Number(radius)
    document.getElementById('output').textContent = `the circumference is ${circumference}`
}

