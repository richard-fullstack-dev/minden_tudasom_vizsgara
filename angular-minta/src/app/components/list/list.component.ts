// MIRE JÓ:   lista oldal: táblázat, keresés (szűrés), törlés, szerkesztés link.
// MIKOR:     "listázza az elemeket", "keresés/szűrés", "törlés gomb".
// ÁTÍRNI:    ProductService -> a saját service, a szűrés mezője (name).
import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  search: string = ""

  // public: a sablon (html) is lássa a service-t
  constructor(public service: ProductService) { }

  // szűrt lista: csak amiben szerepel a keresett szöveg (kis/nagybetű nem számít)
  get filtered(): Product[] {
    return this.service.products.filter(x => x.name.toLowerCase().includes(this.search.toLowerCase()))
  }
}
