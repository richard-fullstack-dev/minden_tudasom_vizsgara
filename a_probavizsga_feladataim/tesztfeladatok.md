# Otthoni saját próbafeladatok vizsgafelkészülésre

```
//---------- src/app/foglalas.ts ----------
export class Foglalas {
  #nev: string;
  #telefon: string;

  constructor(nev: string, telefon: string) {
    if (nev.trim() === '') {
      throw new Error('A név nem lehet üres!');
    }
    if (telefon.length !== 11) {
      throw new Error('A telefonszám pontosan 11 karakter legyen!');
    }
    this.#nev = nev;
    this.#telefon = telefon;
  }

  toString(): string {
    return `${this.#nev} (${this.#telefon})`;
  }
}

//---------- src/app/app.component.ts (a meglévő imports-ot bővítsd: FormsModule) ----------
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Foglalas } from './foglalas';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FormsModule],
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
      this.foglalasok.push(new Foglalas(this.nev, this.telefon));
      this.nev = '';
      this.telefon = '';
      this.hiba = '';
    } catch (e) {
      this.hiba = (e as Error).message;
    }
  }
}

//---------- src/app/app.component.html (a vázban lévő űrlapba: [(ngModel)] + (click), alá a lista) ----------
<div class="container mt-4">
  <h4>Új foglalás</h4>
  <label for="nev" class="form-label">Név</label>
  <input type="text" id="nev" name="nev" class="form-control" [(ngModel)]="nev">
  <label for="telefon" class="form-label mt-2">Telefon</label>
  <input type="text" id="telefon" name="telefon" class="form-control" [(ngModel)]="telefon">
  <button type="button" class="btn btn-primary mt-3" (click)="hozzaad()">Hozzáad</button>

  @if (hiba) {
    <div class="alert alert-danger mt-3">{{ hiba }}</div>
  }

  <ul class="mt-3">
    @for (f of foglalasok; track $index) {
      <li>{{ f.toString() }}</li>
    }
  </ul>
</div>
```

```
//---------- Terminál: Git (a munkamappában, a legelején) ----------
git init -b main
git add .
git commit -m "Kiinduló projekt"

//---------- Terminál: commit minden feladat után (beszédes üzenet) ----------
git add .
git commit -m "Aloldalak és routing elkészítése"

git add .
git commit -m "Foglalas osztály és űrlap működése"

//---------- Terminál: a 4. feladat külön ágon ----------
git checkout -b termekajanlo
git add .
git commit -m "Termékajánló widget elkészítése"
git checkout main
git merge termekajanlo

//---------- Terminál: build ----------
ng build

//---------- .gitignore (ha nincs benne, ez a sor kell) ----------
/node_modules

//---------- firebase.json (a projekt gyökerébe; a "kavezo" helyett az angular.json-ben lévő projektnév) ----------
{
  "hosting": {
    "public": "dist/kavezo/browser",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      { "source": "**", "destination": "/index.html" }
    ]
  }
}

//---------- README.md ----------
# Kávézó alkalmazás

## Build
Parancs: `ng build`
Kimeneti mappa: `dist/kavezo/browser`

## Publikálás Firebase Hostingra
1. Bejelentkezés: `firebase login`
2. Projekt beállítása: `firebase use --add`
3. Build: `ng build`
4. Publikálás: `firebase deploy`
