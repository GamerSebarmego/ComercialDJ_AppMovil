import { Component, OnInit } from '@angular/core';
import { Productos } from './productos';
import { ProductosService } from './productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit{

  titulo: String = "Productos";
  listar: String = "Lista de Productos"
 
  productos?: Productos[];
 
  constructor(private productosservice:ProductosService) { }
 
  ngOnInit(): void {
   this.productosservice.getAll().subscribe(
     prod => this.productos = prod
   );
  }
 
  delete(producto:Productos):void {
   this.productosservice.delete(producto.codproducto).subscribe(
     prov => this.productosservice.getAll().subscribe(
       response => this.productos = response
     )
   )
  }
}
