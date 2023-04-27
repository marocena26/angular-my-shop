import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent {
  @Input() product!: Product;
  //El signo de exclamación después de product indica que se trata de una propiedad no nula. Esto significa que cuando se utilice este componente en otro lugar, se debe proporcionar un valor para la propiedad de entrada product.
  @Output() notify = new EventEmitter();
  //Configurar ProductAlertsComponent con un @Output() permite que ProductAlertsComponent emita un evento cuando cambia el valor de la propiedad notify.
}
