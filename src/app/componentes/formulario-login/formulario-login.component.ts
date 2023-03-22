import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  constructor(){}

  criarFormulario(){
    this.formulario = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      senha: new FormControl('',[Validators.required,Validators.minLength(8)])
    })
  }
  OnSubmit(){
    if (!this.formulario.valid) {
      alert('Email ou Senha Incorretos!')
      return
    }
    console.log('Formulario Validado!!');
    
    console.log(this.formulario.value);
  }
}
