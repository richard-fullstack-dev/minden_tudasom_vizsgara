# Otthoni saját próbafeladatok vizsgafelkészülésre

3 src/app/app-routing.module.ts

```
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooldalComponent } from './fooldal/fooldal.component';
import { KaveComponent } from './kave/kave.component';
import { SutikComponent } from './sutik/sutik.component';

const routes: Routes = [
  { path: '', component: FooldalComponent },
  { path: 'kave', component: KaveComponent },
  { path: 'sutik', component: SutikComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

otthoni gyakorló példafeladat

src/app/fooldal/fooldal.component.html

```
<p>(a feladat3-tartalom.txt főoldali szövege)</p>
```

otthoni gyakorlás feladat

src/app/kave/kave.component.html

```
<ul>
  <li>(a feladat3-tartalom.txt kávék listájának 1. sora)</li>
  <li>(a feladat3-tartalom.txt kávék listájának 2. sora)</li>
  <li>(a feladat3-tartalom.txt kávék listájának 3. sora)</li>
</ul>
```

még gyakorlás otthonra

src/app/sutik/sutik.component.html

```
<table class="table">
  <tr>
    <th>(a feladat3-tartalom.txt sütik táblázatának 1. oszlopcíme)</th>
    <th>(a feladat3-tartalom.txt sütik táblázatának 2. oszlopcíme)</th>
  </tr>
  <tr>
    <td>(1. sor 1. adat)</td>
    <td>(1. sor 2. adat)</td>
  </tr>
  <tr>
    <td>(2. sor 1. adat)</td>
    <td>(2. sor 2. adat)</td>
  </tr>
</table>
```

otthoni gyakorló feladat

src/app/app.component.html

```
<nav class="navbar navbar-expand navbar-dark bg-dark">
  <div class="container-fluid">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" routerLink="/">Főoldal</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="/kave">Kávék</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="/sutik">Sütik</a>
      </li>
    </ul>
  </div>
</nav>

<div class="container mt-3">
  <router-outlet></router-outlet>
</div>
```

gyakorlás otthonra

src/app/app.module.ts

```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooldalComponent } from './fooldal/fooldal.component';
import { KaveComponent } from './kave/kave.component';
import { SutikComponent } from './sutik/sutik.component';

@NgModule({
  declarations: [
    AppComponent,
    FooldalComponent,
    KaveComponent,
    SutikComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

otthoni gyakorló példafeladat

4 src/app/termekajanlo/termekajanlo.component.ts

```
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-termekajanlo',
  templateUrl: './termekajanlo.component.html',
  styleUrl: './termekajanlo.component.scss'
})
export class TermekajanloComponent {
  @Input() nev: string = '';
  @Input() ar: number = 0;
  @Input() akcio: boolean = false;
}
```

otthoni gyakorlás feladat

src/app/termekajanlo/termekajanlo.component.html

```
<h3>{{ nev }}</h3>
<p [ngClass]="{ akcio: akcio }">{{ ar }} Ft</p>
```

még gyakorlás otthonra

src/app/termekajanlo/termekajanlo.component.scss

```
@import '../colors';

.akcio {
  font-weight: bold;
  font-size: 1.5em;
  color: $kiemeles;
}
```

otthoni gyakorló feladat

src/app/app.component.html

```
<app-termekajanlo nev="Espresso" [ar]="700"></app-termekajanlo>
<app-termekajanlo nev="Latte" [ar]="900"></app-termekajanlo>
<app-termekajanlo nev="Flat white" [ar]="850" [akcio]="true"></app-termekajanlo>
```

gyakorlás otthonra

src/app/app.module.ts

```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TermekajanloComponent } from './termekajanlo/termekajanlo.component';

@NgModule({
  declarations: [
    AppComponent,
    TermekajanloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

otthoni gyakorló példafeladat

5 src/app/konyv.ts

```
export class Konyv {
  #cim: string;
  #isbn: string;

  constructor(cim: string, isbn: string) {
    if (cim.trim() === '') {
      throw new Error('A cím nem lehet üres!');
    }
    if (isbn.length !== 10 && isbn.length !== 13) {
      throw new Error('Az ISBN 10 vagy 13 karakter legyen!');
    }
    if (isNaN(Number(isbn))) {
      throw new Error('Az ISBN csak számjegy lehet!');
    }
    this.#cim = cim;
    this.#isbn = isbn;
  }

  toString(): string {
    return `${this.#cim} (${this.#isbn})`;
  }
}
```

otthoni gyakorlás feladat

src/app/app.module.ts

```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
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

még gyakorlás otthonra

src/app/app.component.ts

```
import { Component } from '@angular/core';
import { Konyv } from './konyv';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  cim: string = '';
  isbn: string = '';
  konyvek: Konyv[] = [];

  hozzaad(): void {
    try {
      this.konyvek.push(new Konyv(this.cim, this.isbn));
      this.cim = '';
      this.isbn = '';
    } catch (error) {
    }
  }
}
```

otthoni gyakorló feladat

src/app/app.component.html

```
<div class="container mt-4">
  <h4>Új könyv</h4>
  <form>
    <label for="cim" class="form-label">Cím</label>
    <input type="text" id="cim" name="cim" class="form-control" [(ngModel)]="cim">
    <label for="isbn" class="form-label mt-2">ISBN</label>
    <input type="text" id="isbn" name="isbn" class="form-control" [(ngModel)]="isbn">
    <button type="button" class="btn btn-primary mt-3" (click)="hozzaad()">Hozzáad</button>
  </form>

  <ul class="mt-3">
    <li *ngFor="let k of konyvek">{{ k.toString() }}</li>
  </ul>
</div>
```

gyakorlás otthonra

6 src/app/models/login-model.ts

```
export class LoginModel {
  username: string = '';
  password: string = '';
}
```

otthoni gyakorló példafeladat

src/app/models/token-model.ts

```
export class TokenModel {
  token: string = '';
}
```

otthoni gyakorlás feladat

src/app/services/auth.service.ts

```
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from '../models/login-model';
import { TokenModel } from '../models/token-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl: string = '(a feladat függelékében megadott API cím)/login';
  hiba: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  login(loginModel: LoginModel): void {
    this.http.post<TokenModel>(this.apiUrl, loginModel).subscribe({
      next: valasz => {
        localStorage.setItem('auth-token', valasz.token);
        this.hiba = '';
        this.router.navigateByUrl('konyvek');
      },
      error: () => {
        this.hiba = 'Hibás felhasználónév vagy jelszó!';
      }
    });
  }

  logout(): void {
    localStorage.removeItem('auth-token');
    this.router.navigateByUrl('login');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('auth-token') !== null;
  }

  canActivate(): boolean {
    if (this.isLoggedIn()) {
      return true;
    }
    this.router.navigateByUrl('login');
    return false;
  }
}
```

még gyakorlás otthonra

src/app/login/login.component.ts

```
import { Component } from '@angular/core';
import { LoginModel } from '../models/login-model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginModel: LoginModel = new LoginModel();

  constructor(public authService: AuthService) {}
}
```

otthoni gyakorló feladat

src/app/login/login.component.html

```
<h4>Belépés</h4>

<label for="username" class="form-label">Felhasználónév</label>
<input type="text" id="username" name="username" class="form-control mb-2" [(ngModel)]="loginModel.username">

<label for="password" class="form-label">Jelszó</label>
<input type="password" id="password" name="password" class="form-control mb-2" [(ngModel)]="loginModel.password">

<button type="button" class="btn btn-success" (click)="authService.login(loginModel)">Belépés</button>

<div class="alert alert-danger mt-3" *ngIf="authService.hiba">{{ authService.hiba }}</div>
```

gyakorlás otthonra

src/app/app-routing.module.ts

```
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KonyvekComponent } from './konyvek/konyvek.component';
import { UjKonyvComponent } from './uj-konyv/uj-konyv.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  { path: 'konyvek', component: KonyvekComponent },
  { path: 'uj-konyv', component: UjKonyvComponent, canActivate: [AuthService] },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

otthoni gyakorló példafeladat

src/app/app.module.ts

```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KonyvekComponent } from './konyvek/konyvek.component';
import { UjKonyvComponent } from './uj-konyv/uj-konyv.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    KonyvekComponent,
    UjKonyvComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

otthoni gyakorlás feladat

src/app/app.component.ts

```
import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(public authService: AuthService) {}
}
```

még gyakorlás otthonra

src/app/app.component.html

```
<nav class="navbar navbar-expand navbar-dark bg-dark">
  <div class="container-fluid">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" routerLink="/konyvek">Könyvek</a>
      </li>
      <li class="nav-item" *ngIf="authService.isLoggedIn()">
        <a class="nav-link" routerLink="/uj-konyv">Új könyv</a>
      </li>
      <li class="nav-item" *ngIf="authService.isLoggedIn()">
        <a class="nav-link" style="cursor: pointer;" (click)="authService.logout()">Logout</a>
      </li>
      <li class="nav-item" *ngIf="!authService.isLoggedIn()">
        <a class="nav-link" routerLink="/login">Login</a>
      </li>
    </ul>
  </div>
</nav>

<div class="container mt-3">
  <router-outlet></router-outlet>
</div>
```

otthoni gyakorló feladat

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

gyakorlás otthonra

src/app/fooldal/fooldal.component.html

```
<p>Üdvözöljük a mozi oldalán!</p>
```

otthoni gyakorló példafeladat

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

otthoni gyakorlás feladat

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

még gyakorlás otthonra

src/app/filmkartya/filmkartya.component.html

```
<h3>{{ cim }}</h3>
<p [class.ujdonsag]="ujdonsag">{{ ev }}</p>
```

otthoni gyakorló feladat

src/app/filmkartya/filmkartya.component.scss

```
.ujdonsag {
  font-weight: bold;
  color: red;
}
```

gyakorlás otthonra

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

otthoni gyakorló példafeladat

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

otthoni gyakorlás feladat

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

még gyakorlás otthonra

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
