// MIRE JÓ:   az "elkészült, de nem működő űrlap" interaktívvá tétele: a lista tárolása, hozzáadás a végére,
//            az űrlap ürítése siker után, hiba esetén üzenet és a lista nem változik.
// MIKOR:     "tegye interaktívvá", "a fő komponens legyen képes a lista tárolására", "új adat a lista végéhez", "ürítse a formot".
// LÉTREHOZÁS: ng g c components/konyv-urlap --skip-tests  (selector: app-konyv-urlap, osztály: KonyvUrlapComponent)
// ÁTÍRNI:    Konyv -> a saját osztály, a mezők (cim, isbn), a lista neve.
import { Component } from '@angular/core';
import { Konyv } from '../../models/konyv';

@Component({
  selector: 'app-konyv-urlap',
  templateUrl: './konyv-urlap.component.html'
})
export class KonyvUrlapComponent {
  cim: string = ""                 // az űrlap mezői ([(ngModel)])
  isbn: string = ""
  konyvek: Konyv[] = []            // a lista tárolása
  hiba: string = ""

  add(): void {
    try {
      this.konyvek.push(new Konyv(this.cim, this.isbn))    // hozzáadás a lista VÉGÉHEZ
      this.cim = ""                                         // az űrlap ürítése (csak siker esetén)
      this.isbn = ""
      this.hiba = ""
    } catch (error) {
      this.hiba = (error as Error).message                  // a hibás adatnál a konstruktor kivételt dob; a lista nem változik
    }
  }
}
