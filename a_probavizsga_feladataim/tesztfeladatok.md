# Próbavizsga tesztfeladatok

> Angular 17, NgModule-os projekt (`app.module.ts`), ahogy a tanári anyagban.
> VS Code-ban szép nézet: **Ctrl + Shift + V**

---

## Próbavizsga 1 – Könyvbemutató oldalak (2026.11.23.)

### A feladatlap (a fotóról átírva)

**3. feladat – Könyvbemutató oldalak (20 pont)**
Az antikvárium könyvbemutatót szervez. Készítse el ezen könyvek bemutató oldalainak egyetlen alkalmazásban.

- a) Készítsen három aloldalt, amelyek között frontend routing segítségével lehet navigálni. Zárójelben találja a URL-t.
  - Főoldal ( / )
  - Sci-Fi ( /scifi )
  - Humor ( /humor )
- b) A három aloldal tartalmát a `feladat3-tartalom.txt` fájlban találja. A főoldalt egy bekezdésben, a sci-fi oldalt egy sorszámozás nélküli listában, a humor oldalt egy táblázatban helyezze el (az első sor címsor).
- c) Készítsen vízszintes navigációs sávot az oldal tetején bootstrap segítségével. A linkek pontos megnevezését az a) feladatrészben találja. A linkeket úgy készítse el, hogy az oldal újratöltése nélkül is lehessen az aloldalak között navigálni!

**4. feladat – Könyvajánló widget (15 pont)**
Szükség van egy bármelyik oldalon elhelyezhető widget-re, amely segítségével egy adott könyvet lehet reklámozni.

- a) Készítsen egy új komponenst `konyvajanlo` néven. A komponens kis-nagybetűs használata, fájlneve feleljen meg a keretrendszerben elvártaknak.
- b) A komponenshez adja hozzá az alábbi paramétereket. A paraméterek kis-nagybetűs használata feleljen meg a keretrendszerben elvártaknak.
  - `nev`: string, a könyv neve
  - `ar`: number, a könyv ára
  - `akcio`: bool, a könyv jelenleg le van-e értékelve. Opcionális, az alapértéke false.
- c) A komponens megjelenítése az alábbi legyen:
  - A név 3-as szintű címsorként jelenjen meg.
  - Az ár bekezdésként, alapértelmezett formázással.
  - Ha az akcio paraméter true, akkor alkalmazza az ár bekezdésére az `akcio` class-t.
- d) Készítsen egy SCSS fájlt, amelyben definiálja a fent említett `akcio` class-t. Az akciós megjelenítés legyen:
  - Félkövér
  - Az alapértelmezettnél nagyobb betűméretű
  - A betűszín a `_colors.scss` fájlban definiált `kiemeles` változó legyen.
  - A definiált class legyen része a kimeneti CSS fájlnak.
- e) A fő komponensben, tesztelési célból hozzon létre három példányt az új komponensből, az alábbi adatokkal:
  - A Gyűrű Szövetsége, 2500 Ft, nem akciós
  - A Két Torony, 2000 Ft, nem akciós
  - A Király Visszatér, 999 Ft, akciós

**5. feladat – Új könyvek felvétele (20 pont)**
Az új könyveket létrehozó űrlap már elkészült, azonban még nem funkcionális. Tegye interaktívvá, és készítse el a hozzá tartozó adatszerkezetet!

- a) Készítse el a `Konyv` osztályt az alábbi leírás alapján:
  - Két privát tagváltozó: `#cim`: szöveg, `#isbn`: szöveg
  - Konstruktor, amely ellenőrzi:
    - a címnek nem lehet üres
    - a ISBN-nek pontosan 10 vagy 13 számjegy karakterből kell állnia (egyéb ellenőrzésre nincs szükség)
    - hibás paraméterek esetén kivétellel jelezze a hibát.
  - `toString` metódus, amely `Cím (ISBN)` formában adja vissza az adatokat.
- b) Az oldal fő komponensét egészítse ki, hogy képes legyen a könyvekből álló lista tárolására.
  - A form kitöltésével a lista végéhez a felhasználó képes legyen új adatot hozzáadni
  - Új könyv hozzáadásakor a formot ürítse

*(A fotó itt véget ér; ha a b) résznek van folytatása, a következő képpel kiegészítem.)*

---

### Mappastruktúra (egy képben)

```text
src/
├── index.html                      ← Bootstrap CDN (ha a váz nem tartalmazza)
└── app/
    ├── _colors.scss                ← a vázból ($kiemeles) – NE írd felül
    ├── konyv.ts                    ← 5. feladat: Konyv osztály
    ├── app.module.ts               ← declarations + FormsModule
    ├── app-routing.module.ts       ← 3. feladat: routes
    ├── app.component.ts            ← 5. feladat: lista + add()
    ├── app.component.html          ← navbar + router-outlet + 3 widget + űrlap + lista
    ├── fooldal/
    │   ├── fooldal.component.ts
    │   └── fooldal.component.html  ← <p>
    ├── scifi/
    │   ├── scifi.component.ts
    │   └── scifi.component.html    ← <ul><li>
    ├── humor/
    │   ├── humor.component.ts
    │   └── humor.component.html    ← <table> (első sor <th>)
    └── konyvajanlo/
        ├── konyvajanlo.component.ts    ← @Input nev, ar, akcio
        ├── konyvajanlo.component.html  ← <h3> + <p [class.akcio]>
        └── konyvajanlo.component.scss  ← .akcio
```

### Parancsok (sorrendben)

```bash
npm install
```

```bash
ng g c fooldal --skip-tests
```

```bash
ng g c scifi --skip-tests
```

```bash
ng g c humor --skip-tests
```

```bash
ng g c konyvajanlo --style=scss --skip-tests
```

```bash
ng serve -o
```

```bash
ng test
```

---

### 3. feladat – Routing, aloldalak, navbar

**`src/app/app-routing.module.ts`**
```ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooldalComponent } from './fooldal/fooldal.component';
import { ScifiComponent } from './scifi/scifi.component';
import { HumorComponent } from './humor/humor.component';

const routes: Routes = [
  { path: '', component: FooldalComponent },
  { path: 'scifi', component: ScifiComponent },
  { path: 'humor', component: HumorComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

**`src/app/fooldal/fooldal.component.html`** (a szöveg a txt FŐOLDAL részéből)
```html
<p>IDE A FŐOLDAL SZÖVEGE A feladat3-tartalom.txt-BŐL</p>
```

**`src/app/scifi/scifi.component.html`** (a txt SCI-FI sorai, soronként egy `<li>`)
```html
<ul>
  <li>1. sci-fi könyv a txt-ből</li>
  <li>2. sci-fi könyv a txt-ből</li>
  <li>3. sci-fi könyv a txt-ből</li>
</ul>
```

**`src/app/humor/humor.component.html`** (a txt HUMOR része, az első sor a fejléc)
```html
<table class="table">
  <thead>
    <tr>
      <th>Cím</th>
      <th>Szerző</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1. könyv címe</td>
      <td>1. könyv szerzője</td>
    </tr>
    <tr>
      <td>2. könyv címe</td>
      <td>2. könyv szerzője</td>
    </tr>
  </tbody>
</table>
```

---

### 4. feladat – Könyvajánló widget

**`src/app/konyvajanlo/konyvajanlo.component.ts`**
```ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-konyvajanlo',
  templateUrl: './konyvajanlo.component.html',
  styleUrl: './konyvajanlo.component.scss'
})
export class KonyvajanloComponent {
  @Input() nev: string = '';
  @Input() ar: number = 0;
  @Input() akcio: boolean = false;
}
```

**`src/app/konyvajanlo/konyvajanlo.component.html`**
```html
<h3>{{ nev }}</h3>
<p [class.akcio]="akcio">{{ ar }}</p>
```

**`src/app/konyvajanlo/konyvajanlo.component.scss`**
```scss
@use '../colors';

.akcio {
  font-weight: bold;
  font-size: 1.5em;
  color: colors.$kiemeles;
}
```

> Ha a `_colors.scss` nem az `src/app/`-ban van, hanem az `src/`-ben: `@use '../../colors';`

---

### 5. feladat – Konyv osztály, űrlap, lista

**`src/app/konyv.ts`**
```ts
export class Konyv {
  #cim: string;
  #isbn: string;

  constructor(cim: string, isbn: string) {
    if (cim.trim() === '') {
      throw new Error('A cím nem lehet üres!');
    }
    if (!/^(\d{10}|\d{13})$/.test(isbn)) {
      throw new Error('Az ISBN pontosan 10 vagy 13 számjegy legyen!');
    }
    this.#cim = cim;
    this.#isbn = isbn;
  }

  toString(): string {
    return `${this.#cim} (${this.#isbn})`;
  }
}
```

**`src/app/app.component.ts`**
```ts
import { Component } from '@angular/core';
import { Konyv } from './konyv';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  cim: string = '';
  isbn: string = '';
  hiba: string = '';
  konyvek: Konyv[] = [];

  hozzaad(): void {
    try {
      this.konyvek.push(new Konyv(this.cim, this.isbn));
      this.cim = '';
      this.isbn = '';
      this.hiba = '';
    } catch (e) {
      this.hiba = (e as Error).message;
    }
  }
}
```

> Ha az `app.component.ts`-ben van `styleUrl`/`styleUrls` sor, azt hagyd benne.

---

### Közös fájlok

**`src/app/app.component.html`** (az 5. feladat űrlapja a vázban már kész: csak a `[(ngModel)]`, `(click)`, a hibaüzenet és a lista kell bele; a mezők `id`-jét és osztályait hagyd úgy, ahogy a vázban van)
```html
<nav class="navbar navbar-expand bg-body-tertiary px-3">
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Főoldal</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" routerLink="/scifi" routerLinkActive="active">Sci-Fi</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" routerLink="/humor" routerLinkActive="active">Humor</a>
    </li>
  </ul>
</nav>

<div class="container mt-3">
  <router-outlet></router-outlet>

  <app-konyvajanlo nev="A Gyűrű Szövetsége" [ar]="2500"></app-konyvajanlo>
  <app-konyvajanlo nev="A Két Torony" [ar]="2000"></app-konyvajanlo>
  <app-konyvajanlo nev="A Király Visszatér" [ar]="999" [akcio]="true"></app-konyvajanlo>

  <h4 class="mt-4">Új könyv</h4>
  <label for="cim" class="form-label">Cím</label>
  <input type="text" id="cim" name="cim" class="form-control" [(ngModel)]="cim">
  <label for="isbn" class="form-label mt-2">ISBN</label>
  <input type="text" id="isbn" name="isbn" class="form-control" [(ngModel)]="isbn">
  <button type="button" class="btn btn-primary mt-3" (click)="hozzaad()">Hozzáad</button>

  <div class="alert alert-danger mt-3" *ngIf="hiba">{{ hiba }}</div>

  <ul class="mt-3">
    <li *ngFor="let k of konyvek">{{ k.toString() }}</li>
  </ul>
</div>
```

**`src/app/app.module.ts`**
```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooldalComponent } from './fooldal/fooldal.component';
import { ScifiComponent } from './scifi/scifi.component';
import { HumorComponent } from './humor/humor.component';
import { KonyvajanloComponent } from './konyvajanlo/konyvajanlo.component';

@NgModule({
  declarations: [
    AppComponent,
    FooldalComponent,
    ScifiComponent,
    HumorComponent,
    KonyvajanloComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

**`src/index.html`** (csak ha a vázban NINCS Bootstrap: a `<head>`-be)
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
```

---

### Amire a teszt figyel (pontlevonás ellen)

- Linkszöveg pontosan: **Főoldal**, **Sci-Fi**, **Humor**. `routerLink`, NEM `href`.
- Sci-Fi: `<ul>` (nem `<ol>`). Humor: első sor `<th>`.
- `nev`, `ar`, `akcio` kisbetűvel. `[ar]="2500"` szögletes zárójellel (különben szöveg lesz).
- Az ár `<p>`-ben, extra formázás nélkül; az `akcio` class csak akkor, ha `true`.
- `#cim`, `#isbn` (valódi privát). `toString()` pontosan: `Cím (ISBN)`.
- Hibás adatnál a lista nem változik; sikeres hozzáadás után a mezők kiürülnek.
- `Can't bind to 'ngModel'` → hiányzik a `FormsModule`.
- `'app-konyvajanlo' is not a known element` → hiányzik a `declarations`-ből.
