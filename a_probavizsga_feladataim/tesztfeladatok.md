# Próbavizsga tesztfeladatok

> Angular 17+, standalone komponensek (`app.routes.ts`, `app.config.ts`).
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


### Mappastruktúra

```text
src/
├── index.html                          ← Bootstrap CDN (ha a váz nem tartalmazza)
└── app/
    ├── _colors.scss                    ← a vázból ($kiemeles), NE írd felül
    ├── app.config.ts                   ← a vázból, NE írd át (provideRouter)
    ├── app.routes.ts                   ← 3. feladat
    ├── app.component.ts                ← 3–5. feladat (imports)
    ├── app.component.html              ← navbar + router-outlet + 3 widget + űrlap + lista
    ├── konyv.ts                        ← 5. feladat
    ├── fooldal/  fooldal.component.ts | .html
    ├── scifi/    scifi.component.ts   | .html
    ├── humor/    humor.component.ts   | .html
    └── konyvajanlo/ konyvajanlo.component.ts | .html | .scss
```

### Parancsok

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
ng test
```

---

### 3. feladat – Routing, aloldalak, navbar

```
//---------- src/app/app.routes.ts ----------
import { Routes } from '@angular/router';
import { FooldalComponent } from './fooldal/fooldal.component';
import { ScifiComponent } from './scifi/scifi.component';
import { HumorComponent } from './humor/humor.component';

export const routes: Routes = [
  { path: '', component: FooldalComponent },
  { path: 'scifi', component: ScifiComponent },
  { path: 'humor', component: HumorComponent },
];

//---------- src/app/app.component.ts ----------
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}

//---------- src/app/app.component.html ----------
<nav class="navbar navbar-expand navbar-dark bg-dark">
  <div class="container-fluid">
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
  </div>
</nav>
<router-outlet />

//---------- src/app/fooldal/fooldal.component.ts ----------
import { Component } from '@angular/core';

@Component({
  selector: 'app-fooldal',
  standalone: true,
  templateUrl: './fooldal.component.html',
})
export class FooldalComponent {}

//---------- src/app/fooldal/fooldal.component.html ----------
<p>IDE a feladat3-tartalom.txt főoldali szövege</p>

//---------- src/app/scifi/scifi.component.ts ----------
import { Component } from '@angular/core';

@Component({
  selector: 'app-scifi',
  standalone: true,
  templateUrl: './scifi.component.html',
})
export class ScifiComponent {}

//---------- src/app/scifi/scifi.component.html ----------
<ul>
  <li>IDE az 1. sci-fi könyv a txt-ből</li>
  <li>IDE a 2. sci-fi könyv a txt-ből</li>
</ul>

//---------- src/app/humor/humor.component.ts ----------
import { Component } from '@angular/core';

@Component({
  selector: 'app-humor',
  standalone: true,
  templateUrl: './humor.component.html',
})
export class HumorComponent {}

//---------- src/app/humor/humor.component.html ----------
<table class="table">
  <tr>
    <th>Cím</th>
    <th>Szerző</th>
  </tr>
  <tr>
    <td>IDE az 1. adat a txt-ből</td>
    <td>IDE az 1. adat a txt-ből</td>
  </tr>
</table>
```

---

### 4. feladat – Könyvajánló widget

```
//---------- src/app/konyvajanlo/konyvajanlo.component.ts ----------
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-konyvajanlo',
  standalone: true,
  templateUrl: './konyvajanlo.component.html',
  styleUrl: './konyvajanlo.component.scss',
})
export class KonyvajanloComponent {
  @Input() nev: string = '';
  @Input() ar: number = 0;
  @Input() akcio: boolean = false;
}

//---------- src/app/konyvajanlo/konyvajanlo.component.html ----------
<h3>{{ nev }}</h3>
<p [class.akcio]="akcio">{{ ar }}</p>

//---------- src/app/konyvajanlo/konyvajanlo.component.scss ----------
@use '../colors';   // ha a _colors.scss az src/-ben van: @use '../../colors';

.akcio {
  font-weight: bold;
  font-size: 1.5em;
  color: colors.$kiemeles;
}

//---------- src/app/app.component.ts (a 3. feladatos felülírva) ----------
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { KonyvajanloComponent } from './konyvajanlo/konyvajanlo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, KonyvajanloComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}

//---------- src/app/app.component.html (a <router-outlet /> ALÁ) ----------
<app-konyvajanlo nev="A Gyűrű Szövetsége" [ar]="2500"></app-konyvajanlo>
<app-konyvajanlo nev="A Két Torony" [ar]="2000"></app-konyvajanlo>
<app-konyvajanlo nev="A Király Visszatér" [ar]="999" [akcio]="true"></app-konyvajanlo>
```

---

### 5. feladat – Konyv osztály, űrlap, lista

```
//---------- src/app/konyv.ts ----------
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

//---------- src/app/app.component.ts (VÉGLEGES, a 4. feladatos felülírva) ----------
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { KonyvajanloComponent } from './konyvajanlo/konyvajanlo.component';
import { Konyv } from './konyv';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FormsModule, KonyvajanloComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
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

//---------- src/app/app.component.html (a widgetek ALÁ; a vázban lévő űrlapba csak a [(ngModel)] és a (click) kell) ----------
<div class="container mt-4">
  <h4>Új könyv</h4>
  <label for="cim" class="form-label">Cím</label>
  <input type="text" id="cim" name="cim" class="form-control" [(ngModel)]="cim">
  <label for="isbn" class="form-label mt-2">ISBN</label>
  <input type="text" id="isbn" name="isbn" class="form-control" [(ngModel)]="isbn">
  <button type="button" class="btn btn-primary mt-3" (click)="hozzaad()">Hozzáad</button>

  @if (hiba) {
    <div class="alert alert-danger mt-3">{{ hiba }}</div>
  }

  <ul class="mt-3">
    @for (k of konyvek; track $index) {
      <li>{{ k.toString() }}</li>
    }
  </ul>
</div>
```

---

### Amire a teszt figyel

- Linkszöveg pontosan: **Főoldal**, **Sci-Fi**, **Humor**; `routerLink`, NEM `href`.
- Sci-Fi: `<ul>` (nem `<ol>`). Humor: első sor `<th>`.
- `[ar]="2500"` szögletes zárójellel (különben szöveg lesz).
- `#cim`, `#isbn`; `toString()` pontosan `Cím (ISBN)`.
- Hibás adatnál a lista nem változik; siker után a mezők kiürülnek.
- `Can't bind to 'ngModel'` → `FormsModule` hiányzik az `imports`-ból.
- `'app-konyvajanlo' is not a known element` → `KonyvajanloComponent` hiányzik az `imports`-ból.
- Bootstrap nincs a vázban → `src/index.html` `<head>`: `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">`
