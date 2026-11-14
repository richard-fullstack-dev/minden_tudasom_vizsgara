// MIRE JÓ:   a termékek listája (memóriában), keresés név szerint.
import { Injectable } from "@angular/core";
import { Termek } from "../models/termek";

@Injectable({ providedIn: "root" })
export class TermekService {
  termekek: Termek[] = []
  private nextId: number = 1

  constructor() {
    this.felvesz(new Termek("Espresso", 700, 10, false))
    this.felvesz(new Termek("Latte", 900, 5, true))
    this.felvesz(new Termek("Cappuccino", 850, 0, false))      // elfogyott
    this.felvesz(new Termek("Brownie", 650, 8, true))
  }

  felvesz(termek: Termek): void {
    termek.id = this.nextId++
    this.termekek.push(termek)
  }

  keres(szoveg: string): Termek[] {
    return this.termekek.filter(x => x.nev.toLowerCase().includes(szoveg.toLowerCase()))
  }

  getById(id: number): Termek | undefined {
    return this.termekek.find(x => x.id === id)
  }
}
