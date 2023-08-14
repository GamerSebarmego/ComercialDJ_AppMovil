import { Component, OnInit } from '@angular/core';
import { Trabajadores } from './trabajadores';
import { TrabajadoresService } from './trabajadores.service';

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

   delete(trabajador:Trabajadores):void {
    this.trabajadoresservice.delete(trabajador.codtrabajador).subscribe(
      trab => this.trabajadoresservice.getAll().subscribe(
        response => this.trabajadores = response
      )
    )
   }

}
