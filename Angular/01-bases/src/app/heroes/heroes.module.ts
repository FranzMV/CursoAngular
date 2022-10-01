import { CommonModule } from "@angular/common";
import { NgModule }   from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';



@NgModule({
    declarations:[//Componentes del módulo
        HeroeComponent,
        ListadoComponent
    ],
    exports:[//Cosas visibles fuera de este módulo
        ListadoComponent
    ],
    imports:[
        CommonModule
    ]

})

export class HeroeModule{}