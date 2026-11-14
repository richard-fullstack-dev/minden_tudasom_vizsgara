// MIRE JÓ:   a szülő: átadja az elemeket a gyerekeknek, és fogadja az eseményüket.
import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-szulo',
  templateUrl: './szulo.component.html'
})
export class SzuloComponent {
  last: string = ""

  constructor(public service: ProductService) { }

  onMessage(product: Product): void {      // a gyerek eseménye ide érkezik ($event = amit a gyerek emit-elt)
    this.last = product.name
  }
}
