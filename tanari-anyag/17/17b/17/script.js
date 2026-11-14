const prompt = require("prompt-sync")()

let min = 1;
let max = 100;
let number = Math.floor(Math.random() * (max - min + 1)) + min;
let user_input = -1;
let tries = 0;

while (number != user_input) {
    check();
}

function check(){
    tries++;
    user_input = parseInt(prompt('Tipp: '));
    if (user_input < number) {
        console.log('Nagyobb a gondolt szám! Próbálkozás: ' + tries);
    }
    else if (user_input > number) {
        console.log('Kisebb a gondolt szám! Próbálkozás: ' + tries);
    }
    else {
        console.log('Nyertél! Pont erre a számra gondoltam! Próbálkozás: ' + tries);
    }
}




