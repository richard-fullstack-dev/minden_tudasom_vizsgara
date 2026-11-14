// MIRE JÓ:   navigációs sáv, ami belépéstől függően mutat/rejt menüpontokat.
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent {
  constructor(public authService: AuthService) { }
}
