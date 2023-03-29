import { Component } from '@angular/core';
import { ModelosService } from 'src/app/servicos/modelos.service';

@Component({
  selector: 'app-modelos',
  templateUrl: './modelos.component.html',
  styleUrls: ['./modelos.component.scss']
})
export class ModelosComponent {
  numeroModelos: number = 0 ;

  ngOnInit(): void {
    this.pegarColecoes();
  }
  constructor(private http: ModelosService){}

  pegarColecoes(){
    this.http.getModelos().subscribe((retorno) => {
      this.numeroModelos = retorno.length;
    })

}
 

}
