# Otthoni saját próbafeladatok vizsgafelkészülésre

1 index.html

```
<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Antikvárium</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">Antikvárium</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="menu">
          <ul class="navbar-nav">
            <li class="nav-item"><a class="nav-link" href="#konyveink">Könyveink</a></li>
            <li class="nav-item"><a class="nav-link" href="#kapcsolat">Kapcsolat</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <main class="container my-4">
    <section id="konyveink">
      <h2>Könyveink</h2>
      <div class="row">
        <div class="col-md-4 mb-3">
          <div class="card">
            <div class="card-body">
              <h5>A Gyűrű Szövetsége</h5>
              <p>2500 Ft</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="card">
            <div class="card-body">
              <h5>A Két Torony</h5>
              <p>2000 Ft</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="card">
            <div class="card-body">
              <h5>A Király Visszatér <span class="badge bg-danger">AKCIÓ</span></h5>
              <p>999 Ft</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="kapcsolat">
      <h2>Kapcsolat</h2>
      <form>
        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="nev" class="form-label">Név</label>
            <input type="text" id="nev" class="form-control" autofocus>
          </div>
          <div class="col-md-6 mb-3">
            <label for="email" class="form-label">E-mail</label>
            <input type="email" id="email" class="form-control" required>
          </div>
          <div class="col-md-6 mb-3">
            <label for="uzenet" class="form-label">Üzenet</label>
            <textarea id="uzenet" class="form-control"></textarea>
          </div>
        </div>
        <button type="submit" class="btn btn-success">Küldés</button>
      </form>
    </section>
  </main>

  <footer class="bg-dark text-white text-center p-3">
    Antikvárium
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

# Otthoni gyakorló példafeladat

style.css

```
body {
  background-color: red;
}

@media (max-width: 992px) {
  body {
    background-color: blue;
  }
}

@media (max-width: 599px) {
  body {
    background-color: green;
  }
}

.card {
  transition: transform 0.5s;
}

.card:hover {
  transform: scale(1.05);
}
```

# Otthoni gyakorlás feladat

2 script.js

```
const konyvek = [
  { cim: "A Gyűrű Szövetsége", ar: 2500, akcio: false },
  { cim: "A Két Torony", ar: 2000, akcio: false },
  { cim: "A Király Visszatér", ar: 999, akcio: true },
  { cim: "Dűne", ar: 3200, akcio: true },
  { cim: "Alapítvány", ar: 1800, akcio: false }
];

function atlagar(lista) {
  let osszeg = 0;
  for (let i = 0; i < lista.length; i++) {
    osszeg += lista[i].ar;
  }
  return Math.round(osszeg / lista.length);
}

function legdragabb(lista) {
  let max = lista[0];
  for (let i = 1; i < lista.length; i++) {
    if (lista[i].ar > max.ar) {
      max = lista[i];
    }
  }
  return max;
}

function akciosDarab(lista) {
  let db = 0;
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].akcio) {
      db++;
    }
  }
  return db;
}

function keres(lista, szoveg) {
  const eredmeny = [];
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].cim.toLowerCase().includes(szoveg.toLowerCase())) {
      eredmeny.push(lista[i]);
    }
  }
  return eredmeny;
}

function rendez(lista) {
  const masolat = lista.slice();
  masolat.sort(function (a, b) {
    return a.ar - b.ar;
  });
  return masolat;
}

function ajandek(lista, osszeg) {
  let talalat = null;
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].ar > osszeg) {
      if (talalat === null || lista[i].ar < talalat.ar) {
        talalat = lista[i];
      }
    }
  }
  return talalat;
}

function betoltes(szoveg) {
  return JSON.parse(szoveg);
}

function mentes(lista) {
  return JSON.stringify(lista);
}

module.exports = { konyvek, atlagar, legdragabb, akciosDarab, keres, rendez, ajandek, betoltes, mentes };
```

# Még gyakorlás otthonra

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

# Otthoni gyakorló feladat

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

# Gyakorlás otthonra

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

# Otthoni gyakorló példafeladat

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

# Otthoni gyakorlás feladat

6 src/app/models/login-model.ts

```
export class LoginModel {
  username: string = '';
  password: string = '';
}
```

# Még gyakorlás otthonra

src/app/models/token-model.ts

```
export class TokenModel {
  token: string = '';
}
```

# Otthoni gyakorló feladat

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

# Gyakorlás otthonra

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

# Otthoni gyakorló példafeladat

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

# Otthoni gyakorlás feladat

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

# Még gyakorlás otthonra

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

# Otthoni gyakorló feladat

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

# Gyakorlás otthonra

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
