 let min = 1;
 let max = 100;
 let number = Math.floor(Math.random()*(max-min +1) + min);
 let guess;
 let running = true;
 let count = 0;

while(running){
    guess = window.prompt(`fill in a number from ${min} to ${max}`);
    guess = Number(guess);

    if(guess < min || guess > max){
        window.alert('Your number is out of range')
    }
    else if(isNaN(guess)){
        window.alert('you need to type a number')
    }
    else{
        count++;
        if(guess > number){
            window.alert('Your number is too huge, type again')
        }

        else if(guess < number){
            window.alert('Your number is too small, type again')
        }
        else{
            window.alert(`Your number is correct, it took you ${count} times`)
            running = false;
        }
    
    }
}