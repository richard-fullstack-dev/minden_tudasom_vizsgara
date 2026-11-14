const prompt = require("prompt-sync")()

//tömb létrehozás
//names = [];

//2 elem berakása
//names.push('John');
//names.push('Jack');
//names.push('Jack');

//names.forEach(x => {
//    console.log(x);
//});


//HALMAZOK
//halmaz létrehozás
//names = new Set();

//3 elem belerakása
//names.add('John');
//names.add('Jack');
//names.add('Jack');

//elemek bejárása
//names.forEach(x => {
//    console.log(x);
//})

//KULCS-ÉRTÉK PÁROK (Dictionary)

//dictionary létrehozás
countries = new Map();

//kulcs-érték párok létrehozása
countries.set('HU', 'Magyarország');
countries.set('UK', 'Egyesült Királyság');
countries.set('PL', 'Lengyelország');
countries.set('FR', 'Franciaország');

//kulcs alapján érték lekérdezése
//let code = prompt('Add meg az országkódot: ');
//console.log('Az ország neve: ' + countries.get(code));

//összes kulcs-érték pár kiírása
countries.forEach((value, key) => {
    console.log(key + ' - ' + value);
})









