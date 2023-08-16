import { Component, OnInit } from '@angular/core';
import { Trabajadores } from './trabajadores';
import { TrabajadoresService } from './trabajadores.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.component.html',
  styleUrls: ['./trabajadores.component.css']
})
export class TrabajadoresComponent implements OnInit{
  titulo: String = "Trabajadores";
  listar: String = "Lista de Trabajadores"

  trabajadores?: Trabajadores[];

  constructor(private trabajadoresservice:TrabajadoresService) { }

  ngOnInit(): void {
    this.trabajadoresservice.getAll().subscribe(
      trab => this.trabajadores = trab
    );
   }

   delete(trabajador: Trabajadores): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás revertir estos cambios.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, Borrar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.trabajadoresservice.delete(trabajador.codtrabajador).subscribe(
          () => {
            this.trabajadoresservice.getAll().subscribe(
              (response) => {
                this.trabajadores = response;
                Swal.fire({
                  title: 'Eliminado',
                  text: 'El trabajador se ha eliminado correctamente.',
                  icon: 'success'
                });
              }
            );
          },
          (error) => {
            Swal.fire({
              title: 'Error',
              text: 'No se pudo eliminar el trabajador.',
              icon: 'error',
              footer: '<a href="https://developer.mozilla.org/es/docs/Web/HTTP/Status/500?utm_source=mozilla&utm_medium=devtools-webconsole&utm_campaign=default" target="_blank">¿Porque tengo este problema?</a>'
            });
          }
        );
      }
    });
  }
  
}
