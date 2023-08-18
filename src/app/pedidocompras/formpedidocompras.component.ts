import { Component, OnInit } from '@angular/core';
import { PedidocomprasService } from './pedidocompras.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pedidocompras } from './pedidocompras';
import { DetallepedidocompraService } from './detallepedidocompras/detallepedidocompra.service';
import { Detallepedidocompras } from './detallepedidocompras/detallepedidocompras';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formpedidocompras',
  templateUrl: './formpedidocompras.component.html',
  styleUrls: ['./formpedidocompras.component.css']
})
export class FormpedidocomprasComponent implements OnInit {

  pedidocompras: Pedidocompras = new Pedidocompras();
  detallepedidocompras: Detallepedidocompras = new Detallepedidocompras();

  titulo: string = "Registro de Pedido de Compras";

  mostrarFormulario: boolean = true;

  constructor(private route: ActivatedRoute, private pedidocomprasservice: PedidocomprasService, private detallepedidocompraService: DetallepedidocompraService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
  }

  createpedido(): void {
    this.pedidocomprasservice.create(this.pedidocompras).subscribe(
      res => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        });
  
        Toast.fire({
          icon: 'success',
          title: 'El Pedido ' + this.pedidocompras.numbercompra + ' se generó correctamente',
        });
        this.mostrarFormulario = false;
        console.log(this.pedidocompras)
      },
      error => {
        const ToastError = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
  
        ToastError.fire({
          icon: 'error',
          title: 'Error al Registrar el Pedido',
          text: 'Intentelo Denuevo',
        });
        console.log(this.pedidocompras)
      }
    );
  }

  createdetalle(): void {
    this.detallepedidocompraService.create(this.detallepedidocompras).subscribe(
      res => {
        const detallepedidocomprapedidoCreado: Detallepedidocompras = res;
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        });
  
        Toast.fire({
          icon: 'success',
          title: 'El Producto se agrego correctamente',
        });
        this.mostrarFormulario = false;
        console.log(this.detallepedidocompras)
      },
      error => {
        const ToastError = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
  
        ToastError.fire({
          icon: 'error',
          title: 'Error al Agregar el Producto',
          text: 'Intentelo Denuevo',
        });
        console.log(this.detallepedidocompras)
      }
    );
  }

}