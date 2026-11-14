import { Component } from '@angular/core';
import { Konyv } from './konyv';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  cim: string = ""                 // az űrlap mezői
  isbn: string = ""
  konyvek: Konyv[] = []            // a lista tárolása
  hiba: string = ""

  add(): void {
    try {
      this.konyvek.push(new Konyv(this.cim, this.isbn))    // a lista VÉGÉRE
      this.cim = ""                                         // az űrlap ürítése (csak siker esetén)
      this.isbn = ""
      this.hiba = ""
    } catch (error) {
      this.hiba = (error as Error).message                  // hibás adat: a konstruktor kivételt dob, a lista nem változik
    }
  }
}
