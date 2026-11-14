// MIRE JÓ:   fájl beolvasása / írása Node-ban.
// MIKOR:     CSAK ha a feladat kifejezetten fájlból olvasást kér (a vizsga témalistájában nem szerepel).
// FUTTATÁS:  node 03-fajl-olvasas.js  (a mappában legyen egy adat.txt)
const fs = require("fs")

let szoveg = fs.readFileSync("adat.txt", "utf8")                   // a fájl teljes tartalma szövegként
let sorok = szoveg.split("\n")                                     // sorokra bontva (tömb)
sorok.forEach(sor => console.log(sor))

let adat = JSON.parse(fs.readFileSync("adat.json", "utf8"))        // JSON fájl -> objektum
fs.writeFileSync("ki.txt", "tartalom")                             // fájl írása
