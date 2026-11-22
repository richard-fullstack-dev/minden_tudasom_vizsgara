//==================== 5. FELADAT ====================

//---------- src/app/foglalas.ts ----------
export class Foglalas {
  #nev: string;
  #telefon: string;

  constructor(nev: string, telefon: string) {
    if (!nev || nev.trim() === '') {
      throw new Error('A név nem lehet üres!');
    }
    if (!telefon || telefon.length !== 11) {
      throw new Error('A telefonszám pontosan 11 karakterből álljon!');
    }
    this.#nev = nev;
    this.#telefon = telefon;
  }

  toString(): string {
    return `${this.#nev} (${this.#telefon})`;
  }
}

//---------- src/app/app.component.ts ----------
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Foglalas } from './foglalas';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  nev: string = '';
  telefon: string = '';
  hiba: string = '';
  foglalasok: Foglalas[] = [];

  hozzaad(): void {
    try {
      const uj = new Foglalas(this.nev, this.telefon);
      this.foglalasok.push(uj);
      this.nev = '';
      this.telefon = '';
      this.hiba = '';
    } catch (e) {
      this.hiba = (e as Error).message;
    }
  }
}

//---------- src/app/app.component.html ----------
<form (ngSubmit)="hozzaad()">
  <input name="nev" placeholder="Név" [(ngModel)]="nev">
  <input name="telefon" placeholder="Telefonszám" [(ngModel)]="telefon">
  <button type="submit">Foglalás</button>
</form>

<p>{{ hiba }}</p>

<ul>
  @for (f of foglalasok; track $index) {
    <li>{{ f.toString() }}</li>
  }
</ul>


//==================== 6. FELADAT ====================

//---------- Terminál (a bagoly-kavezo projekt mappájában) ----------
git init -b main
echo "node_modules/" > .gitignore
git add .gitignore
git commit -m "Add .gitignore node_modules kizarasaval"
git add .
git commit -m "Angular projekt alapjai, routing es konyvbemutato oldalak (3. feladat)"

git checkout -b termekajanlo
# ITT KÉSZÍTSD EL A 4. FELADATOT (konyvajanlo komponens + app.component módosítás)
git add .
git commit -m "Konyvajanlo komponens elkeszitese (4. feladat)"

git checkout main
git merge termekajanlo

# ITT KÉSZÍTSD EL A README.md-t és a firebase.json-t (lent), majd:
git add README.md
git commit -m "README hozzaadasa build es publikalasi lepesekkel"
git add firebase.json
git commit -m "Firebase Hosting beallitasa (firebase.json)"

//---------- firebase.json (a projekt gyökerében) ----------
{
  "hosting": {
    "public": "dist/bagoly-kavezo/browser",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}

//---------- README.md (a projekt gyökerében) ----------
# Bagoly Kávézó

## Build

    npm install
    ng build

A build kimeneti mappája: `dist/bagoly-kavezo/browser`

## Publikálás Firebase Hostingra

1. Bejelentkezés: `firebase login`
2. Projekt beállítása: `firebase init hosting` (public mappa: `dist/bagoly-kavezo/browser`, single-page app: Yes)
3. Build: `ng build`
4. Publikálás: `firebase deploy --only hosting`
