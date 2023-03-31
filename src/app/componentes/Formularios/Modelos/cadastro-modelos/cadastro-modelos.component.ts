import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Colecoes } from 'src/app/interfaces/colecoes';
import { Modelos } from 'src/app/interfaces/modelos';
import { ColecoesService } from 'src/app/servicos/colecoes.service';
import { ModelosService } from 'src/app/servicos/modelos.service';

@Component({
  selector: 'app-cadastro-modelos',
  templateUrl: './cadastro-modelos.component.html',
  styleUrls: ['./cadastro-modelos.component.scss']
})
export class CadastroModelosComponent {
  formulario!: FormGroup; 
  colecoes!: Colecoes[]|undefined;

  constructor(private httpModelos: ModelosService, private httpColecoes: ColecoesService){}
  async ngOnInit() {
    this.colecoes = await this.httpColecoes.getColecoes().toPromise();
    this.criarFormulario();
    
  }

  criarFormulario(){
    this.formulario = new FormGroup({
      nome: new FormControl('',[Validators.required]),
      tipoModelo: new FormControl('',[Validators.required]),
      colecao: new FormControl('',[Validators.required]),
      responsavel: new FormControl('',[Validators.required]),
      bordado: new FormControl('',[Validators.required]),
      estampa: new FormControl('',[Validators.required])
    });
  }

  OnSubmit(){
    if (!this.formulario.valid)  {
      alert('Ouve algum erro de validação nos dados de seu Formulário !')
      console.log(this.formulario)
      return
    }
    const modelo = {
      nome: this.formulario.value.nome,
      tipoModelo: this.formulario.value.tipoModelo,
      colecao: parseInt(this.formulario.value.colecao),
      responsavel: this.formulario.value.responsavel,
      bordado: this.formulario.value.bordado,
      estampa: this.formulario.value.estampa
    }

    this.cadastrarModelo(modelo);
    this.criarFormulario();
  }

  cadastrarModelo(modelo: Modelos){
    this.httpModelos.postModelo(modelo).toPromise();
  }
}
