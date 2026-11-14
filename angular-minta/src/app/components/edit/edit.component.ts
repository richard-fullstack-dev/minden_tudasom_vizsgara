// MIRE JÓ:   szerkesztés útvonal-paraméterrel (edit/:id): betölti az elemet, MÁSOLATOT szerkeszt, mentéskor frissít.
// MIKOR:     "szerkesztő oldal", "módosítás".
// ÁTÍRNI:    ProductService/Product; az id típusa (szám: Number(x['id']), szöveg: x['id']).
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent {
  product: Product = new Product()

  constructor(private route: ActivatedRoute, private router: Router, private service: ProductService) {
    route.params.subscribe(x => {
      let id: number = Number(x['id'])                       // az útvonal paramétere mindig szöveg: Number()
      let result: Product | undefined = this.service.getById(id)
      if (result === undefined) this.router.navigateByUrl("list")           // nincs ilyen elem -> vissza
      else this.product = Object.assign(new Product(), result)              // MÁSOLAT: mentésig nem változik a lista
    })
  }

  update(): void {
    this.service.update(this.product)
    this.router.navigateByUrl("list")
  }
}
