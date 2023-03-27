
import { Component, OnInit } from '@angular/core';import { GetColecoesService } from 'src/app/servicos/get-colecoes.service';



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
  constructor(private http: GetColecoesService){}

  pegarColecoes(){
    this.http.getColecoes().subscribe((retorno => {
      this.numeroColecoes = retorno.length;
    }))
  }
 

}
