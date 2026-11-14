// MIRE JÓ:   a webshop egy terméke (a komplex Angular feladat modellje).
export class Termek {
    id: number = 0
    nev: string = ""
    ar: number = 0
    keszlet: number = 0
    akcio: boolean = false

    constructor(nev: string = "", ar: number = 0, keszlet: number = 0, akcio: boolean = false) {
        this.nev = nev
        this.ar = ar
        this.keszlet = keszlet
        this.akcio = akcio
    }
}
