import { Component, OnInit } from '@angular/core';
import { GuiasingresoService } from './guiasingreso.service';
import { DatePipe } from '@angular/common';
import { Guiasingreso } from './guiasingreso';
import { Proveedores } from '../proveedores/proveedores';

@Component({
  selector: 'app-guiasingreso',
  templateUrl: './guiasingreso.component.html',
  styleUrls: ['./guiasingreso.component.css']
})
export class GuiasingresoComponent implements OnInit {

  titulo: String = "Guias de Ingreso";
  listar: String = "Lista de Guias de Ingreso"

  guiasingreso?: Guiasingreso[];
  proveedor :any[] = [];

  constructor(private guiasingresoservice:GuiasingresoService, private datepipe: DatePipe) {}

  ngOnInit(): void {
    this.guiasingresoservice.getAll().subscribe(
      pedc => this.guiasingreso = pedc
    );

    this.guiasingresoservice.getAllNombresProveedor().subscribe(
      Proveedores => {
        this.proveedor = Proveedores;
      }
    );
  }

  getNombreProveedor(ruc: number): number {
    const proveedor = this.proveedor.find(p => p.ruc === ruc);
    return proveedor ? proveedor.razonsocial : 'Proveedor no encontrado';
  }
}
