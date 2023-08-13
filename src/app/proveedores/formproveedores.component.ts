import { OnInit, Component } from '@angular/core';
import { Proveedores } from './proveedores';
import { ProveedoresService } from './proveedores.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-formproveedores',
  templateUrl: './formproveedores.component.html',
  styleUrls: ['./formproveedores.component.css']
})
export class FormproveedoresComponent implements OnInit{

  proveedores: Proveedores = new Proveedores();

  titulo: string = "Registro de Proveedores";

  constructor(private proveedoresservice: ProveedoresService, private router: Router) {}

  ngOnInit(): void{}

  create(): void {
    this.proveedoresservice.create(this.proveedores).subscribe(
      res => this.router.navigate(['/proveedores'])
    );
  }

}
