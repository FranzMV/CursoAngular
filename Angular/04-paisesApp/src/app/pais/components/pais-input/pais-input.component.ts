import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',

})
export class PaisInputComponent  {

@Output() onEnter: EventEmitter<string> = new EventEmitter();

  termino : string ='';

  buscar(){
    this,this.onEnter.emit(this.termino);
  }
 
}
