// MIRE JÓ:   bejelentkezés: a token (karszalag) kérése, elmentése, törlése, "be vagyok-e lépve".
// MIKOR:     login / logout feladatnál. Részletes magyarázat: README.md (K22)
// ÁTÍRNI:    az URL, a LoginModel/TokenModel mezői, a navigáció célja, a localStorage kulcs.
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from '../models/login-model';
import { TokenModel } from '../models/token-model';

@Injectable({ providedIn: 'root' })
export class AuthService {

  // HttpClient = kérések küldése; Router = oldalváltás (a konstruktorban kérjük el)
  constructor(private http: HttpClient, private router: Router) { }

  login(loginModel: LoginModel): void {
    this.http.post<TokenModel>("https://api.valami.hu/login", loginModel).subscribe({
      next: response => {
        console.log(response)                                  // ELSŐ LÉPÉS: nézd meg, milyen alakú a válasz
        localStorage.setItem("auth-token", response.token)     // a karszalag elmentése
        this.router.navigateByUrl("list")                      // belépés után a listára
      },
      error: error => {
        console.log(error)                                     // rossz adat esetén ide jön
      }
    })
  }

  logout(): void {
    localStorage.removeItem("auth-token")                      // karszalag eldobása
    this.router.navigateByUrl("login")
  }

  getToken(): string {
    return localStorage.getItem("auth-token") ?? ""            // ?? "" = ha nincs, üres szöveg
  }

  isLoggedIn(): boolean {
    return this.getToken().length > 10                         // hosszú szöveg = van token
  }
}
