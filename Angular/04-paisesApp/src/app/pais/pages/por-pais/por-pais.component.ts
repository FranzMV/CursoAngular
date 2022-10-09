import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
})
export class PorPaisComponent {
  
  termino : string = ' ';
  hayError : boolean = false;
  paises : Country [] = [];

  constructor( private paisSrevice: PaisService) { }

  buscar( termino : string ){
    this.hayError = false;
    this.termino = termino;

    this.paisSrevice.buscarPais(this.termino)
        .subscribe(
        {
          next:(paises) =>{
            console.log(paises);
            this.paises = paises;
          },
          error: (err) => {
            console.log('Error');
            console.info(err);
            this.hayError = true;
            this.paises = [];
          }
        }
        );
  }

  sugerencias( termino: string ){
    this.hayError = false;
    //Todo crear sugerencias
  }
}
