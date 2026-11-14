// MIRE JÓ:   egy adat alakját írja le (id, név, ár...) + kis metódusok. Üres "űrlapsablon".
// MIKOR:     ha a feladat osztályt/modellt kér, vagy listát tárolsz (Product helyett a feladat szava: Book, Foglalas...).
// ÁTÍRNI:    az osztály neve, a mezők, a konstruktor paraméterei. Fájlnév: kisbetű (book.ts).
export class Product {
    id: number = 0
    name: string = ""
    price: number = 0
    akcio: boolean = false

    // konstruktor = összeszerelő munkás: a kapott alkatrészeket beírja az új objektumba
    constructor(name: string = "", price: number = 0, akcio: boolean = false) {
        this.name = name
        this.price = price
        this.akcio = akcio
    }

    getFormattedPrice(): string {
        return this.price.toLocaleString("hu-HU") + " Ft"
    }

    // toString: ezt hívja a kiírás ({{ p }} vagy console.log)
    toString(): string {
        return `${this.name} (${this.price})`
    }
}
