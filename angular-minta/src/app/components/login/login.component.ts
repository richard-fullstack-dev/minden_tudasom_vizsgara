// MIRE JÓ:   login oldal: űrlap, ami a LoginModel-be ír, a gomb az AuthService.login()-t hívja.
// MIKOR:     login feladatnál. A teljes recept: README.md (K22)
import { Component } from '@angular/core';
import { LoginModel } from '../../models/login-model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  loginModel: LoginModel = new LoginModel()          // ebbe ír az űrlap

  constructor(public authService: AuthService) { }   // public: a sablon is látja
}
