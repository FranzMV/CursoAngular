import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.intefaces';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})

export class MainPageComponent {
  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ];

  nuevo: Personaje ={
    nombre: 'Maestro Roshi',
    poder: 10000
  }

  agregarNuevoPersonaje( nuevoPersonaje : Personaje) : void {
    this.personajes.push(nuevoPersonaje);
  }

  //Inyeccion de dependencias: Inyectamos el servicio de este comoponente
  constructor(private dbzService: DbzService){

  }

}
