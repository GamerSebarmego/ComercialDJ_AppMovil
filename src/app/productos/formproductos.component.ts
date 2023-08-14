import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Productos } from './productos';
import { ProductosService } from './productos.service';

@Component({
  selector: 'app-formproductos',
  templateUrl: './formproductos.component.html',
  styleUrls: ['./formproductos.component.css']
})
export class FormproductosComponent implements OnInit {

  productos: Productos = new Productos();

  titulo: string = "Registro de Productos";

  constructor(private productosservice: ProductosService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void{
    this.cargar();
  }

  cargar(): void {
    this.activatedRoute.params.subscribe(
      e => {
        let codproducto = e['codproducto'];
        if(codproducto) {
          this.productosservice.get(codproducto).subscribe(
            prod => this.productos = prod
          );
        }
      }
    )
  }

  create(): void {
    this.productosservice.create(this.productos).subscribe(
      res => this.router.navigate(['/productos'])
    );
  }

  update(): void {
    this.productosservice.update(this.productos).subscribe(
      res => this.router.navigate(['/productos'])
    );
  }
}
