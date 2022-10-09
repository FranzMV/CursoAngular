import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';


//Rutas de la aplicacion
const routes: Routes =[

    {
        path: '',//ruta -> Primer path para mostrar
        component: PorPaisComponent,
        pathMatch: 'full'
    },
    {
        path: 'region',// ruta-> /region
        component: PorRegionComponent

    },
    {
        path:'capital',//ruta -> /capital
        component: PorCapitalComponent
    },
    {
        path:'pais/:id', //ruta para ver un pais -> /pais/{idPais}
        component: VerPaisComponent
    },
    {
        path: '**',//Cualquier otro path que no exista, se redirecciona a la ruta pricipal
        redirectTo: ''
    }
]


@NgModule({
    imports:[
        RouterModule.forRoot( routes ) //Hace la configuracion de las rutas establecidads en el array routes
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}