const prompt = require("prompt-sync")()

let text = 'Almafa van a réten';

//szöveg hosszának kinyerése
let l = text.length;
console.log(l);

//szöveg 7..9 indexe közti rész kinyerése
let piece = text.substring(7,10);
console.log(piece);

//részsorozat csere pl. Almafa -> Körtefa
let newText = text.replace('Almafa', 'Körtefa');
console.log(newText);

//kisbetűssé/nagybetűssé alakítás
let t2 = text.toUpperCase();
let t3 = text.toLowerCase();
console.log(t2);
console.log(t3);

//string feltördelése pl. szóközök mentén egy tömbbe
let pieces = text.split(' ');
console.log(pieces.toString());

//részsorozat keresése pl. réten szó
let index = text.indexOf('réten');
console.log(index);

//adott részsorozat szerepel-e a stringben pl. van
let t = text.includes('van');
console.log(t);

//így kezdődik-e a string?
let t4 = text.startsWith('Almafa');
let t5 = text.endsWith('réten');
console.log(t4);
console.log(t5);

//string adott indexű karakterének kiírása - indexelhetjük, mint egy tömböt
console.log(text[3]);


//stringek tömbjén tömbműveletek stringműveletekkel kombinálva
let names = ['Péter', 'Pál', 'Eszter', 'Olga', 'Sándor'];

//szerepel-e a tömbben Eszter?
console.log(names.includes('Eszter'));

//szerepel-e a tömbben olyan ember, akinek a neve "ter"-re végződik
console.log(names.some(x => x.endsWith('ter')));

//válogassuk ki egy tömbbe azokat, akik ter-re végződnek
let newNames = names.filter(x => x.endsWith('ter'));
console.log(newNames);

//másoljuk át az összes elemet egy új tömmbe
//másolás közben alakítsuk nagybetűssé őket
//és minden egyes e betűt cseréljünk u betűre
let newNames2 = names.map(x => x.toUpperCase().replaceAll('E','U'));
console.log(newNames2);

