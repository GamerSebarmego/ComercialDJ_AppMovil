import { Component, OnInit } from '@angular/core';
import { Trabajadores } from './trabajadores';
import { TrabajadoresService } from './trabajadores.service';
import { ActivatedRoute, Route, Router } from '@angular/router';


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
      res => this.router.navigate(['/trabajadores'])
    );
  }

  update(): void {
    this.trabajadoresservices.update(this.trabajadores).subscribe(
      res => this.router.navigate(['/trabajadores'])
    );
  }
}
