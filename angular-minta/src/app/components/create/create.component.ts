// MIRE JÓ:   új elem felvétele űrlapról; a gomb le van tiltva, amíg az adatok nem jók.
// MIKOR:     "űrlap, validáció, hozzáadás a listához".
// ÁTÍRNI:    a feltételek a buttonDisabled()-ben, a mezők a html-ben.
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html'
})
export class CreateComponent {
  product: Product = new Product()          // ebbe ír az űrlap ([(ngModel)])

  constructor(private router: Router, private service: ProductService) { }

  buttonDisabled(): boolean {               // true = a gomb tiltva van
    if (this.product.name.length < 3) return true
    if (this.product.price < 100) return true
    return false
  }

  create(): void {
    this.service.create(this.product)
    this.router.navigateByUrl("list")       // mentés után a lista oldalra
  }
}
