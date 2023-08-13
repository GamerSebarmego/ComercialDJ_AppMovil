import { OnInit, Component } from '@angular/core';
import { Proveedores } from './proveedores';
import { ProveedoresService } from './proveedores.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-formproveedores',
  templateUrl: './formproveedores.component.html',
  styleUrls: ['./formproveedores.component.css']
})
export class FormproveedoresComponent implements OnInit{

  proveedores: Proveedores = new Proveedores();

  titulo: string = "Registro de Proveedores";

  constructor(private proveedoresservice: ProveedoresService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void{
    this.cargar();
  }

  cargar(): void {
    this.activatedRoute.params.subscribe(
      e => {
        let ruc = e['ruc'];
        if(ruc) {
          this.proveedoresservice.get(ruc).subscribe(
            prov => this.proveedores = prov
          );
        }
      }
    )
  }

  create(): void {
    this.proveedoresservice.create(this.proveedores).subscribe(
      res => this.router.navigate(['/proveedores'])
    );
  }

  update(): void {
    this.proveedoresservice.update(this.proveedores).subscribe(
      res => this.router.navigate(['/proveedores'])
    );
  }
}
