import { CommonModule } from "@angular/common";
import { ContadorComponent } from './contador/contador.component';
import { NgModule } from '@angular/core';


@NgModule({
    declarations:[//Componentes del módulo
        ContadorComponent,
    ],
    exports:[//Cosas visibles fuera de este módulo
        ContadorComponent
    ]

})

export class ContadorModule{}