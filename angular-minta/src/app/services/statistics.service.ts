// MIRE JÓ:   számolások a lista elemeiből: átlag, legnagyobb, legkisebb, darabszám feltétellel.
// MIKOR:     "átlagár", "legdrágább", "hány akciós" jellegű feladatnál.
// ÁTÍRNI:    price -> a számolt mező, akcio -> a feltétel mező.
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from './product.service';

@Injectable({ providedIn: 'root' })
export class StatisticsService {

  constructor(private service: ProductService) { }

  get products(): Product[] {
    return this.service.products
  }

  averagePrice(): number {
    if (this.products.length === 0) return 0                          // üres listánál ne legyen 0-val osztás
    let sum = this.products.reduce((a, x) => a + x.price, 0)          // reduce = összeadogató
    return Math.round(sum / this.products.length)
  }

  mostExpensive(): Product | null {
    if (this.products.length === 0) return null
    return this.products.reduce((a, b) => a.price < b.price ? b : a)  // a nagyobbat viszi tovább
  }

  cheapest(): Product | null {
    if (this.products.length === 0) return null
    return this.products.reduce((a, b) => a.price < b.price ? a : b)  // a kisebbet viszi tovább
  }

  akcioCount(): number {
    return this.products.filter(x => x.akcio).length                  // hány elemre igaz a feltétel
  }
}
