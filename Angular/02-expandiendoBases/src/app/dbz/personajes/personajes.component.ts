import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.intefaces';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {

  @Input() personajes : Personaje [] = []; //Pasarle este componente al componente padre
}
