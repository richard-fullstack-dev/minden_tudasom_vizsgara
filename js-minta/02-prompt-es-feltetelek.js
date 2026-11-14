// MIRE JÓ:   adat beolvasása a konzolról, feltételek (if / else if / else), ciklus.
// MIKOR:     "kérjen be számot", "ha ... akkor ...", "ismételje ...".
// ELŐKÉSZÍTÉS: npm i prompt-sync   (a mappában)
// ÁTÍRNI:    a kérdések, a feltételek.
const prompt = require("prompt-sync")()

let szam = parseInt(prompt("Szám: "))       // a prompt mindig SZÖVEGET ad -> parseInt = számmá alakítás

if (szam > 10) {
    console.log("nagy")
} else if (szam > 5) {
    console.log("közepes")
} else {
    console.log("kicsi")
}

for (let i = 1; i <= szam; i++) {           // ciklus: 1-től szam-ig
    console.log(i)
}

let valasz = prompt("Jattot adjunk? igen/nem: ")
if (valasz == "igen") console.log("15% jatt")
else if (valasz == "nem") console.log("nincs jatt")
else console.log("Ismeretlen válasz!")

// véletlen szám 1..10: Math.floor(Math.random() * 10) + 1
