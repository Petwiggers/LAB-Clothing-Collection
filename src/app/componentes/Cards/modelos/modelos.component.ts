import { Component } from '@angular/core';
import { GetModelosService } from 'src/app/servicos/get-modelos.service';

@Component({
  selector: 'app-modelos',
  templateUrl: './modelos.component.html',
  styleUrls: ['./modelos.component.scss']
})
export class ModelosComponent {
  numeroModelos!: number ;

  ngOnInit(): void {
    this.pegarColecoes();
  }
  constructor(private http: GetModelosService){}

  pegarColecoes(){
    this.http.getColecoes().subscribe((retorno => {
      this.numeroModelos = retorno.length;
    }))
  }
 

}
