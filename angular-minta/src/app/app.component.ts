// MIRE JÓ:   a gyökérkomponens (a keret). Az `ng new` ezt MAGA létrehozza: ha már megvan, ne írd felül,
//            csak az app.component.html tartalmát cseréld a mintára.
// MIKOR:     ha a navbar + <router-outlet> keret kell.
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent { }
