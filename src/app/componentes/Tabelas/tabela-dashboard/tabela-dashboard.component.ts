import { Component } from '@angular/core';
import { Colecoes } from 'src/app/interfaces/colecoes';
import { GetColecoesService } from 'src/app/servicos/get-colecoes.service';

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

  constructor(private http:GetColecoesService){}

 getColecoes(){
    this.http.getColecoes().subscribe((colecoes) => {
      // let maioresOrcamentos:number[] = [];
      for (let index = 0; index < 5; index++) {
        let maiorNumero: number = 0;
        let indexMaiorNumero: number = 0;
        colecoes.forEach((valor: Colecoes,index:number) => {
          if (valor.orcamento>maiorNumero) {
            // maiorNumero = valor.orcamento
            indexMaiorNumero = index;
          }
        });
        this.maioresOrcamentos.push(colecoes[indexMaiorNumero]);
        console.log('Maiores Orçamentos '+this.maioresOrcamentos);
        colecoes.splice(indexMaiorNumero,1);
        console.log('Coleções: '+colecoes);
        
      }
      
      // const sumWithInitial = array1.reduce(
      //   (accumulator, currentValue) => accumulator + currentValue,
      //   initialValue
      // );
    });
  }

  // adicionarOrcamentos(colecoes: Colecoes[]){
  //   let orcamentos: number[];
  //   colecoes.forEach((colecao) => {
  //     let orcamentoColecao = colecao.orcamento;
  //     orcamentos.push(orcamentoColecao);
  //     console.log(orcamentoColecao);
  //   });
  //   return this.orcamentos;
  // }
}
