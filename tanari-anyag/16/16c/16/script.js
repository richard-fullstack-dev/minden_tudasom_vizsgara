"use strict";
const prompt = require("prompt-sync")()

//Bekérjük a felhasználótól X darab nap hőmérsékletét
//Visszaírjuk neki ezeket
//És megadjuk az adott napok átlaghőmérsékletét

//Létrehozunk egy üres tömböt
let values = [];

//Megkérdezzük a felhasználót, hogy hány adatot fog nekünk küldeni!
let num = parseInt(prompt('Adatok száma: '));

//Bekérjük az X darab adatot és elmentjük őket a tömbbe!
for(let i = 1; i <= num; i++){
    //A konkrét adat bekérés
    let value = parseInt(prompt(i + '. adat: '));
    //Az aktuális adatot beletesszük a tömbbe
    values.push(value);
}

//tömb elemeinek összegét tároló változó létrehozása
let sum = 0;
//Végigmegyünk a tömbön és kiírjuk az összes elemét (0-ról kezdünk, tömb elemszámáig megyünk, mert az utolsó érvényes index: elemszám - 1)
for(let i = 0; i < values.length; i++){
    console.log(values[i]);
    sum = sum + values[i];
}

//átlag kiírása (elemek összege osztva az elemek darabszámával)
console.log('Átlag: ' + sum / values.length);