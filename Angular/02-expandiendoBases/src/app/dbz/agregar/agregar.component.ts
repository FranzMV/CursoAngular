import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Personaje } from '../interfaces/dbz.intefaces';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',

})
export class AgregarComponent  {
 

  @Input() nuevo : Personaje ={
    nombre: '',
    poder: 0
  }


  //Emitir eventos
  @Output() onNuevoPersonaje : EventEmitter<Personaje> = new EventEmitter<Personaje>();

  agregar(){
    if(this.nuevo.nombre.trim().length === 0) { return };
    console.log(this.nuevo);
    this.onNuevoPersonaje.emit(this.nuevo);

    this.nuevo ={
      nombre: '',
      poder: 0
    }

  }
}
