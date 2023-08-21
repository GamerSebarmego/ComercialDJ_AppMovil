import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Productos } from '../productos/productos';
import { Categoriasproductos } from './categoriasproductos';
import { CategoriasproductosService } from './categoriasproductos.service';

@Component({
  selector: 'app-formcategoriasproductos',
  templateUrl: './formcategoriasproductos.component.html',
  styleUrls: ['./formcategoriasproductos.component.css']
})
export class FormcategoriasproductosComponent implements OnInit {

  categoriasproductos: Categoriasproductos = new Categoriasproductos();

  titulo: string = "Registro de Categorias";

  constructor(private categoriasproductoservice: CategoriasproductosService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void{
    this.cargar();
  }

  cargar(): void {
    this.activatedRoute.params.subscribe(
      e => {
        let idcategoria = e['idcategoria'];
        if(idcategoria) {
          this.categoriasproductoservice.get(idcategoria).subscribe(
            prod => this.categoriasproductos = prod
          );
        }
      }
    )
  }

  create(): void {
    this.categoriasproductoservice.create(this.categoriasproductos).subscribe(
      res => this.router.navigate(['/categoriasproductos'])
    );
  }

  update(): void {
    this.categoriasproductoservice.update(this.categoriasproductos).subscribe(
      res => this.router.navigate(['/categoriasproductos'])
    );
  }
}