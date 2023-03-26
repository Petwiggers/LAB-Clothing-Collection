import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Modelos } from '../interfaces/modelos';

@Injectable({
  providedIn: 'root'
})
export class GetModelosService {
  private urlBAse = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getColecoes():Observable<Modelos[]>{
    return this.http.get<Modelos[]>(`${this.urlBAse}/modelos`);
  }
}
