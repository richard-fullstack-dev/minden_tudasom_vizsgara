// MIRE JÓ:   a KOSÁR: hozzáadás (készlet-ellenőrzéssel), törlés, végösszeg, darabszám, mentés localStorage-ba.
// MIKOR:     "kosár", "összesítés", "darabszám jelvény a menüben", "mentse el".
import { Injectable } from "@angular/core";
import { KosarTetel } from "../models/kosar-tetel";
import { Termek } from "../models/termek";
import { TermekService } from "./termek.service";

@Injectable({ providedIn: "root" })
export class KosarService {
  tetelek: KosarTetel[] = []
  private kulcs: string = "kosar"

  constructor(private termekService: TermekService) {
    this.betoltes()
  }

  // true, ha sikerült; false, ha nincs elég készlet
  hozzaad(termek: Termek): boolean {
    let tetel = this.tetelek.find(x => x.termek.id === termek.id)
    let mennyi = tetel === undefined ? 0 : tetel.db
    if (mennyi + 1 > termek.keszlet) return false                  // nincs elég készlet
    if (tetel === undefined) this.tetelek.push(new KosarTetel(termek, 1))
    else tetel.db++
    this.mentes()
    return true
  }

  torol(tetel: KosarTetel): void {
    this.tetelek = this.tetelek.filter(x => x !== tetel)
    this.mentes()
  }

  uriti(): void {
    this.tetelek = []
    this.mentes()
  }

  get vegosszeg(): number {
    return this.tetelek.reduce((a, x) => a + x.osszeg, 0)
  }

  get darabszam(): number {
    return this.tetelek.reduce((a, x) => a + x.db, 0)
  }

  // csak az azonosítót és a darabszámot mentjük (a terméket az azonosító alapján keressük vissza)
  private mentes(): void {
    let adat = this.tetelek.map(x => ({ id: x.termek.id, db: x.db }))
    localStorage.setItem(this.kulcs, JSON.stringify(adat))
  }

  private betoltes(): void {
    let adat = JSON.parse(localStorage.getItem(this.kulcs) ?? "[]")
    this.tetelek = []
    adat.forEach((x: any) => {
      let termek = this.termekService.getById(x.id)
      if (termek !== undefined) this.tetelek.push(new KosarTetel(termek, x.db))
    })
  }
}
