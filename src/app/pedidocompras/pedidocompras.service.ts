import { Injectable } from '@angular/core';
import { Pedidocompras } from './pedidocompras';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PedidocomprasService {

  private url: string = "http://localhost:8090/rest/pedidocompra"

  constructor(private http: HttpClient) { }

  //Metodo Listar
  getAll():Observable<Pedidocompras[]> {
    return this.http.get<Pedidocompras[]>(this.url + '/listar')
  }

    //Metodo Crear
    create(pedidocompra: Pedidocompras): Observable<Pedidocompras> {
      return this.http.post<any>(this.url + '/agregar', pedidocompra);
    }

}
