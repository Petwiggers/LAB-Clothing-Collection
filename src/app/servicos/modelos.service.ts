import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Modelos } from '../interfaces/modelos';

@Injectable({
  providedIn: 'root'
})
export class ModelosService {
  private urlBAse = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getModelos():Observable<Modelos[]>{
    return this.http.get<Modelos[]>(`${this.urlBAse}/models`);
  }

  postModelo(modelo: Modelos): Observable<Modelos> {
    return this.http.post<Modelos>(`${this.urlBAse}/models`, modelo);
  }

  deleteModelos(id: string|null): Observable<Modelos> {
    return this.http.delete<Modelos>(`${this.urlBAse}/models/${id}`);
  }
}
