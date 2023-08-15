import { Component, OnInit } from '@angular/core';
import { PedidocomprasService } from './pedidocompras.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pedidocompras } from './pedidocompras';

@Component({
  selector: 'app-formpedidocompras',
  templateUrl: './formpedidocompras.component.html',
  styleUrls: ['./formpedidocompras.component.css']
})
export class FormpedidocomprasComponent implements OnInit {
  pedidocompras: Pedidocompras = new Pedidocompras();

 titulo: string = "Registro de Pedido de Compras"

 constructor(private pedidocomprasservice: PedidocomprasService, private router: Router, private activatedRoute: ActivatedRoute) {}


 ngOnInit(): void {
     
 }
}
