import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ColeccionesComponent } from './colecciones/colecciones.component';
import { StartComponent } from './start/start.component';



import { ColeccionesService } from './shared/colecciones.service';
import { GaleriaService } from './shared/galeria.service';
import { AppRoutingModule } from './app-routing.module';

import { SlickModule } from 'ngx-slick';
import { ColeccionDetalleComponent } from './coleccion-detalle/coleccion-detalle.component';

import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    ColeccionesComponent,
    StartComponent,
    ColeccionDetalleComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    SlickModule.forRoot()
  ],
  providers: [ColeccionesService,GaleriaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
