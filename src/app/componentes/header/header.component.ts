import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
 
  constructor(private rota: Router){}
  sair(){
    console.log('Executou Sair!');
    
    localStorage.clear();
    this.rota.navigate(['/Login'])
  }


}
