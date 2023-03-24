import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioLoginComponent } from './componentes/Formularios/formulario-login/formulario-login.component';
import { SimplesComponent } from './layout/Simples/simples.component';
import { EsqueciSenhaComponent } from './pages/Esqueci-Senha/esqueci-senha.component';
import { LoginComponent } from './pages/Login/login.component';
import { FormEsqueciSenhaComponent } from './componentes/Formularios/form-esqueci-senha/form-esqueci-senha.component';
import { CadastroUsuarioComponent } from './pages/cadastro-usuario/cadastro-usuario.component';
import { FormCadastroUsuarioComponent } from './componentes/Formularios/form-cadastro-usuario/form-cadastro-usuario.component';
import { CompletoComponent } from './layout/completo/completo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EsqueciSenhaComponent,
    SimplesComponent,
    FormularioLoginComponent,
    FormEsqueciSenhaComponent,
    CadastroUsuarioComponent,
    FormCadastroUsuarioComponent,
    CompletoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
