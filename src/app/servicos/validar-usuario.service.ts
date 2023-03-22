import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InterfaceUsuario } from '../interfaces/interface-usuario';

@Injectable({
  providedIn: 'root'
})
export class ValidarUsuarioService {
  private urlBAse = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  validarUsuario(): Observable<InterfaceUsuario[]>{
    return this.http.get<InterfaceUsuario[]>(`${this.urlBAse}/usuarios`);
  }
}
