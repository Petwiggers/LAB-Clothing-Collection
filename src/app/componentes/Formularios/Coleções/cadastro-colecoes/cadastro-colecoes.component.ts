import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ColecoesService } from 'src/app/servicos/colecoes.service';

@Component({
  selector: 'app-cadastro-colecoes',
  templateUrl: './cadastro-colecoes.component.html',
  styleUrls: ['./cadastro-colecoes.component.scss']
})
export class CadastroColecoesComponent implements OnInit{
  formulario!: FormGroup; 

  constructor(private rota: Router, private http: ColecoesService){}
  ngOnInit(): void {
    this.criarFormulario();
  }

  criarFormulario(){
    this.formulario = new FormGroup({
      nome: new FormControl('',[Validators.required,Validators.minLength(3)]),
      responsavel: new FormControl('',[Validators.required]),
      estacao: new FormControl('',[Validators.required]),
      marca: new FormControl('',[Validators.required]),
      orcamento: new FormControl('',[Validators.required]),
      anoLancamento: new FormControl('',[Validators.required])
    });
  }

  OnSubmit(){
    if (!this.formulario.valid) {
      alert('Ouve algum erro de validação nos dados de seu Formulário !')
      return
    }
    this.cadastrarColecao();
    this.criarFormulario();
  }

  cadastrarColecao(){
    this.http.postColecao(this.formulario.value).toPromise();
    console.log("fez a requizição");
    
  }

  retornarListagem(){
    this.rota.navigate(['/home/Colecoes'])
  }
}
