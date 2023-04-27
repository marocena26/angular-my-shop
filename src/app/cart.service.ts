import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];

  //El método addToCart() añade un producto a una matriz de artículos
  addToCart(product: Product) {
    this.items.push(product);
  }
  //El método getItems() recoge los artículos que los usuarios añaden al carro y devuelve cada artículo con su cantidad asociada
  getItems() {
    return this.items;
  }
  //El método clearCart() devuelve una matriz vacía de artículos, lo que vacía el carro.
  clearCart() {
    this.items = [];
    return this.items;
  }
  constructor() {}
}
