import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  //se utiliza para inicializar la propiedad products de la clase ProductListComponent con una copia de la lista de productos importados desde el archivo products.ts.
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  //El método addToCart() hace lo siguiente:
  //- Toma el producto actual como argumento
  //- Utiliza el método CartService addToCart() para añadir el producto a la cesta
  //- Muestra un mensaje indicando que se ha añadido un producto a la cesta

  //Si intentas implementar la interfaz OnInit, debes proporcionar una definición para el método ngOnInit() en la clase del componente, sino, NO funciona.
  ngOnInit(): void {
    // First get the product id from the current route.
  const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('productId'));

  // Find the product that correspond with the id provided in route.
  this.product = products.find(product => product.id === productIdFromRoute);
    // Aquí puedes inicializar variables o llamar a funciones que necesiten ser ejecutadas durante el ciclo de vida del componente.
  }
}
