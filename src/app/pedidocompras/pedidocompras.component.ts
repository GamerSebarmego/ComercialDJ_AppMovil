import { Component, OnInit } from '@angular/core';
import { Pedidocompras } from './pedidocompras';
import { PedidocomprasService } from './pedidocompras.service';

@Component({
  selector: 'app-pedidocompras',
  templateUrl: './pedidocompras.component.html',
  styleUrls: ['./pedidocompras.component.css']
})
export class PedidocomprasComponent implements OnInit{

  titulo: String = "Pedido Compras";
  listar: String = "Lista de Pedidos - Compras"

  pedidocompras?: Pedidocompras[];

  constructor(private pedidocomprasservice:PedidocomprasService) { }

  ngOnInit(): void {
    this.pedidocomprasservice.getAll().subscribe(
      pedc => this.pedidocompras = pedc
    );
   }
}
