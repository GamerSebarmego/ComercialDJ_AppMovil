import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { Trabajadores } from './trabajadores';

@Injectable({
  providedIn: 'root'
})
export class TrabajadoresService {


  private url: string = "http://localhost:8090/rest/trabajador"

  constructor(private http: HttpClient) { }

    //Metodo Listar
    getAll():Observable<Trabajadores[]> {
      return this.http.get<Trabajadores[]>(this.url + '/listar')
    }
  
    //Metodo Crear
    create(trabajador: Trabajadores): Observable<Trabajadores> {
      return this.http.post<any>(this.url + '/agregar', trabajador);
    }
    
    //Metodo Buscar
    get(codtrabajador:string):Observable<Trabajadores> {
      return this.http.get<Trabajadores>(this.url + '/buscar/' + codtrabajador)
    }
  
    //Metodo Actualizar
    update(trabajador:Trabajadores):Observable<Trabajadores> {
      return this.http.put<any>(this.url + '/editar/' + trabajador.codtrabajador, trabajador);
    }
  
    //Metodo Eliminar
    delete(codtrabajador:string):Observable<Trabajadores> {
      return this.http.delete<Trabajadores>(this.url + '/borrar/' + codtrabajador)
    }
}
