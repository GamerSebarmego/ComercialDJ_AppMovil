import { Component, OnInit } from '@angular/core';
import { Categoriasproductos } from './categoriasproductos';
import { CategoriasproductosService } from './categoriasproductos.service';

@Component({
  selector: 'app-categoriasproductos',
  templateUrl: './categoriasproductos.component.html',
  styleUrls: ['./categoriasproductos.component.css']
})
export class CategoriasproductosComponent implements OnInit{

  titulo: String = "Categorias";
  listar: String = "Lista de Categorias"

  categoriasproductos?: Categoriasproductos[]

  constructor(private categoriasproductosservice:CategoriasproductosService) { }

  ngOnInit(): void {
    this.categoriasproductosservice.getAll().subscribe(
      catp => this.categoriasproductos = catp
    );
   }

   delete(producto:Categoriasproductos):void {
    this.categoriasproductosservice.delete(producto.idcategoria).subscribe(
      prov => this.categoriasproductosservice.getAll().subscribe(
        response => this.categoriasproductos = response
      )
    )
   }
}
