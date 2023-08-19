import { Component, OnInit } from '@angular/core';
import { Pedidocompras } from './pedidocompras';
import { PedidocomprasService } from './pedidocompras.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-pedidocompras',
  templateUrl: './pedidocompras.component.html',
  styleUrls: ['./pedidocompras.component.css']
})
export class PedidocomprasComponent implements OnInit{

  titulo: String = "Pedido Compras";
  listar: String = "Lista de Pedidos - Compras"

  pedidocompras?: Pedidocompras[];
  trabajador :any[] = [];

  constructor(private pedidocomprasservice:PedidocomprasService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.pedidocomprasservice.getAll().subscribe(
      pedc => this.pedidocompras = pedc
    );

    this.pedidocomprasservice.getAllNombresTrabajadores().subscribe(
      trabajadores => {
        this.trabajador = trabajadores;
      }
    );

   }
  
   getNombreTrabajador(codtrabajador: string): string {
    const trabajador = this.trabajador.find(t => t.codtrabajador === codtrabajador);
    return trabajador ? trabajador.nombretrabajador : 'Trabajador no encontrado';
  }

}
