import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from '../start/start.component';
import { ColeccionesComponent } from '../colecciones/colecciones.component';
import { ColeccionDetalleComponent } from '../coleccion-detalle/coleccion-detalle.component'

const routes: Routes = [{
		path: '', component: StartComponent
	},{
		path: 'colecciones', component: ColeccionesComponent,
	},{
		path : 'coleccion/:id', component : ColeccionDetalleComponent
	},{
		path: '**', redirectTo: '/'
	}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
