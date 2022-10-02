import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent {


  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  buscar(): void{
    const value = this.txtBuscar.nativeElement.value;
    console.log(value);
    this.txtBuscar.nativeElement.value = '';
  }
}
