const prompt = require("prompt-sync")()

let year = parseInt(prompt('Add meg a születési évedet: '));
let age = 2026 - year;

console.log('Ennyi idős vagy: ' + age);
if (age >= 33){
    console.log('Betöltötted a krisztusi kort!');
}
else{
    console.log('Nem töltötted még be a krisztusi kort!');
}


