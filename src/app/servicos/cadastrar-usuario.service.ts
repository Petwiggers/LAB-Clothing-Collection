import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InterfaceUsuario } from '../interfaces/interface-usuario';

@Injectable({
  providedIn: 'root'
})
export class CadastrarUsuarioService {
  private urlBAse = 'http://localhost:3000';
  
  constructor(private http: HttpClient) { }

  adicionarUsuario(usuario: InterfaceUsuario): Observable<InterfaceUsuario> {
    return this.http.post<InterfaceUsuario>(`${this.urlBAse}/usuarios`, usuario);
  }
}
