//==================== 3. FELADAT ====================

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


//==================== 4. FELADAT ====================

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
<p [class.akcio]="akcio">{{ ar }} Ft</p>

//---------- src/app/konyvajanlo/konyvajanlo.component.scss ----------
@use '../../colors' as c;

.akcio {
  font-weight: bold;
  font-size: 1.5em;
  color: c.$VALTOZO_NEVE;
}

//---------- src/app/app.component.ts ----------
import { Component } from '@angular/core';
import { KonyvajanloComponent } from './konyvajanlo/konyvajanlo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [KonyvajanloComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}

//---------- src/app/app.component.html ----------
<app-konyvajanlo nev="A Gyűrű Szövetsége" [ar]="2500" [akcio]="false" />
<app-konyvajanlo nev="A Két Torony" [ar]="2000" [akcio]="false" />
<app-konyvajanlo nev="A Király Visszatér" [ar]="999" [akcio]="true" />


//==================== 5. FELADAT ====================

//---------- src/app/konyv.ts ----------
export class Konyv {
  #cim: string;
  #isbn: string;

  constructor(cim: string, isbn: string) {
    if (!cim || cim.trim() === '') {
      throw new Error('A cím nem lehet üres!');
    }
    if (!/^(\d{10}|\d{13})$/.test(isbn)) {
      throw new Error('Az ISBN pontosan 10 vagy 13 számjegy lehet!');
    }
    this.#cim = cim;
    this.#isbn = isbn;
  }

  toString(): string {
    return `${this.#cim} (${this.#isbn})`;
  }
}

//---------- src/app/app.component.ts ----------
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Konyv } from './konyv';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
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

//---------- src/app/app.component.html ----------
<form (ngSubmit)="hozzaad()">
  <input name="cim" placeholder="Cím" [(ngModel)]="cim">
  <input name="isbn" placeholder="ISBN" [(ngModel)]="isbn">
  <button type="submit">Hozzáad</button>
</form>

<p>{{ hiba }}</p>

<ul>
  @for (k of konyvek; track $index) {
    <li>{{ k.toString() }}</li>
  }
</ul>
