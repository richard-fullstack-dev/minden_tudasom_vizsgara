# Otthoni saját próbafeladatok vizsgafelkészülésre

8 src/app/app-routing.module.ts

```
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooldalComponent } from './fooldal/fooldal.component';
import { FilmekComponent } from './filmek/filmek.component';

const routes: Routes = [
  { path: '', component: FooldalComponent },
  { path: 'filmek', component: FilmekComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

src/app/fooldal/fooldal.component.html

```
<p>Üdvözöljük a mozi oldalán!</p>
```

src/app/app.component.html

```
<nav class="navbar navbar-expand navbar-dark bg-dark">
  <div class="container-fluid">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" routerLink="/">Főoldal</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="/filmek">Filmek</a>
      </li>
    </ul>
  </div>
</nav>

<div class="container mt-3">
  <router-outlet></router-outlet>
</div>
```

src/app/filmkartya/filmkartya.component.ts

```
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filmkartya',
  templateUrl: './filmkartya.component.html',
  styleUrl: './filmkartya.component.scss'
})
export class FilmkartyaComponent {
  @Input() cim: string = '';
  @Input() ev: number = 0;
  @Input() ujdonsag: boolean = false;
}
```

src/app/filmkartya/filmkartya.component.html

```
<h3>{{ cim }}</h3>
<p [class.ujdonsag]="ujdonsag">{{ ev }}</p>
```

src/app/filmkartya/filmkartya.component.scss

```
.ujdonsag {
  font-weight: bold;
  color: red;
}
```

src/app/film.ts

```
export class Film {
  #cim: string;
  #ev: number;

  constructor(cim: string, ev: number) {
    if (cim.trim() === '') {
      throw new Error('A cím nem lehet üres!');
    }
    if (Math.floor(ev) !== ev || ev < 1900 || ev > 2100) {
      throw new Error('Az év 1900 és 2100 közötti egész szám lehet!');
    }
    this.#cim = cim;
    this.#ev = ev;
  }

  getCim(): string {
    return this.#cim;
  }

  getEv(): number {
    return this.#ev;
  }

  toString(): string {
    return `${this.#cim} (${this.#ev})`;
  }
}
```

src/app/filmek/filmek.component.ts

```
import { Component } from '@angular/core';
import { Film } from '../film';

@Component({
  selector: 'app-filmek',
  templateUrl: './filmek.component.html',
  styleUrl: './filmek.component.scss'
})
export class FilmekComponent {
  cim: string = '';
  ev: number | null = null;
  filmek: Film[] = [];

  hozzaad(): void {
    try {
      this.filmek.push(new Film(this.cim, Number(this.ev)));
      this.cim = '';
      this.ev = null;
    } catch (error) {
    }
  }
}
```

src/app/filmek/filmek.component.html

```
<h4>Új film</h4>
<form>
  <label for="cim" class="form-label">Cím</label>
  <input type="text" id="cim" name="cim" class="form-control" [(ngModel)]="cim">
  <label for="ev" class="form-label mt-2">Év</label>
  <input type="number" id="ev" name="ev" class="form-control" [(ngModel)]="ev">
  <button type="button" class="btn btn-primary mt-3" (click)="hozzaad()">Hozzáadás</button>
</form>

<div class="mt-3">
  <app-filmkartya *ngFor="let f of filmek" [cim]="f.getCim()" [ev]="f.getEv()"></app-filmkartya>
</div>
```

src/app/app.module.ts

```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooldalComponent } from './fooldal/fooldal.component';
import { FilmekComponent } from './filmek/filmek.component';
import { FilmkartyaComponent } from './filmkartya/filmkartya.component';

@NgModule({
  declarations: [
    AppComponent,
    FooldalComponent,
    FilmekComponent,
    FilmkartyaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
