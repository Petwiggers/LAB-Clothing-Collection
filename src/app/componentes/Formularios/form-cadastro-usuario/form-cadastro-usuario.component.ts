import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CadastrarUsuarioService } from 'src/app/servicos/cadastrar-usuario.service';

@Component({
  selector: 'app-form-cadastro-usuario',
  templateUrl: './form-cadastro-usuario.component.html',
  styleUrls: ['./form-cadastro-usuario.component.scss']
})
export class FormCadastroUsuarioComponent {
  formulario!: FormGroup; 
  letrasPattern = "[A-z]"

  constructor(private http:CadastrarUsuarioService){}

  ngOnInit(): void {
    this.criarFormulario();
  }

  criarFormulario(){
    this.formulario = new FormGroup({
      nome: new FormControl('',[Validators.required,Validators.minLength(7),Validators.pattern("[A-z]*")]),
      empresa: new FormControl('',[Validators.required,Validators.minLength(7),Validators.pattern("[A-z]*")]),
      cnpj: new FormControl('',[Validators.required,Validators.minLength(14),Validators.pattern("[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2}")]),
      email: new FormControl('',[Validators.required,Validators.email]),
      senha: new FormControl('',[Validators.required,Validators.minLength(8)]),
      confirmacaoSenha: new FormControl('',[Validators.required,Validators.minLength(8)])
    });
  }
  OnSubmit(){
    if (!this.formulario.valid) {
      console.log(this.formulario);
      
      alert('Ouve algum erro de validação nos dados')
      return
    }
    this.adicionarUsuario()
    console.log(this.formulario.value);
    this.criarFormulario();
  }

 adicionarUsuario(){
    const usuario = {
      nome: String = this.formulario.value.nome,
      empresa: String = this.formulario.value.empresa,
      cnpj: String = this.formulario.value.cnpj,
      email: String =  this.formulario.value.email,
      senha:String = this.formulario.value.senha,
    }
    this.http.adicionarUsuario(usuario).subscribe(resultado => {
      console.log(resultado);
    });
  }
}
