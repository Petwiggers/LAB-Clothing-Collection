import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimplesComponent } from './layout/Simples/simples.component';
import { CadastroUsuarioComponent } from './pages/cadastro-usuario/cadastro-usuario.component';
import { EsqueciSenhaComponent } from './pages/Esqueci-Senha/esqueci-senha.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/Login/login.component';


const routes: Routes = [
  {path: '', redirectTo: 'Login',pathMatch: 'full'},
  {path: '', component: SimplesComponent, children: [
    {path: 'Login', component: LoginComponent},
    {path: 'EsqueciSenha', component: EsqueciSenhaComponent},
    {path: 'CadastroUsuario', component: CadastroUsuarioComponent}
  ]},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
