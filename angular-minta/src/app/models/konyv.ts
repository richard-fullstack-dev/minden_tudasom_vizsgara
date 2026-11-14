// MIRE JÓ:   modell PRIVÁT mezőkkel, ellenőrző konstruktorral, toString-gel (a mintalap 5. feladata).
// MIKOR:     "privát tagváltozó", "a konstruktor ellenőrzi", "kivétellel jelezze", "Cím (ISBN) formában".
// ÁTÍRNI:    az osztály neve, mezők, ellenőrzések. Több ellenőrzés-minta: js-minta/07-konyv-osztaly-ellenorzessel.js
export class Konyv {
    #cim: string
    #isbn: string

    constructor(cim: string, isbn: string) {
        if (cim.trim().length === 0) {
            throw new Error("A cím nem lehet üres!")
        }
        if (isbn.length !== 10 && isbn.length !== 13) {
            throw new Error("Az ISBN 10 vagy 13 karakter legyen!")
        }
        if (![...isbn].every(c => c >= "0" && c <= "9")) {
            throw new Error("Az ISBN csak számjegyet tartalmazhat!")
        }
        this.#cim = cim
        this.#isbn = isbn
    }

    get cim(): string { return this.#cim }
    get isbn(): string { return this.#isbn }

    toString(): string {
        return `${this.#cim} (${this.#isbn})`
    }
}
