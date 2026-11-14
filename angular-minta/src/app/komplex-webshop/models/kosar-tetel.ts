// MIRE JÓ:   egy sor a kosárban: melyik termék, hány darab.
import { Termek } from "./termek";

export class KosarTetel {
    termek: Termek = new Termek()
    db: number = 1

    constructor(termek: Termek = new Termek(), db: number = 1) {
        this.termek = termek
        this.db = db
    }

    get osszeg(): number {
        return this.termek.ar * this.db
    }
}
