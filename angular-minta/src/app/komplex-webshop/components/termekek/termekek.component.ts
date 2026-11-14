// MIRE JÓ:   termékek oldala: keresés, "Kosárba" gomb, elfogyott jelzés, hibaüzenet, ha nincs elég készlet.
import { Component } from "@angular/core";
import { Termek } from "../../models/termek";
import { KosarService } from "../../services/kosar.service";
import { TermekService } from "../../services/termek.service";

@Component({
  selector: "app-termekek",
  templateUrl: "./termekek.component.html"
})
export class TermekekComponent {
  kereses: string = ""
  uzenet: string = ""

  constructor(public termekService: TermekService, public kosarService: KosarService) { }

  get szurt(): Termek[] {
    return this.termekService.keres(this.kereses)
  }

  kosarba(termek: Termek): void {
    this.uzenet = this.kosarService.hozzaad(termek) ? "" : `Nincs több készlet: ${termek.nev}`
  }
}
