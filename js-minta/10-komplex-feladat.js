// KOMPLEX JAVASCRIPT FELADAT: osztálynapló
// MIRE JÓ:   egy nagyobb feladat, ami MINDENT összefog: osztályok, privát mező, ellenőrzés kivétellel, tömbműveletek,
//            statisztika, rendezés, keresés, törlés, JSON mentés/betöltés. Ha ezt érted, a vizsga JS-feladata menni fog.
// FUTTATÁS:  node 10-komplex-feladat.js
//
// FELADAT SZÖVEGE (így kaphatod a vizsgán):
//  a) Tanulo osztály: privát #nev (nem lehet üres) és jegyek tömb (jegyek: 1-5 egész szám, különben kivétel).
//     Metódusok: jegyHozzaad(jegy), atlag() (2 tizedesre kerekítve, 0 ha nincs jegy), toString(): "Név (átlag)".
//  b) Osztaly osztály: tanulok tömb. Metódusok: felvesz(tanulo), torol(nev), keres(szoveg) (névben, kis/nagybetű mindegy),
//     legjobb(), osztalyAtlag() (az ÖSSZES jegy átlaga), jelesek() (átlag >= 4,5), bukasraAll() (átlag < 3),
//     rendez() (átlag szerint csökkenő, új tömb), mentes() (JSON szöveg), betoltes(szoveg).

class Tanulo {
    #nev;
    jegyek = [];

    constructor(nev, jegyek = []) {
        if (nev.trim().length === 0) {
            throw new Error("A név nem lehet üres!");
        }
        this.#nev = nev;
        jegyek.forEach(j => this.jegyHozzaad(j));       // minden jegyet az ellenőrzésen át vesz fel
    }

    get nev() { return this.#nev; }

    jegyHozzaad(jegy) {
        if (!Number.isInteger(jegy) || jegy < 1 || jegy > 5) {
            throw new Error("A jegy 1 és 5 közötti egész szám legyen!");
        }
        this.jegyek.push(jegy);
    }

    atlag() {
        if (this.jegyek.length === 0) return 0;
        let osszeg = this.jegyek.reduce((a, j) => a + j, 0);
        return Math.round(osszeg / this.jegyek.length * 100) / 100;     // 2 tizedesre
    }

    toString() { return `${this.#nev} (${this.atlag()})`; }

    toJSON() { return { nev: this.#nev, jegyek: this.jegyek }; }       // a privát mező miatt kell a JSON-hoz
}

class Osztaly {
    tanulok = [];

    felvesz(tanulo) { this.tanulok.push(tanulo); }

    torol(nev) { this.tanulok = this.tanulok.filter(x => x.nev !== nev); }

    keres(szoveg) { return this.tanulok.filter(x => x.nev.toLowerCase().includes(szoveg.toLowerCase())); }

    legjobb() {
        if (this.tanulok.length === 0) return null;
        return this.tanulok.reduce((a, b) => a.atlag() >= b.atlag() ? a : b);
    }

    osztalyAtlag() {
        let jegyek = this.tanulok.flatMap(x => x.jegyek);               // az összes jegy egy tömbben
        if (jegyek.length === 0) return 0;
        return Math.round(jegyek.reduce((a, j) => a + j, 0) / jegyek.length * 100) / 100;
    }

    jelesek() { return this.tanulok.filter(x => x.atlag() >= 4.5); }

    bukasraAll() { return this.tanulok.filter(x => x.atlag() > 0 && x.atlag() < 3); }

    rendez() { return [...this.tanulok].sort((a, b) => b.atlag() - a.atlag()); }

    mentes() { return JSON.stringify(this.tanulok); }

    betoltes(szoveg) {
        this.tanulok = JSON.parse(szoveg).map(x => new Tanulo(x.nev, x.jegyek));   // vissza Tanulo példányokra
    }
}

// ---------------- kipróbálás ----------------
let osztaly = new Osztaly();
osztaly.felvesz(new Tanulo("Anna", [5, 4, 5]));
osztaly.felvesz(new Tanulo("Béla", [3, 2, 4]));
osztaly.felvesz(new Tanulo("Csilla", [5, 5, 5, 4]));
osztaly.felvesz(new Tanulo("Dóra", [2, 3]));

console.log(String(osztaly.legjobb()));                     // Csilla (4.75)
console.log(osztaly.osztalyAtlag());                         // 3.92
console.log(osztaly.jelesek().map(String));                  // [ 'Anna (4.67)', 'Csilla (4.75)' ]
console.log(osztaly.bukasraAll().map(String));               // [ 'Dóra (2.5)' ]
console.log(osztaly.rendez().map(x => x.nev));               // [ 'Csilla', 'Anna', 'Béla', 'Dóra' ]
console.log(osztaly.keres("LL").map(x => x.nev));            // [ 'Csilla' ]

let szoveg = osztaly.mentes();                               // JSON szöveg
let masik = new Osztaly();
masik.betoltes(szoveg);
console.log(masik.tanulok.length, String(masik.tanulok[0])); // 4 Anna (4.67)

osztaly.torol("Béla");
console.log(osztaly.tanulok.length);                         // 3

try { new Tanulo("Valaki", [6]); } catch (e) { console.log("Hiba:", e.message); }     // jegy hiba
try { new Tanulo("   ", [3]); } catch (e) { console.log("Hiba:", e.message); }        // név hiba

module.exports = { Tanulo, Osztaly };
