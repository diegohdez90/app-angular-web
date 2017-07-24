import { Component, OnInit } from '@angular/core';
import { ColeccionesService } from '../shared/colecciones.service';
import { GaleriaService } from '../shared/galeria.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
	colecciones = [];
	galeria;
  constructor(private coleccionesService : ColeccionesService, private galeriaService : GaleriaService) { }

  ngOnInit() {
  	this.colecciones = this.coleccionesService.loadColecciones();
  	this.galeriaService.loadGaleria()
        .subscribe(galeria => {
          console.log(galeria);
          this.galeria = galeria;
        })
  }

}
