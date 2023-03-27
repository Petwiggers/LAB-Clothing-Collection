import { Component, OnInit } from '@angular/core';
import { Colecoes } from 'src/app/interfaces/colecoes';
import { GetColecoesService } from 'src/app/servicos/get-colecoes.service';

@Component({
  selector: 'app-orcamento-medio',
  templateUrl: './orcamento-medio.component.html',
  styleUrls: ['./orcamento-medio.component.scss']
})
export class OrcamentoMedioComponent implements OnInit{
  mediaOrcamento!: number;

  ngOnInit(): void {
    this.GetColecoesService();
  }

  constructor(private http: GetColecoesService){}

  GetColecoesService(){
    this.http.getColecoes().subscribe((resultado) => {
      this.calcularMediaOrcamento(resultado);
    });
  }

  calcularMediaOrcamento(arrayColecao: Colecoes[]){
    let somaOrcamento: number = 0;
        arrayColecao.map((colecao) => {
        somaOrcamento += colecao.orcamento;
      });
      this.mediaOrcamento = somaOrcamento/arrayColecao.length;
      this.mediaOrcamento = Math.round(this.mediaOrcamento);
  }
}
