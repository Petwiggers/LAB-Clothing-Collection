import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardHomeGuard implements CanActivate {
  constructor(private rota: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const logado: string|null = localStorage.getItem('logado');
    if (logado === "true") {
    return true;
    }

    this.rota.navigate(['/Login']);
    return true;
  }
  
}
  

