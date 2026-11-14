// MIRE JÓ:   osztály PRIVÁT mezőkkel (#), konstruktor-ellenőrzéssel, kivétellel (throw), toString-gel, lista kezelésével.
// MIKOR:     "privát tagváltozó", "a konstruktor ellenőrzi", "hibás paraméter esetén kivétellel jelezze", "toString metódus".
//            (a mintalap 5. feladata: Konyv osztály: #cim, #isbn; ISBN pontosan 10 vagy 13 számjegy)
// FUTTATÁS:  node 07-konyv-osztaly-ellenorzessel.js
// ÁTÍRNI:    az osztály neve, a mezők, az ellenőrzések, a toString formátuma.
class Konyv {
    #cim;          // a # = valódi privát: kívülről nem érhető el (konyv.#cim hiba)
    #isbn;

    constructor(cim, isbn) {
        // ELLENŐRZÉS-MINTÁK (mindegyik: ha rossz -> throw new Error(...))
        if (cim.trim().length === 0) {                                  // üres szöveg (a trim levágja a szóközöket)
            throw new Error("A cím nem lehet üres!");
        }
        if (isbn.length !== 10 && isbn.length !== 13) {                 // pontosan 10 VAGY 13 karakter
            throw new Error("Az ISBN 10 vagy 13 karakter legyen!");
        }
        if (![...isbn].every(c => c >= "0" && c <= "9")) {              // csak számjegyek (regex nélkül)
            throw new Error("Az ISBN csak számjegyet tartalmazhat!");
        }
        // regexszel egyben:  if (!/^(\d{10}|\d{13})$/.test(isbn)) throw new Error("...");
        // egyéb gyakori: szám tartomány (if (ar < 0) throw ...), e-mail (if (!email.includes("@")) throw ...)
        this.#cim = cim;
        this.#isbn = isbn;
    }

    get cim() { return this.#cim; }          // kívülről csak olvasni lehet
    get isbn() { return this.#isbn; }

    toString() {
        return `${this.#cim} (${this.#isbn})`;       // Cím (ISBN) formában
    }
}

// --- az oldal "fő komponense": lista tárolása, hozzáadás a végére, a form ürítése ----------------------
let konyvek = [];
let cim = "A Gyűrűk Ura";               // ezek az űrlap mezői (Angularban: [(ngModel)])
let isbn = "9780618640157";

function add() {
    try {
        konyvek.push(new Konyv(cim, isbn));      // hozzáadás a lista VÉGÉHEZ
        cim = "";                                // a form ürítése (csak siker esetén!)
        isbn = "";
    } catch (error) {
        console.log("Hiba:", error.message);     // hibás adatnál a lista nem változik, a form sem ürül
    }
}

add();                                          // sikeres
cim = ""; isbn = "123"; add();                  // hibás: üres cím
cim = "Valami"; isbn = "12345"; add();          // hibás: nem 10/13 karakter
cim = "Másik"; isbn = "12345678a0"; add();      // hibás: nem csak számjegy
console.log(konyvek.map(k => k.toString()));    // [ 'A Gyűrűk Ura (9780618640157)' ]
