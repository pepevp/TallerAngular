import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent {
    precio: number=46;
    nombreProducto: string="Set de mesas y sillas de jardin";

}
