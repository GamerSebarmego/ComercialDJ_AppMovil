import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { Productos } from './productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private url: string = "http://localhost:8090/rest/producto"
  private urldto: string = "http://localhost:8090/rest/categoriaproducto"

  constructor(private http: HttpClient) { }

  //Metodo Listar
  getAll():Observable<Productos[]> {
    return this.http.get<Productos[]>(this.url + '/listar')
  }

  //Metodo Crear
  create(producto: Productos): Observable<Productos> {
    return this.http.post<any>(this.url + '/agregar', producto);
  }
  
  //Metodo Buscar
  get(codproducto:string):Observable<Productos> {
    return this.http.get<Productos>(this.url + '/buscar/' + codproducto)
  }

  //Metodo Actualizar
  update(producto:Productos):Observable<Productos> {
    return this.http.put<any>(this.url + '/editar/' + producto.codproducto, producto);
  }

  //Metodo Eliminar
  delete(codproducto:string):Observable<Productos> {
    return this.http.delete<Productos>(this.url + '/borrar/' + codproducto)
  }

  // Listar Categoria
  dtocategoria(): Observable<any[]> {
    return this.http.get<any[]>(this.urldto + '/listar');
  }

}
