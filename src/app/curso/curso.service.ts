import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Curso } from './curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private url:string ="http://localhost:8094/curso"
  constructor(private http:HttpClient) { }

  get(id:number):Observable<Curso[]>{
    return this.http.get<Curso[]>(this.url+'/'+id);
  }
  getAll():Observable<Curso>{
    return this.http.get<Curso>(this.url);
  }

  create(cliente:Curso):Observable<Curso>{
    return this.http.post<Curso>(this.url+'/create',cliente)
  }

  update(cliente:Curso):Observable<Curso>{
    return this.http.put<Curso>(this.url+'/modificar',cliente);
  }

  delete(id:number):Observable<Curso>{
    return this.http.delete<Curso>(this.url+'/eliminar'+id);
  }
}
