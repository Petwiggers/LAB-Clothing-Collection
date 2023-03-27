import { Component } from '@angular/core';
import { GetColecoesService } from 'src/app/servicos/get-colecoes.service';

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
  constructor(private http: GetColecoesService){}

  pegarColecoes(){
    this.http.getColecoes().subscribe((retorno => {
      retorno.map((valor) => {
        if (valor.modelos) {
          this.numeroModelos += valor.modelos.length;
        }
      })
    }))
  }
 

}
