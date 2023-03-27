import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletoComponent } from './layout/completo/completo.component';
import { SimplesComponent } from './layout/Simples/simples.component';
import { CadastroUsuarioComponent } from './pages/cadastro-usuario/cadastro-usuario.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EsqueciSenhaComponent } from './pages/Esqueci-Senha/esqueci-senha.component';
import { LoginComponent } from './pages/Login/login.component';
import { PaginaColecoesComponent } from './pages/pagina-colecoes/pagina-colecoes.component';
import { GuardHomeGuard } from './servicos/guard-home.guard';


const routes: Routes = [
  {path: '', redirectTo: 'Login',pathMatch: 'full'},
  {path: '', component: SimplesComponent, children: [
    {path: 'Login', component: LoginComponent},
    {path: 'EsqueciSenha', component: EsqueciSenhaComponent},
    {path: 'CadastroUsuario', component: CadastroUsuarioComponent}
  ]},
  {path: 'home', component: CompletoComponent, canActivate : [GuardHomeGuard],children: [
    {path:'Dashboard', component: DashboardComponent},
    {path:'Colecoes',component: PaginaColecoesComponent}
  ]}
  // {path: '', redirectTo: 'Dashboard',pathMatch: 'full'},
  // {path: 'Dashboard',component: DashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
