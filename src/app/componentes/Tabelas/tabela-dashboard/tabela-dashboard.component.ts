import { Component } from '@angular/core';
import { Colecoes } from 'src/app/interfaces/colecoes';
import { Modelos } from 'src/app/interfaces/modelos';
import { ColecoesService } from 'src/app/servicos/colecoes.service';
import { ModelosService } from 'src/app/servicos/modelos.service';


@Component({
  selector: 'app-tabela-dashboard',
  templateUrl: './tabela-dashboard.component.html',
  styleUrls: ['./tabela-dashboard.component.scss']
})
export class TabelaDashboardComponent {
  maioresOrcamentos: Colecoes[] = [];
  colecoesModificadas: any[] = [];
  modelos!:Modelos[]|undefined;
  colecoes!: any;

  ngOnInit() {
    this.pegarValores();
  }

  constructor(private httpColecoes:ColecoesService,private httpModelos: ModelosService ){}

  
    async pegarValores(){
      this.colecoes = await this.httpColecoes.getColecoes().toPromise()
      this.modelos = await this.httpModelos.getModelos().toPromise()
      this.pegarMaioresOrcamentos()
    }
  

  pegarMaioresOrcamentos(){
     this.httpColecoes.getColecoes().subscribe((colecoes) => {
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
      this.filtrarModelos();
    });
  }
  filtrarModelos(){
    if (this.modelos) {
      for(let i = 0; i < this.maioresOrcamentos.length; i++){
        const modelosColecao = this.modelos.filter((q:Modelos) => q.colecao === this.maioresOrcamentos[i].id)
        const objeto = {
          ...this.maioresOrcamentos[i],
          quantidadeModelos: modelosColecao.length
        }
        this.colecoesModificadas.push(objeto);
      } 
    }
  }

}
