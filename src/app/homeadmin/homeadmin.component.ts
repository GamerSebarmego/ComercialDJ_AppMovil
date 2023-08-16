import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-homeadmin',
  templateUrl: './homeadmin.component.html',
  styleUrls: ['./homeadmin.component.css']
})
export class HomeadminComponent implements OnInit{
  
  ngOnInit(): void {
      
  }

  envioApiRest(): void {
    Swal.fire({
      title: '¿Deseas ser redireccionado?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'si, por favor'
    }).then((result) => {
      if (result.isConfirmed) {
        window.open("https://github.com/GamerSebarmego/ComercialDJ_ApiRest", "_blank");
      }
    });
  }

  envioAppWeb(): void {
    Swal.fire({
      title: '¿Deseas ser redireccionado?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'si, por favor'
    }).then((result) => {
      if (result.isConfirmed) {
        window.open("https://github.com/GamerSebarmego/ComercialDJ_", "_blank");
      }
    });
  }

  envioAppMovil(): void {
    Swal.fire({
      icon: 'error',
      title: 'Opps...',
      text: 'Todavia no esta disponible este Proyecto!',
    })
  }
}
