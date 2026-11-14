// MIRE JÓ:   osztály (konstruktor, metódus, toString), tömb-műveletek (összeg, legnagyobb, szűrés, törlés), JSON.
// MIKOR:     "készítsen osztályt", "függvény ami a legnagyobbat adja vissza", "törölje ...", "szöveggé alakítás".
// FUTTATÁS:  node 01-osztaly-es-tombok.js
// ÁTÍRNI:    az osztály és a függvények neve, a mezők, a számolás.
class Rendeles {
    nev;
    termek;
    db;
    ar;

    // konstruktor = összeszerelő munkás: beírja a kapott adatokat az új objektumba
    constructor(nev, termek, db, ar) {
        this.nev = nev;
        this.termek = termek;
        this.db = db;
        this.ar = ar;
    }

    osszeg() {
        return this.db * this.ar;
    }

    toString() {
        return `${this.nev} - ${this.termek} - ${this.db} db - ${this.osszeg()} Ft`;
    }
}

let rendelesek = [
    new Rendeles("Anna", "Latte", 2, 900),
    new Rendeles("Béla", "Espresso", 1, 700),
    new Rendeles("Csilla", "Cappuccino", 3, 850),
];

// összeg: ciklussal (vagy reduce-szal: lista.reduce((a, x) => a + x.osszeg(), 0))
function osszesBevetel(lista) {
    let osszeg = 0;
    lista.forEach(x => {
        osszeg += x.osszeg();
    });
    return osszeg;
}

// legnagyobb: az első az "eddigi legnagyobb", utána cserélünk, ha találunk nagyobbat
function legnagyobbRendeles(lista) {
    let legnagyobb = lista[0];
    lista.forEach(x => {
        if (x.osszeg() > legnagyobb.osszeg()) {
            legnagyobb = x;
        }
    });
    return legnagyobb;
}

// törlés: ÚJ tömb a törlendő nélkül (az eredeti nem változik)
function torles(lista, nev) {
    return lista.filter(x => x.nev !== nev);
}

// hibás bemenetnél kivétel (throw): a hívó try/catch-csel kezelheti
function szamlaosztas(osszeg, fo, jatt) {
    if (fo < 1) {
        throw new Error("A főszám legalább 1 legyen!");
    }
    let vegosszeg = jatt ? osszeg * 1.15 : osszeg;       // jatt ? igaz-eset : hamis-eset
    return Math.round(vegosszeg / fo);                   // egész számra kerekítés
}

// JSON: szöveggé alakítás és vissza. A visszaolvasott elemek sima objektumok -> Object.assign kell a metódusokhoz
function betoltes(szoveg) {
    return JSON.parse(szoveg).map(x => Object.assign(new Rendeles(), x));
}

console.log(osszesBevetel(rendelesek));                           // 5050
console.log(String(legnagyobbRendeles(rendelesek)));              // Csilla - Cappuccino - 3 db - 2550 Ft
console.log(osszesBevetel(torles(rendelesek, "Béla")));           // 4350
console.log(szamlaosztas(12000, 4, true));                        // 3450
try {
    szamlaosztas(12000, 0, false);
} catch (error) {
    console.log("Hiba:", error.message);
}
console.log(String(betoltes(JSON.stringify(rendelesek))[0]));     // Anna - Latte - 2 db - 1800 Ft

module.exports = { Rendeles, osszesBevetel, legnagyobbRendeles, torles, szamlaosztas, betoltes };   // tesztekhez
