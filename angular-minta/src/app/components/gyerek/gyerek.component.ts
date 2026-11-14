// MIRE JÓ:   gyerek komponens: kap adatot (@Input) ÉS értesíti a szülőt (@Output + EventEmitter).
// MIKOR:     "a gomb megnyomásakor a szülő tudjon róla", "komponensek közti kommunikáció".
// ÁTÍRNI:    az adat típusa (Product), az esemény neve (message).
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-gyerek',
  templateUrl: './gyerek.component.html'
})
export class GyerekComponent {
  @Input() item: Product = new Product()                                       // szülő -> gyerek
  @Output() message: EventEmitter<Product> = new EventEmitter<Product>()       // gyerek -> szülő

  hello(): void {
    this.message.emit(this.item)        // elküldi a szülőnek
  }
}
