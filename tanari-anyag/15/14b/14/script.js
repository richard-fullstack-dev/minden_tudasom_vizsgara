const prompt = require("prompt-sync")()


let a = parseInt(prompt('Add meg az A számot: '));
let b = parseInt(prompt('Add meg a B számot: '));

let c = a + b;
let d = a * b;

console.log('Az összegük: ' + c);
console.log(`A szorzatuk: ${d}`);
console.log('A hatványuk: ' + a ** b);
