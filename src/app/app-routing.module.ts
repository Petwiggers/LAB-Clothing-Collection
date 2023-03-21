import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimplesComponent } from './layout/Simples/simples.component';
import { LoginComponent } from './pages/Login/login.component';






const routes: Routes = [
  {path: '', redirectTo: 'login',pathMatch: 'full'},
  {path: '', component: SimplesComponent, children: [
    {path: 'login', component: LoginComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
