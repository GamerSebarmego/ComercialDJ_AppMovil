import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Detallepedidocompras } from './detallepedidocompras';
import { DetallepedidocompraService } from './detallepedidocompra.service';

@Component({
  selector: 'app-detallepedidocompras',
  templateUrl: './detallepedidocompras.component.html',
  styleUrls: ['./detallepedidocompras.component.css']
})
export class DetallepedidocomprasComponent implements OnInit  {

  titulo: String = "Detalle de Pedido Compras";
  listar: String = "Lista de Detalle de Pedido de Compras Compras"

  detallepedidocompras?: Detallepedidocompras[];
  
  constructor(private route: ActivatedRoute, private detallepedidocompraservice: DetallepedidocompraService){}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const idpedido = + params['idpedido'];
      this.detallepedidocompraservice.getDetallesPorIdPedido(idpedido).subscribe(
        (detalles) => {
          this.detallepedidocompras = detalles;
        }
      );
    });
  }
}
