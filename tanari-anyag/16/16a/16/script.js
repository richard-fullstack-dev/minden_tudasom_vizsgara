const prompt = require("prompt-sync")()

/*let result = prompt('Az almát vagy a körtét szereted jobban? Válaszlehetőség: alma | korte: ');
if (result == 'alma'){
    console.log('Jó döntés, az alma nagyon finom!');
}
else if (result == 'korte'){
    console.log('A körte egy jó választás!');
}
else{
    console.log('Ez a lehetőség nem volt a megadottak közt!');
}*/

/*let a = parseInt(prompt('Add meg az A számot: '));
let b = parseInt(prompt('Add meg a B számot: '));

let answer = prompt('Összadjam vagy összeszorozzam őket? + vagy *: ');
if (answer == '+'){
    console.log('Az összegük: ' + (a + b));
}
else if (answer == '*'){
    console.log('A szorzatuk: ' + a * b);
}
else{
    console.log('Ilyen műveletet nem ismerek...');
}*/

//Kérjünk be egy végösszeget
//Kérjük be, hogy hány fele osszuk szét
//Írjuk ki, hogy ki mennyivel tartozik!

/*let cost = parseInt(prompt('Számla végösszege: '));
let personNumber = parseInt(prompt('Hányan voltatok: '));
let tip = prompt('Adjunk-e 15% jattot? igen/nem: ');
if (tip == 'igen'){
    let costWithTip = cost * 1.15;
    let costPerPerson = costWithTip / personNumber;
    console.log('Személyenként: ' + costPerPerson);
}
else if (tip == 'nem'){
    let costPerPerson = cost / personNumber;
    console.log('Személyenként: ' + costPerPerson);
}
else{
    console.log('Hiba, igen/nem választ írhatsz csak!');
}*/

/*let i = 1;
while(i <= 7710){
    console.log(i);
    i++;
}*/

/*for(let i = 1; i < 101; i+=2){
    console.log(i);
}*/

//7 többszöröseiből pontosan 20 db
/*for(let i = 7; i <= 7*20; i+=7){
    console.log(i);
}*/

/*for(let i = 1; i <= 20; i++){
    console.log(i + 'x7 = ' + (i*7));
}*/

//2 hatványai a 10. hatványig
/*for(let i = 1; i <= 10; i++){
    console.log(2 ** i);
}*/

for(let i = 2; i <= 2**10; i*=2){
    console.log(i);
}
