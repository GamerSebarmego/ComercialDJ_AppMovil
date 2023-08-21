import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { Categoriasproductos } from './categoriasproductos';

@Injectable({
  providedIn: 'root'
})
export class CategoriasproductosService {

  private url: string = "http://localhost:8090/rest/categoriaproducto"

  constructor(private http: HttpClient) { }

    //Metodo Listar
    getAll():Observable<Categoriasproductos[]> {
      return this.http.get<Categoriasproductos[]>(this.url + '/listar')
    }

    //Metodo Crear
    create(categoriaproductoproducto: Categoriasproductos): Observable<Categoriasproductos> {
      return this.http.post<any>(this.url + '/agregar', categoriaproductoproducto);
    }

    //Metodo Buscar
    get(idcategoria:number):Observable<Categoriasproductos> {
      return this.http.get<Categoriasproductos>(this.url + '/buscar/' + idcategoria)
    }

    //Metodo Actualizar
    update(categoriaproductoproducto:Categoriasproductos):Observable<Categoriasproductos> {
      return this.http.put<any>(this.url + '/editar/' + categoriaproductoproducto.idcategoria, categoriaproductoproducto);
    }

    //Metodo Eliminar
    delete(idcategoria:number):Observable<Categoriasproductos> {
      return this.http.delete<Categoriasproductos>(this.url + '/borrar/' + idcategoria)
    }
  
}
