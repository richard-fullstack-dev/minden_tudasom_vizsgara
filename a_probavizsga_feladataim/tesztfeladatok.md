# Otthoni saját próbafeladatok vizsgafelkészülésre

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
