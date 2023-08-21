import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Detalleguiasingreso } from './detalleguiasingreso';

@Injectable({
  providedIn: 'root'
})
export class DetalleguiasingresoService {

  private url: string = "http://localhost:8090/rest/detallesguiasingreso";
  private urldto: string = "http://localhost:8090/rest/producto";

  constructor(private http: HttpClient) { }

  // Método para obtener los detalles de un pedido por su idpedido
  getDetallesPorIdGuia(idguia: number): Observable<Detalleguiasingreso[]> {
    return this.http.get<Detalleguiasingreso[]>(this.url + "/listarguia/" + idguia);
  }

  // Obtener el último iddetalle
  getLastIdGuia(): Observable<number> {
    return this.http.get<Detalleguiasingreso[]>(this.url + '/listar').pipe(
      map(detalle => detalle.length > 0 ? detalle[detalle.length - 1].idguiaingreso : 0)
    );
  }

  //Metodo Crear
  create(detallepedidocompra: Detalleguiasingreso): Observable<Detalleguiasingreso> {
    return this.http.post<any>(this.url + '/agregar', detallepedidocompra);
  }

  // Listar Producto
  dtoproducto(): Observable<any[]> {
    return this.http.get<any[]>(this.urldto + '/listar');
  }
}
