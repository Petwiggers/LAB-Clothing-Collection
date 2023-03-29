import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/servicos/user.service';

@Component({
  selector: 'app-form-cadastro-usuario',
  templateUrl: './form-cadastro-usuario.component.html',
  styleUrls: ['./form-cadastro-usuario.component.scss']
})
export class FormCadastroUsuarioComponent {
  formulario!: FormGroup; 

  constructor(private http:UserService, private rota: Router){}

  ngOnInit(): void {
    this.criarFormulario();
  }

  criarFormulario(){
    const validadorCNPJ: string = "[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2}";

    this.formulario = new FormGroup({
      nome: new FormControl('',[Validators.required,Validators.minLength(7),Validators.pattern("[A-z]*")]),
      empresa: new FormControl('',[Validators.required,Validators.minLength(7),Validators.pattern("[A-z]*")]),
      cnpj: new FormControl('',[Validators.required,Validators.minLength(14),Validators.pattern(validadorCNPJ)]),
      email: new FormControl('',[Validators.required,Validators.email]),
      senha: new FormControl('',[Validators.required,Validators.minLength(8)]),
      confirmacaoSenha: new FormControl('',[Validators.required,Validators.minLength(8)])
    });
  }
  OnSubmit(){
    const senha: string = this.formulario.value.senha;
    const confirmacaoSenha: string = this.formulario.value.confirmacaoSenha;

    if (!this.formulario.valid) {
      console.log(this.formulario);
      alert('Ouve algum erro de validação nos dados de seu Formulário !')
      return
    }else if (!(senha === confirmacaoSenha)) {
      alert("Você não Digitou a mesma senha!");
      return
    }
    this.adicionarUsuario();
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
    this.http.postUsuario(usuario).subscribe(resultado => {
      console.log(resultado);
    });
    this.rota.navigate(['/Login'])
  }
}
