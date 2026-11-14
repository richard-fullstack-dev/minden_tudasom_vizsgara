import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-switch',
  templateUrl: './demo-switch.component.html',
  styleUrl: './demo-switch.component.sass'
})
export class DemoSwitchComponent {
  role: string = "admin"
  roles: string[] = ["admin", "user", "x"]
  roleIndex: number = 0

  changeRole(): void {
    this.role = this.roles[this.roleIndex++]
  }
}
