import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-colecoes',
  templateUrl: './cadastro-colecoes.component.html',
  styleUrls: ['./cadastro-colecoes.component.scss']
})
export class CadastroColecoesComponent implements OnInit{
  formulario!: FormGroup; 

  constructor(private rota: Router){}
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
      console.log(this.formulario);
      console.log(this.formulario.valid);
      alert('Ouve algum erro de validação nos dados de seu Formulário !')
      return
    }
    console.log(this.formulario.value);
    this.criarFormulario();
  }

  retornarListagem(){
    this.rota.navigate(['/home/Colecoes'])
  }
}
