import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [

  ]
})
export class PaisInputComponent implements OnInit {

@Output() onEnter: EventEmitter<string> = new EventEmitter();
@Output() onDebounce : EventEmitter<string> = new EventEmitter();//Se emite cuando se deja de escribir en la barra de busqueda

debouncer: Subject <string> = new Subject();

termino : string ='';

ngOnInit(): void {
  this.debouncer
    .pipe(debounceTime(300))
    .subscribe(valor => {
      this.onDebounce.emit(valor);
    })
}

buscar(){ this,this.onEnter.emit(this.termino); }

teclaPresionada( ){
  this.debouncer.next(this.termino);
}
 
}
