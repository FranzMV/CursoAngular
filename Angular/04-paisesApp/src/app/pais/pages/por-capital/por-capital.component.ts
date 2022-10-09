import { Component, Input, OnInit } from '@angular/core';


import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
})
export class PorCapitalComponent {
  
  termino : string = ' ';
  hayError : boolean = false;
  paises : Country [] = [];


  

  constructor( private paisService : PaisService) { }

  buscar( termino : string ){
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarCapital(this.termino)
        .subscribe(
          {
            next:(paises) =>{
              this.paises = paises;
            },
            error: (err) => {
              this.hayError = true;
              this.paises = [];
            }
          }
        );
  }

}
