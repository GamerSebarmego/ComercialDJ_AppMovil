import { Component, OnInit } from '@angular/core';
import { Guiasingreso } from './guiasingreso';
import { GuiasingresoService } from './guiasingreso.service';
import { DetalleguiasingresoService } from './detalleguiasingreso/detalleguiasingreso.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Detalleguiasingreso } from './detalleguiasingreso/detalleguiasingreso';
import Swal from 'sweetalert2';
import { ProductosService } from '../productos/productos.service';

@Component({
  selector: 'app-formguiasingreso',
  templateUrl: './formguiasingreso.component.html',
  styleUrls: ['./formguiasingreso.component.css']
})
export class FormguiasingresoComponent implements OnInit {

  guiasingreso: Guiasingreso = new Guiasingreso();
  detalleguiasingreso: Detalleguiasingreso = new Detalleguiasingreso
  detalleguiasingresolistar?: Detalleguiasingreso[];
  proveedor :any[] = [];
  producto: any[] = [];

  titulo: string = "Registro de Pedido de Compras";

  mostrarFormulario: boolean = true;

  idpedidoGenerado: number = 0;
  
  constructor(private route: ActivatedRoute, private guiasingresoservice: GuiasingresoService, private detalleguiasingresoservice: DetalleguiasingresoService,private productoservice: ProductosService, private router: Router) {}

  ngOnInit(): void {
    this.guiasingresoservice.dtoproveedor().subscribe(
      data => this.proveedor = data
    );

    this.detalleguiasingresoservice.dtoproducto().subscribe(
      data => this.producto = data
    )
  }

  createpedido(): void {
    this.guiasingresoservice.getLastIdGuia().subscribe(
      lastId => {
        const newId = lastId + 1;
        this.guiasingreso.idguia = newId;
        this.detalleguiasingreso.idguia = newId;
        this.guiasingresoservice.create(this.guiasingreso).subscribe(
          res => {
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 2000,
              timerProgressBar: true,
            });
            this.detalleguiasingresoservice.getDetallesPorIdGuia(newId)
            console.log("salida", this.detalleguiasingreso)
            Toast.fire({
              icon: 'success',
              title: 'El Pedido ' + this.guiasingreso.numeroguia + ' se generó correctamente',
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
            console.log(this.guiasingreso);
          }
        );
      }
    );
  }

  createdetalle(): void {
    this.detalleguiasingreso.idguia = this.guiasingreso.idguia;
    this.detalleguiasingresoservice.create(this.detalleguiasingreso).subscribe(
      (detalleCreado) => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        });
  
        const producto = this.producto.find(p => p.codproducto === this.detalleguiasingreso.codproducto);
        console.log("ingreso",producto)
        if(producto) {
          producto.stock += this.detalleguiasingreso.cantidad;
          console.log("salida",producto)
        }
        this.productoservice.update(producto).subscribe(
          () => {
            Toast.fire({
              icon: 'success',
              title: 'El Producto se agregó correctamente',
              })
            });

        console.log(this.detalleguiasingreso)
        this.detalleguiasingreso.codproducto = "";
        this.detalleguiasingreso.cantidad = undefined;
        this.actualizarListaDetalles(this.guiasingreso.idguia)
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

  actualizarListaDetalles(idguia: number): void {
    this.detalleguiasingresoservice.getDetallesPorIdGuia(idguia).subscribe(
      (detalles) => {
        this.detalleguiasingresolistar = detalles;
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
