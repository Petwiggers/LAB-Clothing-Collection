import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Colecoes } from '../interfaces/colecoes';

@Injectable({
  providedIn: 'root'
})
export class ColecoesService {
  private urlBAse = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getColecoes():Observable<Colecoes[]>{
    return this.http.get<Colecoes[]>(`${this.urlBAse}/colecoes`);
  }

  getColecoeId(id:string|null):Observable<Colecoes[]>{
    return this.http.get<Colecoes[]>(`${this.urlBAse}/colecoes/${id}`);
  }

  postColecao(colecao: Colecoes): Observable<Colecoes> {
    return this.http.post<Colecoes>(`${this.urlBAse}/colecoes`, colecao);
  }

  putColecao(colecao: Colecoes, id: string|null): Observable<Colecoes> {
    return this.http.put<Colecoes>(`${this.urlBAse}/colecoes/${id}`, colecao);
  }

  deleteColecao(id: string|null): Observable<Colecoes> {
    return this.http.delete<Colecoes>(`${this.urlBAse}/colecoes/${id}`);
  }
}
