const prompt = require("prompt-sync")()

//10 tanuló jegyei
let values = [1,1,2,5,4,3,3,2,1,5];

//1. mennyi az osztály átlaga
//2. hány jeles tanuló van?
//3. igaz-e, hogy mindenki jegye 1-esnél jobb?
//4. válogassuk ki az elégtelentől különböző emberek jegyeit

let sum = values.reduce((x,y) => x += y);
console.log(sum / values.length);

console.log(values.filter(x => x > 1).length);

console.log(values.every(x => x > 1));

console.log(values.filter(x => x > 1).toString());