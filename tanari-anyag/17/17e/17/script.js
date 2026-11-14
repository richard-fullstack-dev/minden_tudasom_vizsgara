const prompt = require("prompt-sync")()

//Kérjünk be a felhasználótól X darab számot (pl. napi vízállások a Dunán)
//Mentsük el őket tömbbe!
//Írjuk ki a tömb összes elemét (sorszámmal együtt!)
//Írjuk ki az elemek átlagát!
//3 db függvényt készítsünk: számok bekérése, számok visszaírása, átlag kiszámítása

//további függvények - programozási tételek

//Sorozatszámítás: Összes elem összege/szorzata vagy esetleg átlaga

//Eldöntés: Adjunk választ arra a kérdésre, hogy egy bizonyos elem szerepel-e a tömbben? Pl. 34

//Megszámlálás: Adjunk választ arra a kérdésre, hogy egy bizonyos elem / bizonyos tulajdonságú elem HÁNYSZOR szerepel a tömbben!
//pl: Mondjuk meg, hogy hány darab 100-nál kisebb elem szerepel a tömbben!

//Lineáris keresés: Adjunk választ arra a kérdésre, hogy egy bizonyos elem / bizonyos tulajdonságú elem szerepel-e a tömbben
//és ha szerepel, akkor adjuk vissza az indexét (hogy hol van a tömbben)
//és ha nem szerepel, akkor adjunk vissza -1et

//Minimum/maximumkiválasztás: Keressük a legnagyobb elem értékét vagy indexét




//tömb létrehozása üresen
let numbers = [];
user_input();
display_inline();
average();
contains();
count();
find();
max();



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

//3. függvény: elemek átlaga
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

//4. függvény: van-e a tömbben pontosan 100-as érték?
function contains(){
    //egy logikai változó, amibe kijelentjük a tömb vizsgálata előtt, hogy biztosan nincs benne a 100-as érték
    let isin = false;
    //végigmegyünk ciklussal a tömb összes elemén
    for(let i = 0; i < numbers.length; i++){
        //megnézzük, hogy az aktuális elem (ahol tartunk a ciklussal), az pontosan 100-e?
        if (numbers[i] == 100){
            //és ha igen, akkor az isin változó alapértelmezett false értékét true-ra cseréljük
            isin = true;
        }
    }
    //az isin változó függvényében más-más visszajelzést írunk a konzolra
    if (isin){
        console.log('Benne van a 100-as érték a tömbben!');
    }
    else{
        console.log('Nincs benne a 100-as érték a tömbben!');
    }
}

//5. függvény: megszámlálás: hány db 100-nál kisebb elemünk van
function count(){
    //egy szám változó, ami nyilván tartja, hogy hány db 100-nál kisebb elemünk van (kezdetben feltételezzük, hogy nulla!)
    let c = 0;
    //bejárjuk a tömböt
    for(let i = 0; i < numbers.length; i++){
        //megnézzük, hogy az aktuális elem kisebb-e mint 100
        if (numbers[i] < 100){
            //ha kisebb, akkor a c változót eggyel növeljük!
            c++;
        }
    }
    console.log('100-nál kisebb értékek száma: ' + c);
}

//6. függvény: lineáris keresés: keressük a 100-as érték helyét! (ha van)
function find(){
    //kezdetben feltételezzük, hogy nem szerepel a tömbben a 100as érték, így a helye -1
    let index = -1;
    //bejárjuk a tömböt végig
    for(let i = 0; i < numbers.length; i++){
        //nézzük meg, hogy az aktuális elem egyenlő-e 100-al
        if (numbers[i] == 100){
            //ha igen, akkor az index változóba tegyük ki az i aktuális értékét, így a -1es kezdőértéke felülíródik, ha van találat
            index = i;
        }
    }
    if (index <= -1){
        console.log('Nincs a tömbben a 100-as elem!');
    }
    else{
        console.log('A 100-as elem helye a tömbben: ' + index + ' (' + (index+1) + '. elem)');
    }
}

//7. függvény: maximális elem értékének keresése
function max(){
    //egy változóban azt mondjuk, hogy a legnagyobb elem -végtelen
    let max = Number.NEGATIVE_INFINITY;
    let maxindex = 0;
    //végigmegyünk a tömbön
    for(let i = 0; i < numbers.length; i++){
        //megnézzük, hogy az aktuális elem nagyobb-e mint az eddig gondolt legnagyobb (max)
        if (numbers[i] > max){
            //akkor ez a szám lesz innentől a legnagyobb, ezért beírjuk a max változóba
            max = numbers[i];
            maxindex = i;
        }
    }
    console.log('A legnagyobb elem: ' + max);
    console.log('A legnagyobb elem indexe: ' + maxindex);
}


//bónusz feladat: legyen egy függvény, ami megkeresi a legnagyobb elem helyét is, nem csak az értékét


