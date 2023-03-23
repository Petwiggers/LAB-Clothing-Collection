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
import { HomeComponent } from './pages/home/home.component';
import { FormEsqueciSenhaComponent } from './componentes/form-esqueci-senha/form-esqueci-senha.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EsqueciSenhaComponent,
    SimplesComponent,
    FormularioLoginComponent,
    HomeComponent,
    FormEsqueciSenhaComponent,
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
