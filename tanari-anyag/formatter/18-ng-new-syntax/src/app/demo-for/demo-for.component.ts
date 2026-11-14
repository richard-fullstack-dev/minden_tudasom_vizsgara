import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-for',
  templateUrl: './demo-for.component.html',
  styleUrl: './demo-for.component.sass'
})
export class DemoForComponent {
  score: number = 50
  users: any[] = [
    { id: "10", name: "john" },
    { id: "20", name: "mark" },
    { id: "30", name: "steve" }
  ]

  changeNumber(): void {
    this.score = this.score + 10
  }

  removeUser(): void {
    this.users = this.users.slice(1)
  }
}
