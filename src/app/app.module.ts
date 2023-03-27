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
import { MenuLateralComponent } from './componentes/menu-lateral/menu-lateral.component';
import { HeaderComponent } from './componentes/header/header.component';

import { ModelosComponent } from './componentes/Cards/modelos/modelos.component';
import { OrcamentoMedioComponent } from './componentes/Cards/orcamento-medio/orcamento-medio.component';
import { TabelaDashboardComponent } from './componentes/Tabelas/tabela-dashboard/tabela-dashboard.component';
import { TabelaColecaoComponent } from './componentes/Tabelas/tabela-colecao/tabela-colecao.component';
import { CardColecoesComponent } from './componentes/Cards/colecoes/colecoes.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PaginaColecoesComponent } from './pages/pagina-colecoes/pagina-colecoes.component';


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
    MenuLateralComponent,
    HeaderComponent,
    DashboardComponent,
    CardColecoesComponent,
    ModelosComponent,
    OrcamentoMedioComponent,
    TabelaDashboardComponent,
    TabelaColecaoComponent,
    PaginaColecoesComponent,
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
