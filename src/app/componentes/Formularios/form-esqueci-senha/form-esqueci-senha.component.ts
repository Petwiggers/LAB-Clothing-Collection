import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-esqueci-senha',
  templateUrl: './form-esqueci-senha.component.html',
  styleUrls: ['./form-esqueci-senha.component.scss']
})
export class FormEsqueciSenhaComponent {
  formulario!: FormGroup; 
  submit: boolean = false;

  ngOnInit(): void {
    this.criarFormulario();
  }

  criarFormulario(){
    this.formulario = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
    });
  }
  OnSubmit(){
    if (!this.formulario.valid) {
      alert('Formato do Email Incorreto !');
      return
    }
    this.submit = true;
    console.log(this.formulario.value);
  }
}
