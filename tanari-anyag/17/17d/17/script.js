const prompt = require("prompt-sync")()

//Kérjünk be a felhasználótól X darab számot (pl. napi vízállások a Dunán)
//Mentsük el őket tömbbe!
//Írjuk ki a tömb összes elemét (sorszámmal együtt!)
//Írjuk ki az elemek átlagát!
//3 db függvényt készítsünk: számok bekérése, számok visszaírása, átlag kiszámítása

//tömb létrehozása üresen
let numbers = [];
user_input();
display_inline();
average();




//1. függvény: számok bekérése
function user_input(){
    //num = hány érték lesz
    let num = parseInt(prompt('Eltárolandó értékek száma: '));
    //ciklus, ami ennyiszer lefut (pl. i = 1..5)
    for(let i = 1; i <= num; i++){
        //next változóba beolvassuk a következő értéket
        let next = parseInt(prompt(i + '. érték: '));
        //numbers nevű tömbbe beletesszük a next tartalmát
        numbers.push(next);
    }
}

//2. függvény: számok visszaírása
function display(){
    //ciklus ami 0-ról indul és a tömb hossza - 1ig megy, hiszen pl. 4 elemű tömb lehetséges indexei: 0..3
    for(let i = 0; i < numbers.length; i++){
        //kiírjük az i index értékét (de 0..3 helyett 1..4-et írunk ki, mert az szebb) és a tényleges tömb értéket az i-edik helyről
        console.log((i+1) + '. érték: ' + numbers[i]);
    }
}

//2. függvény alternatíva: egy sorba írodjon ki minden elem, vesszővel elválasztva
function display_inline(){
    //szöveges változó, ami kezdetben üres
    let text = '';
    //ciklus ami 0-ról indul és a tömb hossza - 1ig megy, hiszen pl. 4 elemű tömb lehetséges indexei: 0..3
    for(let i = 0; i < numbers.length; i++){
        //az utolsó elemnél járva csak hozzáfűzöm a következő tömbelemet
        if (i == numbers.length - 1){
            text += numbers[i];
        }
        //de ha nem az utolsó elemnél járok még, akkor a következő tömbelemet és egy vesszőt fűzök hozzá
        else{
            text += numbers[i] + ',';
        }
    }
    console.log(text);
}

function average(){
    //ebben a változóban összegezzük az összes elemet
    let sum = 0;
    //végigmegyünk a tömbön és minden számot hozzáadunk a sum-hoz
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    //az összes elem összege elosztva az elemek darabszámával adja meg az átlagot!
    console.log('Elemek átlaga: ' + Math.round(sum / numbers.length));
}



