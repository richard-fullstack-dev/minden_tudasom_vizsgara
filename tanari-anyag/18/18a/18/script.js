const prompt = require("prompt-sync")()

function szetoszto(teljes_ar, resztvevok, jatt = 1){
    return Math.round((teljes_ar * jatt)/resztvevok);
}

//let szetoszto = function(teljes_ar, resztvevok, jatt = 1){
//    return Math.round((teljes_ar * jatt)/resztvevok);
//}

//let szetoszto = (teljes_ar, resztvevok, jatt = 1) => 
    //Math.round((teljes_ar * jatt)/resztvevok);



const a = szetoszto(12000, 4);
const b = szetoszto(12000, 6, 1.10);

//let fuggveny2 = szetoszto;
//const c = fuggveny2(12000, 4, 1.20);


console.log(a);
console.log(b);
//console.log(c);
