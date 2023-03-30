import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Colecoes } from 'src/app/interfaces/colecoes';
import { ColecoesService } from 'src/app/servicos/colecoes.service';

@Component({
  selector: 'app-editar-colecoes-form',
  templateUrl: './editar-colecoes.component.html',
  styleUrls: ['./editar-colecoes.component.scss']
})
export class EditarColecoesComponent implements OnInit{
  colecaoId!: string|null;
  colecao!: Colecoes[]|undefined;
  formulario!: FormGroup;

  constructor(private rotaAtiva: ActivatedRoute, private http: ColecoesService){}

  async ngOnInit(){
    this.colecaoId = this.rotaAtiva.snapshot.paramMap.get('id');
    this.colecao = await this.http.getColecoeId(this.colecaoId).toPromise();
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
    this.http.putColecao(this.formulario.value,this.colecaoId).toPromise();
  }
  excluir(){
    this.http.deleteColecao(this.colecaoId).toPromise();
  }
}
