import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Modelos } from 'src/app/interfaces/modelos';
import { ColecoesService } from 'src/app/servicos/colecoes.service';
import { ModelosService } from 'src/app/servicos/modelos.service';



@Component({
  selector: 'app-tabela-colecao',
  templateUrl: './tabela-colecao.component.html',
  styleUrls: ['./tabela-colecao.component.scss']
})
export class TabelaColecaoComponent implements OnInit{
  colecoesModificadas: any[] = [];
  colecoes!: any;
  modelos!: Modelos[]|undefined;
  ngOnInit() {
    this.pegarValores();
  }
  
  constructor(private httpColecoes: ColecoesService,private httpModelos: ModelosService,private rota: Router){}
    private urlBAse = 'http://localhost:3000'

    async pegarValores(){
    this.colecoes = await this.httpColecoes.getColecoes().toPromise()
    this.modelos = await this.httpModelos.getModelos().toPromise()
    this.filtrarModelos();
  }
  filtrarModelos(){
    if (this.modelos) {
      for(let i = 0; i < this.colecoes.length; i++){
        const modelosColecao = this.modelos.filter((q:Modelos) => q.colecao === this.colecoes[i].id)
        const objeto = {
          ...this.colecoes[i],
          quantidadeModelos: modelosColecao.length
        }
        this.colecoesModificadas.push(objeto);
      } 
    }
  }
  editaColecao(id:number){
    this.rota.navigate([`/home/Editar-Colecoes/${id}`])
  }
}

