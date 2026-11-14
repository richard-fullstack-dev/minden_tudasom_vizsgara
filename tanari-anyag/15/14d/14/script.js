const prompt = require("prompt-sync")()


let name = prompt('Add meg a nevedet: ');
let month = parseInt(prompt('Add meg a születési hónapod sorszámát (1-12): '));

console.log('Hello, ' + name + '!');

if (month <= 0){
    console.log('Nem 1 és 12 közti számot írtál be!');
}
else if (month <= 3){
    console.log('1. negyedév');
}
else if (month <= 6){
    console.log('2. negyedév');
}
else if (month <= 9){
    console.log('3. negyedév');
}
else if (month <= 12){
    console.log('4. negyedév');
}
else{
    console.log('Nem 1 és 12 közti számot írtál be!');
}



