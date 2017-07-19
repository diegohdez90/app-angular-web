import { Component, OnInit } from '@angular/core';
import { ColeccionesService } from '../colecciones.service';
import { GaleriaService } from '../galeria.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
	colecciones = [];
	galeria = [];
  constructor(private coleccionesService : ColeccionesService, private galeriaService : GaleriaService) { }

  ngOnInit() {
  	this.colecciones = this.coleccionesService.loadColecciones();
  	this.galeria = this.galeriaService.loadGaleria();
  }

}
