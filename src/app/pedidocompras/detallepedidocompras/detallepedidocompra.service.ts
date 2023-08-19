import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Detallepedidocompras } from './detallepedidocompras';

@Injectable({
  providedIn: 'root'
})
export class DetallepedidocompraService {

  private url: string = "http://localhost:8090/rest/detallepedidocompra";
  private urldto: string = "http://localhost:8090/rest/producto"

  constructor(private http: HttpClient) { }

  // Método para obtener los detalles de un pedido por su idpedido
  getDetallesPorIdPedido(idpedido: number): Observable<Detallepedidocompras[]> {
    return this.http.get<Detallepedidocompras[]>(this.url + "/listarpedido/" + idpedido);
  }

  // Obtener el último iddetalle
  getLastIdDetalle(): Observable<number> {
    return this.http.get<Detallepedidocompras[]>(this.url + '/listar').pipe(
      map(detalle => detalle.length > 0 ? detalle[detalle.length - 1].iddetalle : 0)
    );
  }

  //Metodo Crear
  create(detallepedidocompra: Detallepedidocompras): Observable<Detallepedidocompras> {
    return this.http.post<any>(this.url + '/agregar', detallepedidocompra);
  }

  // Listar Producto
  dtoproducto(): Observable<any[]> {
    return this.http.get<any[]>(this.urldto + '/listar');
  }

}