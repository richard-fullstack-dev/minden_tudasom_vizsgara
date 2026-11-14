// MIRE JÓ:   szövegkezelés, dátum, Map (kulcs-érték), Set (egyedi elemek), Date visszaalakítása JSON után.
// MIKOR:     "keresse meg a szövegben...", "nagybetűssé", "darabolja szavakra", "határidő / eltelt idő", "kulcs-érték párok".
// FUTTATÁS:  node 06-szovegek-datum-map.js   (a localStorage-os rész böngészőben fut, itt csak definiálva van)
let text = "Almafa van a réten";

// --- SZÖVEG ---------------------------------------------------------------------------------------
console.log(text.length);                      // hossz
console.log(text.substring(7, 10));            // 7. indextől a 10.-ig (a 10. már nincs benne): "van"
console.log(text.replace("Almafa", "Körtefa"));// részlet cseréje
console.log(text.toUpperCase(), text.toLowerCase());
console.log(text.split(" "));                  // szavakra bontás tömbbe: ["Almafa","van","a","réten"]
console.log(text.indexOf("réten"));            // hol kezdődik (-1 = nincs benne)
console.log(text.includes("van"));             // benne van-e: true/false
console.log(text.endsWith("ten"), text.startsWith("Alma"));
console.log("  szóköz  ".trim());               // szélső szóközök levágása
console.log(["a", "b", "c"].join("-"));        // tömb -> szöveg: "a-b-c"
console.log(`Sablon szöveg: ${text.length} karakter`);    // `...${változó}...` = szövegbe illesztés

// --- DÁTUM ----------------------------------------------------------------------------------------
let hatarido = new Date("2030-12-24");         // dátum szövegből
let most = new Date();                         // a mostani pillanat
let kulonbsegMs = hatarido.getTime() - most.getTime();    // getTime = ezredmásodpercek 1970.01.01 óta
let napok = Math.floor(kulonbsegMs / (1000 * 60 * 60 * 24));    // 1 mp = 1000 ms; 1 nap = 1000*60*60*24 ms
console.log("Hátralévő napok:", napok > 0);
console.log(hatarido.getFullYear(), hatarido.getMonth() + 1, hatarido.getDate());   // ÉV, HÓNAP (0-tól!), NAP

// --- MAP (kulcs-érték párok) -------------------------------------------------------------------------
let countries = new Map();
countries.set("HU", "Magyarország");
countries.set("UK", "Egyesült Királyság");
console.log(countries.get("HU"));              // kulcs alapján érték
console.log(countries.has("FR"));              // van-e ilyen kulcs
countries.forEach((value, key) => console.log(key + " - " + value));    // FIGYELEM: előbb az érték, utána a kulcs

// --- SET (egyedi elemek) ----------------------------------------------------------------------------
let egyedi = Array.from(new Set(["Jack", "John", "Jack"]));   // a duplikáció eltűnik
console.log(egyedi);

// --- JSON + DÁTUM: a JSON.parse a dátumot SZÖVEGGÉ alakítja, vissza kell alakítani! ------------------
class Todo {
    constructor(name, deadline) {
        this.name = name;
        this.deadline = deadline;              // Date típus
    }
}
let todos = [new Todo("Tanulás", new Date("2030-01-01"))];

function save() {                              // böngészőben: mentés
    localStorage.setItem("todos", JSON.stringify(todos));
}
function load() {                              // böngészőben: betöltés
    todos = JSON.parse(localStorage.getItem("todos") ?? "[]");
    todos.forEach(x => {
        x.deadline = new Date(x.deadline);     // vissza Date-re (különben szöveg marad)
    });
}
// ha az osztályban metódus is van: Object.assign(new Todo(), x)  (lásd 01-osztaly-es-tombok.js)

let szoveg = JSON.stringify(todos);
let vissza = JSON.parse(szoveg);
vissza.forEach(x => x.deadline = new Date(x.deadline));
console.log(typeof vissza[0].deadline, vissza[0].deadline instanceof Date);   // object true
