// MIRE JÓ:   adatokat tároló service (memóriában): create / getById / update / delete.
// MIKOR:     ha a feladat listát tárol, és több oldal/komponens használja. (Oldalfrissítés után az adat elvész:
//            ha maradnia kell, használd a product.service.localstorage.ts változatot.)
// ÁTÍRNI:    Product -> a saját osztályod, a seed adatok, a service neve (ng g s services/valami).
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({ providedIn: 'root' })        // root = az egész app ugyanazt a példányt használja
export class ProductService {
  products: Product[] = []
  private nextId: number = 1

  constructor() {
    this.seed("Espresso", 700, false)      // induló adatok
    this.seed("Latte", 900, true)
    this.seed("Cappuccino", 850, false)
  }

  create(product: Product): void {
    product.id = this.nextId++
    this.products.push(product)
  }

  getById(id: number): Product | undefined {
    return this.products.find(x => x.id === id)
  }

  update(product: Product): void {
    let index = this.products.findIndex(x => x.id === product.id)
    this.products[index] = product
  }

  delete(product: Product): void {
    this.products = this.products.filter(x => x.id !== product.id)    // új tömb: a törlendő nélkül
  }

  private seed(name: string, price: number, akcio: boolean): void {
    this.create(new Product(name, price, akcio))
  }
}
