# Otthoni saját próbafeladatok vizsgafelkészülésre

**src/app/konyv.ts**

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

**src/app/models/login-model.ts**

```
export class LoginModel {
  username: string = '';
  password: string = '';
}
```

**src/app/models/token-model.ts**

```
export class TokenModel {
  token: string = '';
}
```

**src/app/services/auth.service.ts**

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
  apiUrl: string = 'http://localhost:3000/login';
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

**src/app/login/login.component.ts**

```
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginModel } from '../models/login-model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  loginModel: LoginModel = new LoginModel();

  constructor(public authService: AuthService) {}
}
```

**src/app/login/login.component.html**

```
<h4>Belépés</h4>

<label for="username" class="form-label">Felhasználónév</label>
<input type="text" id="username" name="username" class="form-control mb-2" [(ngModel)]="loginModel.username">

<label for="password" class="form-label">Jelszó</label>
<input type="password" id="password" name="password" class="form-control mb-2" [(ngModel)]="loginModel.password">

<button type="button" class="btn btn-success" (click)="authService.login(loginModel)">Belépés</button>

@if (authService.hiba) {
  <div class="alert alert-danger mt-3">{{ authService.hiba }}</div>
}
```

**src/app/app.routes.ts**

```
import { Routes } from '@angular/router';
import { KonyvekComponent } from './konyvek/konyvek.component';
import { UjKonyvComponent } from './uj-konyv/uj-konyv.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';

export const routes: Routes = [
  { path: '', redirectTo: 'konyvek', pathMatch: 'full' },
  { path: 'konyvek', component: KonyvekComponent },
  { path: 'uj-konyv', component: UjKonyvComponent, canActivate: [AuthService] },
  { path: 'login', component: LoginComponent },
];
```

**src/app/app.config.ts**

```
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient()]
};
```

**src/app/app.component.ts**

```
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Konyv } from './konyv';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  cim: string = '';
  isbn: string = '';
  hiba: string = '';
  konyvek: Konyv[] = [];

  constructor(public authService: AuthService) {}

  hozzaad(): void {
    try {
      this.konyvek.push(new Konyv(this.cim, this.isbn));
      this.cim = '';
      this.isbn = '';
      this.hiba = '';
    } catch (error) {
      this.hiba = 'Hibás adatok!';
    }
  }
}
```

**src/app/app.component.html**

```
<nav class="navbar navbar-expand navbar-dark bg-dark">
  <div class="container-fluid">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" routerLink="/konyvek">Könyvek</a>
      </li>
      @if (authService.isLoggedIn()) {
        <li class="nav-item">
          <a class="nav-link" routerLink="/uj-konyv">Új könyv</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" style="cursor: pointer;" (click)="authService.logout()">Logout</a>
        </li>
      } @else {
        <li class="nav-item">
          <a class="nav-link" routerLink="/login">Login</a>
        </li>
      }
    </ul>
  </div>
</nav>

<div class="container mt-4">
  <router-outlet />

  <h4 class="mt-4">Új könyv</h4>
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
