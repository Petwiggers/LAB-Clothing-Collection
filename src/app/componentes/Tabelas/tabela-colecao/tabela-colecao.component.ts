import { Component, OnInit } from '@angular/core';
import { Colecoes } from 'src/app/interfaces/colecoes';
import { GetColecoesService } from 'src/app/servicos/get-colecoes.service';

@Component({
  selector: 'app-tabela-colecao',
  templateUrl: './tabela-colecao.component.html',
  styleUrls: ['./tabela-colecao.component.scss']
})
export class TabelaColecaoComponent implements OnInit{
  colecoes!: Colecoes[];
  ngOnInit(): void {
    this.pegarColecoes();
  }

  constructor(private http: GetColecoesService){}

  pegarColecoes(){
    this.http.getColecoes().subscribe((retorno) => {
      this.colecoes = retorno;
    })
  }

}
