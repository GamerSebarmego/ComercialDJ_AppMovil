import { Injectable } from '@angular/core';
import { Pedidocompras } from './pedidocompras';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PedidocomprasService {

  private url: string = "http://localhost:8090/rest/pedidocompra"
  private urldto: string = "http://localhost:8090/rest/trabajador"

  constructor(private http: HttpClient) { }

  //Metodo Listar
  getAll():Observable<Pedidocompras[]> {
    return this.http.get<Pedidocompras[]>(this.url + '/listar')
  }

  //Ultimo IdPedido
  getLastIdPedido(): Observable<number> {
    return this.http.get<Pedidocompras[]>(this.url + '/listar').pipe(
      map(pedidos => pedidos.length > 0 ? pedidos[pedidos.length - 1].idpedido : 0)
    );
  }
  
  //Metodo Crear
  create(pedidocompra: Pedidocompras): Observable<Pedidocompras> {
    return this.http.post<any>(this.url + '/agregar', pedidocompra);
  }

  // Listar Trabajador
  dtotrabajador(): Observable<any[]> {
    return this.http.get<any[]>(this.urldto + '/listar');
  }

  // Obtener nombres de trabajadores
  getAllNombresTrabajadores(): Observable<any[]> {
    return this.http.get<any[]>(this.urldto + '/listar');
  }
  
}
