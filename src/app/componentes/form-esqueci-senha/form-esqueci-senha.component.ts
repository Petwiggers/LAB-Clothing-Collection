import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-esqueci-senha',
  templateUrl: './form-esqueci-senha.component.html',
  styleUrls: ['./form-esqueci-senha.component.scss']
})
export class FormEsqueciSenhaComponent {
  formulario!: FormGroup; 

  ngOnInit(): void {
    this.criarFormulario();
  }

  criarFormulario(){
    this.formulario = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
    });
  }
  OnSubmit(){
    console.log(this.formulario.value);
    
  }
}
