import { Component } from '@angular/core';
import { Colecoes } from 'src/app/interfaces/colecoes';
import { ColecoesService } from 'src/app/servicos/colecoes.service';


@Component({
  selector: 'app-tabela-dashboard',
  templateUrl: './tabela-dashboard.component.html',
  styleUrls: ['./tabela-dashboard.component.scss']
})
export class TabelaDashboardComponent {
  maioresOrcamentos: Colecoes[] = [];
  orcamentos!: number[];

  ngOnInit() {
   this.getColecoes();
  }

  constructor(private http:ColecoesService){}

 getColecoes(){
    this.http.getColecoes().subscribe((colecoes) => {
      for (let index = 0; index < 5; index++) {
        let maiorNumero: number = 0;
        let indexMaiorNumero: number = 0;
        colecoes.forEach((valor: Colecoes,index:number) => {
          if (valor.orcamento>maiorNumero) {
            maiorNumero = valor.orcamento
            indexMaiorNumero = index;
          }
        });
        this.maioresOrcamentos.push(colecoes[indexMaiorNumero]);
        colecoes.splice(indexMaiorNumero,1);
      }
    });
  }

}
