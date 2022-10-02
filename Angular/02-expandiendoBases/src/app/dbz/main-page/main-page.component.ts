import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.intefaces';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})

export class MainPageComponent {
  
  nuevo: Personaje ={
    nombre: 'Maestro Roshi',
    poder: 10000
  }

  //Inyeccion de dependencias: Inyectamos el servicio de este comoponente
  constructor(){
    
  }

}
