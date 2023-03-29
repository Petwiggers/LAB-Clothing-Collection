import { Component, OnInit } from '@angular/core';import { ColecoesService } from 'src/app/servicos/colecoes.service';

@Component({
  selector: 'app-colecoes',
  templateUrl: './colecoes.component.html',
  styleUrls: ['./colecoes.component.scss']
})
export class CardColecoesComponent implements OnInit{
  numeroColecoes!: number ;

  ngOnInit(): void {
    this.pegarColecoes();
  }
  constructor(private http: ColecoesService){}

  pegarColecoes(){
    this.http.getColecoes().subscribe((retorno => {
      this.numeroColecoes = retorno.length;
    }))
  }
 

}
