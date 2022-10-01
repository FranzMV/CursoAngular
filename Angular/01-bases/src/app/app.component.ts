import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//Cargamos el componente
  templateUrl: './app.component.html', //fichero html para mostrar en el componente
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titulo: string = 'Contador App';
  numero: number = 10;

  acumular(valor : number){
    this.numero += valor;
  }

  
}
