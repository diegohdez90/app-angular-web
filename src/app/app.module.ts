import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ColeccionesComponent } from './colecciones/colecciones.component';
import { StartComponent } from './start/start.component';



import { ColeccionesService } from './colecciones.service';
import { GaleriaService } from './galeria.service';
import { AppRoutingModule } from './app/app-routing.module';

import { SlickModule } from 'ngx-slick';
import { ColeccionDetalleComponent } from './coleccion-detalle/coleccion-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    ColeccionesComponent,
    StartComponent,
    ColeccionDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickModule.forRoot()
  ],
  providers: [ColeccionesService,GaleriaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
