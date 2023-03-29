import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/servicos/user.service';


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
  constructor(private httpUsuario: UserService, private rota: Router){}

  criarFormulario(){
    this.formulario = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      senha: new FormControl('',[Validators.required,Validators.minLength(8)])
    });
  }
  OnSubmit(){
    if (!this.formulario.valid) {
      alert('Email ou Senha Incorretos!');
      return
    }
    this.validarUsuario();
  }
  
  validarUsuario(){
    const email: string = this.formulario.value.email;
    const senha: string = this.formulario.value.senha;
    this.httpUsuario.getUsuario().subscribe((data)=> {
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
