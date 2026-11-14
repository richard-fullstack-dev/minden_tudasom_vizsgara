const prompt = require("prompt-sync")()

/*
Kérjünk be a felhasználótól egy számot 1-10 között!
Kérjünk be még egy számot 20-30 között!
Hogyha bármelyik szám nem felel meg a kritériumoknak, akkor írjunk ki hibát!

Ha mindkét szám rendben van, akkor számoljunk el egyesével egyiktől a másikig!
*/

let a = parseInt(prompt('Add meg az A számot 1-10 között: '));
if (a >= 1 && a <= 10){
    let b = parseInt(prompt('Add meg a B számot 20-30 között: '));
    if (b >= 20 && b <= 30){
        for(let i = a; i <= b; i++){
            console.log(i);
        }
    }
    else{
        console.log('Nem 20-30 közötti a szám!');    
    }
}
else{
    console.log('Nem 1-10 közötti a szám!');
}