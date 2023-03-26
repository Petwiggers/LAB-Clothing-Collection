import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Colecoes } from '../interfaces/colecoes';

@Injectable({
  providedIn: 'root'
})
export class GetColecoesService {

  private urlBAse = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getColecoes():Observable<Colecoes[]>{
    return this.http.get<Colecoes[]>(`${this.urlBAse}/colecoes`);
  }
}
