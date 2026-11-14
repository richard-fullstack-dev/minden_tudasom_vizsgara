// MIRE JÓ:   UGYANAZ a service, de az adat az oldal újratöltése után is megmarad (localStorage).
// MIKOR:     ha a feladat azt írja: "mentse el", "maradjon meg újratöltés után", "tárolja a böngészőben".
// HOGYAN:    NE használd egyszerre a product.service.ts-sel: ezt nevezd át product.service.ts-re (vagy másold a tartalmát
//            a product.service.ts-be). A komponensek így semmit nem észlelnek belőle.
// ÁTÍRNI:    a kulcs ("products"), az osztály (Product).
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({ providedIn: 'root' })
export class ProductService {
  products: Product[] = []
  private nextId: number = 1
  private key: string = "products"           // a "zseb" neve a localStorage-ban

  constructor() {
    this.load()                              // induláskor: betöltés
  }

  create(product: Product): void {
    product.id = this.nextId++
    this.products.push(product)
    this.save()                              // minden módosítás után: mentés
  }

  getById(id: number): Product | undefined {
    return this.products.find(x => x.id === id)
  }

  update(product: Product): void {
    let index = this.products.findIndex(x => x.id === product.id)
    this.products[index] = product
    this.save()
  }

  delete(product: Product): void {
    this.products = this.products.filter(x => x.id !== product.id)
    this.save()
  }

  private save(): void {
    localStorage.setItem(this.key, JSON.stringify(this.products))   // lista -> szöveg
  }

  private load(): void {
    let data = JSON.parse(localStorage.getItem(this.key) ?? "[]")   // szöveg -> sima objektumok (?? "[]": ha nincs mentés)
    this.products = data.map((x: any) => Object.assign(new Product(), x))   // vissza Product példányokra
    this.nextId = this.products.length === 0 ? 1 : Math.max(...this.products.map(x => x.id)) + 1
  }
}
