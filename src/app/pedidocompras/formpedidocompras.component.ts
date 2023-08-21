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
  detallepedidocompraslista?: Detallepedidocompras[];
  trabajador :any[] = [];
  producto: any[] = [];

  titulo: string = "Registro de Pedido de Compras";

  mostrarFormulario: boolean = true;
  
  idpedidoGenerado: number = 0;

  constructor(private route: ActivatedRoute, private pedidocomprasservice: PedidocomprasService, private detallepedidocompraservice: DetallepedidocompraService, private router: Router) {}

  ngOnInit(): void {
    this.pedidocomprasservice.dtotrabajador().subscribe(
      data => this.trabajador = data
    );

    this.detallepedidocompraservice.dtoproducto().subscribe(
      data => this.producto = data
    )
  }

  createpedido(): void {
    this.pedidocomprasservice.getLastIdPedido().subscribe(
      lastId => {
        const newId = lastId + 1;
        this.pedidocompras.idpedido = newId;
        this.detallepedidocompras.idpedido = newId;
        this.pedidocomprasservice.create(this.pedidocompras).subscribe(
          res => {
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 2000,
              timerProgressBar: true,
            });
            this.detallepedidocompraservice.getDetallesPorIdPedido(newId)
            console.log("salida", this.detallepedidocompraservice)
            Toast.fire({
              icon: 'success',
              title: 'El Pedido ' + this.pedidocompras.numbercompra + ' se generó correctamente',
            });
            this.mostrarFormulario = false;
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
            console.log(this.pedidocompras);
          }
        );
      }
    );
  }
  
  createdetalle(): void {
    this.detallepedidocompras.idpedido = this.pedidocompras.idpedido;
    this.detallepedidocompraservice.create(this.detallepedidocompras).subscribe(
      (detalleCreado) => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        });
        Toast.fire({
          icon: 'success',
          title: 'El Producto se agregó correctamente',
        });

        console.log(this.detallepedidocompras)
        this.detallepedidocompras.codproducto = "";
        this.detallepedidocompras.cantidadproductos = undefined;
        this.actualizarListaDetalles(this.pedidocompras.idpedido)
      },
      (error) => {
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
        console.error(error);
      }
    );
  }
 
  actualizarListaDetalles(idpedido: number): void {
    this.detallepedidocompraservice.getDetallesPorIdPedido(idpedido).subscribe(
      (detalles) => {
        this.detallepedidocompraslista = detalles;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}