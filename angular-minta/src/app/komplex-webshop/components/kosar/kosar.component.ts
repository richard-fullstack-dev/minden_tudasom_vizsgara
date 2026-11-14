// MIRE JÓ:   kosár oldal: tételek, törlés, végösszeg, kosár ürítése.
import { Component } from "@angular/core";
import { KosarService } from "../../services/kosar.service";

@Component({
  selector: "app-kosar",
  templateUrl: "./kosar.component.html"
})
export class KosarComponent {
  constructor(public kosarService: KosarService) { }
}
