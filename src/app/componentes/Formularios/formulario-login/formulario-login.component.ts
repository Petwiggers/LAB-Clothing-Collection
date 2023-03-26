import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidarUsuarioService } from 'src/app/servicos/validar-usuario.service';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.scss']
})
export class FormularioLoginComponent implements OnInit {
  formulario!: FormGroup; 

  ngOnInit(): void {
    this.criarFormulario();
  }
  constructor(private httpUsuario: ValidarUsuarioService, private rota: Router){}

  criarFormulario(){
    this.formulario = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      senha: new FormControl('',[Validators.required,Validators.minLength(8)])
    });
  }
  OnSubmit(){
    if (!this.formulario.valid) {
      alert('Formatação Inválida!');
      return
    }
    this.validarUsuario();
  }
  
  validarUsuario(){
    const email: string = this.formulario.value.email;
    const senha: string = this.formulario.value.senha;
    this.httpUsuario.validarUsuario().subscribe((data)=> {
      let logado = false;
      data.map(value => {
        if ((value.email === email && value.senha === senha)) {
          this.logarUsuario();
          logado = true;
          return
        }
      })
      if (!logado) {
        alert("Nenhum Usuario Encontrado");
      }
    })
  }

  logarUsuario(){
    localStorage.setItem('logado','true');
    this.rota.navigate(['/home/Dashboard']);
  }
}
