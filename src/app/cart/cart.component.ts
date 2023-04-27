import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
import { CartService } from '../cart.service';;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  @Input() product!: Product;
  products = products;
  items = this.cartService.getItems(); // la propiedad items para almacenar los productos en el carrito. Este código establece los artículos usando el método CartService getItems(). Definiste este método cuando creaste cart.service.ts.
  constructor(
    private cartService: CartService
  ) { }
}
