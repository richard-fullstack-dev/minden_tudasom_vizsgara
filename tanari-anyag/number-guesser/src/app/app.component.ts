import { Component } from '@angular/core';
import { GameItem } from './game-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  generatedNumber: number = this.getRandomInteger(10,40)
  guesses: GameItem[] = []
  tip: number = 0
  endOfGame: boolean = false
  tipCounter: number = 0

  getRandomInteger(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  getTipClass(gameItem: GameItem): string {
    if (gameItem.response.includes("VÉGE")) return "alert alert-success"
    else return "alert alert-danger"
  }

  check(): void {
    this.tipCounter++
    if (this.generatedNumber == this.tip) {
      // játék vége
      this.guesses.push(new GameItem(this.tip, "JÁTÉK VÉGE"))
      this.endOfGame = true
    } else if (this.generatedNumber > this.tip) {
      // nagyobbra gondoltam
      this.guesses.push(new GameItem(this.tip, "NAGYOBBRA GONDOLTAM"))
    } else {
      // kisebbre gondoltam
      this.guesses.push(new GameItem(this.tip, "KISEBBRE GONDOLTAM"))
    }
  }
}
