import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Colecoes } from 'src/app/interfaces/colecoes';
import { Modelos } from 'src/app/interfaces/modelos';
import { ColecoesService } from 'src/app/servicos/colecoes.service';
import { ModelosService } from 'src/app/servicos/modelos.service';

@Component({
  selector: 'app-editar-modelos',
  templateUrl: './editar-modelos.component.html',
  styleUrls: ['./editar-modelos.component.scss']
})
export class EditarModelosComponent {
  formulario!: FormGroup; 
  colecoes!: Colecoes[]|undefined;
  modelo!: Modelos[]|undefined;
  modeloId!: string|null;

  constructor(private httpModelos: ModelosService, private httpColecoes: ColecoesService,private rotaAtiva: ActivatedRoute){}
  async ngOnInit() {
    this.modeloId = this.rotaAtiva.snapshot.paramMap.get('id');
    this.colecoes = await this.httpColecoes.getColecoes().toPromise();
    this.modelo = await this.httpModelos.getModeloId(this.modeloId).toPromise();
    this.criarFormulario(this.modelo);
  }

  criarFormulario(modelo: any){
    this.formulario = new FormGroup({
      nome: new FormControl(modelo.nome,[Validators.required]),
      tipoModelo: new FormControl(modelo.tipoModelo,[Validators.required]),
      colecao: new FormControl(modelo.colecao,[Validators.required]),
      responsavel: new FormControl(modelo.responsavel,[Validators.required]),
      bordado: new FormControl(modelo.bordado,[Validators.required]),
      estampa: new FormControl(modelo.estampa,[Validators.required])
    });
  }

  OnSubmit(){
    if (!this.formulario.valid) {
      alert('Ouve algum erro de validação nos dados de seu Formulário !')
      return
    }
    this.httpModelos.putModelo(this.formulario.value,this.modeloId).toPromise();
    // console.log(this.formulario.value);
    
  }

  excluir(){
    this.httpModelos.deleteModelos(this.modeloId).toPromise();
  }
}
