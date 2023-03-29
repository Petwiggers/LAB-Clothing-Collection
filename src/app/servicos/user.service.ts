import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InterfaceUsuario } from '../interfaces/interface-usuario';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private urlBAse = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getUsuario(): Observable<InterfaceUsuario[]>{
    return this.http.get<InterfaceUsuario[]>(`${this.urlBAse}/usuarios`);
  }

  postUsuario(usuario: InterfaceUsuario): Observable<InterfaceUsuario> {
    return this.http.post<InterfaceUsuario>(`${this.urlBAse}/usuarios`, usuario);
  }
}
