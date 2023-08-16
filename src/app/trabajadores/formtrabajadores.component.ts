import { Component, OnInit } from '@angular/core';
import { Trabajadores } from './trabajadores';
import { TrabajadoresService } from './trabajadores.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-formtrabajadores',
  templateUrl: './formtrabajadores.component.html',
  styleUrls: ['./formtrabajadores.component.css']
})
export class FormtrabajadoresComponent implements OnInit{

  trabajadores: Trabajadores = new Trabajadores();

  titulo: string = "Registro de Trabajadores";

  constructor(private trabajadoresservices: TrabajadoresService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void{
    this.cargar();
  }

  cargar(): void {
    this.activatedRoute.params.subscribe(
      e => {
        let codtrabajador = e['codtrabajador'];
        if(codtrabajador) {
          this.trabajadoresservices.get(codtrabajador).subscribe(
            trab => this.trabajadores = trab
          );
        }
      }
    )
  }

  create(): void {
    this.trabajadoresservices.create(this.trabajadores).subscribe(
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
          title: 'El Trabajador ' + this.trabajadores.codtrabajador + ' se generó correctamente',
        });
  
        this.router.navigate(['/trabajadores']);
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
          title: 'Error al Registrar en Trabajador',
          text: 'Intentelo Denuevo',
        });
      }
    );
  }

  update(): void {
    this.trabajadoresservices.update(this.trabajadores).subscribe(
      res => this.router.navigate(['/trabajadores'])
    );
  }
}
