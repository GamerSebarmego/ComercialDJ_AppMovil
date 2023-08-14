import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Detallepedidocompras } from './detallepedidocompras';

@Injectable({
  providedIn: 'root'
})
export class DetallepedidocompraService {

  private url: string = "http://localhost:8090/rest/detallepedidocompra";

  constructor(private http: HttpClient) { }

  // Método para obtener los detalles de un pedido por su idpedido
  getDetallesPorIdPedido(idpedido: number): Observable<Detallepedidocompras[]> {
    return this.http.get<Detallepedidocompras[]>(this.url + "/buscar");
  }
}