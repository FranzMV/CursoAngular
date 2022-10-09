import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {
  termino : string = ' ';
  hayError : boolean = false;

  constructor( private paisSevice: PaisService) { }

  buscar(){
    this.hayError = false;
    console.log(this.termino);
    this.paisSevice.buscarPais(this.termino)
        .subscribe(
        {
          next:(resp) =>{
            console.log(resp);
          },
          error: (err) => {
            console.log('Error');
            console.info(err);
            this.hayError = true;
          }
        }
        );
  }
}
