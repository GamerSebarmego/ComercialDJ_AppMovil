import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Guiasingreso } from './guiasingreso';

@Injectable({
  providedIn: 'root'
})
export class GuiasingresoService {

  private url: string = "http://localhost:8090/rest/guiasingreso"
  private urldto: string = "http://localhost:8090/rest/proveedor"

  constructor(private http: HttpClient) { }

    //Metodo Listar
    getAll():Observable<Guiasingreso[]> {
      return this.http.get<Guiasingreso[]>(this.url + '/listar')
    }

    //Ultimo idguia
    getLastIdGuia(): Observable<number> {
    return this.http.get<Guiasingreso[]>(this.url + '/listar').pipe(
      map(guias => guias.length > 0 ? guias[guias.length - 1].idguia : 0)
    );
  }

    //Metodo Crear
    create(guiasingreso: Guiasingreso): Observable<Guiasingreso> {
      return this.http.post<any>(this.url + '/agregar', guiasingreso);
    }

    // Listar Proveedor
    dtoproveedor(): Observable<any[]> {
      return this.http.get<any[]>(this.urldto + '/listar');
    }

    // Obtener nombres de trabajadores
    getAllNombresProveedor(): Observable<any[]> {
      return this.http.get<any[]>(this.urldto + '/listar');
    }
}
