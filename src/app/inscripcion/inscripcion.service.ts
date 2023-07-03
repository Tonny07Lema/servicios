import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { inscripcion } from './inscripcion';


@Injectable({
  providedIn: 'root'
})
export class InscripcionService {
  private url:string ="http://localhost:8095/inscripcion"
  constructor(private http:HttpClient) { }

  get(id:number):Observable<inscripcion[]>{
    return this.http.get<inscripcion[]>(this.url+'/'+id);
  }
  getAll():Observable<inscripcion>{
    return this.http.get<inscripcion>(this.url);
  }

  create(cliente:inscripcion):Observable<inscripcion>{
    return this.http.post<inscripcion>(this.url+'/create',cliente)
  }

  update(cliente:inscripcion):Observable<inscripcion>{
    return this.http.put<inscripcion>(this.url+'/modificar',cliente);
  }

  delete(id:number):Observable<inscripcion>{
    return this.http.delete<inscripcion>(this.url+'/eliminar'+id);
  }
}
