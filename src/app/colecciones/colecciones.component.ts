import { Component, OnInit } from '@angular/core';

import { ColeccionesService } from '../colecciones.service';

@Component({
  selector: 'app-colecciones',
  templateUrl: './colecciones.component.html',
  styleUrls: ['./colecciones.component.css']
})
export class ColeccionesComponent implements OnInit {
	colecciones = [];
	coleccion = {};
	bannerWidth = '100%';
	slickConfig = {
		"slidesToShow": 1,
		"slidesToScroll":1,
		"autoplay": true,
		"autoplaySpeed": 2000
	}
  constructor(private coleccionesService:ColeccionesService) { }

  ngOnInit() {
  	this.coleccion = this.coleccionesService.loadColeccion();
  	this.colecciones = this.coleccionesService.loadColecciones();
  }

}
