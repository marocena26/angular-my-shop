import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
// ProductListComponent define una propiedad products que contiene datos importados para cada producto de la matriz products en products.ts.
export class ProductListComponent {
  products = products;

  share() {
    window.alert('The product has been shared!');
    //El método Window.alert() muestra un diálogo de alerta con un mensaje opcional, y aguardará hasta que el usuario cierre la ventana de diálogo.
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
