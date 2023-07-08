import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Cliente } from './cliente';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private url:string ="http://172.173.210.89:8080/persona"
  constructor(private http:HttpClient) { }

  get(id:number):Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.url+'/'+id);
  }
  getAll():Observable<Cliente>{
    return this.http.get<Cliente>(this.url+'/listar');
  }

  create(cliente:Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.url+'/crear',cliente)
  }

  update(cliente:Cliente):Observable<Cliente>{
    return this.http.put<Cliente>(this.url+'/modificar',cliente);
  }

  delete(id:number):Observable<Cliente>{
    return this.http.delete<Cliente>(this.url+'/eliminar'+id);
  }
}
