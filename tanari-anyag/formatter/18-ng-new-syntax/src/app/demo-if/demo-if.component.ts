import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-if',
  templateUrl: './demo-if.component.html',
  styleUrl: './demo-if.component.sass'
})
export class DemoIfComponent {
  isLoggedIn: boolean = false

  changeUserStatus(): void {
    this.isLoggedIn = !this.isLoggedIn
  }
}
