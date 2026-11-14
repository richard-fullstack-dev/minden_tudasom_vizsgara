import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from '../models/login-model';
import { TokenModel } from '../models/token-model';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  // A login megkap egy paramétert login(idemegkapja) pl (loginModel: LoginModel)
  // { majd this.http.post <any> (https://api.sipos.hu/login, loginModel).subscribe 
  // { ide tovább next: response amire a helyest mondom meg majd egy error:error

  login(loginModel: LoginModel): void {
    this.http.post<TokenModel>(environment.apiLogin, loginModel).subscribe({
      next: response => {
        console.log(response)

        //localstorage.setItem("auth-token", response.token)
        this.saveToken(response.token)
        this.router.navigateByUrl("list")
      },

      // ha ez a console ellenőrzés jó akkor lejebb megoldás browserbe
      error: error => {
        console.log(error)
      }
    })
  }
    saveToken(token: string): void {
    localStorage.setItem(environment.authTokenKey, token)
  }

  logout(): void {
    this.removeToken()
  }

// ez itt lent törli a tokent igy kijelentkezés megvalósul
  removeToken(): void {
    localStorage.removeItem(environment.authTokenKey)
    this.router.navigateByUrl("login")
  }

  getToken(): string {
    return (localStorage.getItem(environment.authTokenKey) ?? "")
  }
   
//megnézi be vagyok lépve vagy sem ez kell a logouthoz
  isLoggedIn(): boolean {
    return (localStorage.getItem(environment.authTokenKey) ?? "").length > 10
  }

}
