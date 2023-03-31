import { Component, OnInit } from '@angular/core';
import { Modelos } from 'src/app/interfaces/modelos';
import { ColecoesService } from 'src/app/servicos/colecoes.service';
import { ModelosService } from 'src/app/servicos/modelos.service';

@Component({
  selector: 'app-tabela-modelos',
  templateUrl: './tabela-modelos.component.html',
  styleUrls: ['./tabela-modelos.component.scss']
})
export class TabelaModelosComponent implements OnInit{
  modelosModificadas: any[] = [];
  colecoes!: any;
  modelos!: Modelos[]|undefined;

  constructor(private httpColecoes: ColecoesService, private httpModelos: ModelosService){}
  ngOnInit(): void {
    this.pegarValores();
  }

  async pegarValores(){
    this.colecoes = await this.httpColecoes.getColecoes().toPromise()
    this.modelos = await this.httpModelos.getModelos().toPromise()
    this.modificarModelos();
  }

  modificarModelos(){
    if (this.modelos) {
      for(let i = 0; i< this.modelos.length; i++){
        for (let t = 0; t < this.colecoes.length; t++) {
          if (this.colecoes[t].id === this.modelos[i].colecao) {
            const objeto = {
              ...this.modelos[i],
              colecaoNome: this.colecoes[t].nome
            }
            this.modelosModificadas.push(objeto);
          }
        }
      }
      console.log(this.modelosModificadas);
      
    }
  }

}
