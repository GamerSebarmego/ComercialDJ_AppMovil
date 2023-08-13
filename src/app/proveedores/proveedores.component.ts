import { Component, OnInit } from '@angular/core';
import { Proveedores } from './proveedores';
import { ProveedoresService } from './proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit{
 titulo: String = "Proveedores";
 listar: String = "Lista de Proveedores"

 proveedores?: Proveedores[];

 constructor(private proveedoresservice:ProveedoresService) { }

 ngOnInit(): void {
  this.proveedoresservice.getAll().subscribe(
    prov => this.proveedores = prov
  );
 }

}
