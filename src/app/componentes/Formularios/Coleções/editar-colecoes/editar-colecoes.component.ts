import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Colecoes } from 'src/app/interfaces/colecoes';
import { Modelos } from 'src/app/interfaces/modelos';
import { ColecoesService } from 'src/app/servicos/colecoes.service';
import { ModelosService } from 'src/app/servicos/modelos.service';

@Component({
  selector: 'app-editar-colecoes-form',
  templateUrl: './editar-colecoes.component.html',
  styleUrls: ['./editar-colecoes.component.scss']
})
export class EditarColecoesComponent implements OnInit{
  colecaoId!: string|null;
  colecao!: Colecoes[]|undefined;
  formulario!: FormGroup;
  modelos!: any;

  constructor(private rotaAtiva: ActivatedRoute, private httpColecoes: ColecoesService,private httpModelos: ModelosService){}

  async ngOnInit(){
    this.colecaoId = this.rotaAtiva.snapshot.paramMap.get('id');
    this.colecao = await this.httpColecoes.getColecoeId(this.colecaoId).toPromise();
    this.modelos = await this.httpModelos.getModelos().toPromise();
    this.criarFormulario(this.colecao);
  }

  criarFormulario(colecao:any){
    
    this.formulario = new FormGroup({
      nome: new FormControl(colecao.nome,[Validators.required,Validators.minLength(3)]),
      responsavel: new FormControl(colecao.responsavel,[Validators.required]),
      estacao: new FormControl(colecao.estacao,[Validators.required]),
      marca: new FormControl(colecao.marca,[Validators.required]),
      orcamento: new FormControl(colecao.orcamento,[Validators.required]),
      anoLancamento: new FormControl(colecao.anoLancamento,[Validators.required])
    });
  }

  OnSubmit(){
    console.log(this.formulario.value);
    this.httpColecoes.putColecao(this.formulario.value,this.colecaoId).toPromise();
  }



  
  excluir(){
    const modelos = [];

    if (this.colecaoId) {
      const IdColecao = parseInt(this.colecaoId);
      for (let i = 0; i < this.modelos.length; i++) {
        if (this.modelos[i].colecao === IdColecao) {
          modelos.push(this.modelos[i]);
          console.log(modelos);
        }
      }
    if (modelos) {
      for (let i = 0; i < modelos.length; i++) {
        this.httpModelos.deleteModelos(modelos[i].id).toPromise();
      }
    }
    this.httpColecoes.deleteColecao(this.colecaoId).toPromise();
    }
  }
}
