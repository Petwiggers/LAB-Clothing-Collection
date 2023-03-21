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
    
  }
  constructor(){}

  criarFormulario(){
    this.formulario = new FormGroup({
      email: new FormControl(''),
      senha: new FormControl('')
    })
  }
  OnSubmit(){
    console.log(this.formulario.value);
  }
}
