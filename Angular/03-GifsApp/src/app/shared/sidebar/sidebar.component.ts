import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {

  get historial(){ return this.gifService.historial; }
  //Injectamos el servicio
  constructor(private gifService: GifsService) { }

  buscar(termino : string) : void {
    this.gifService.buscarGifs(termino);

  }

}
