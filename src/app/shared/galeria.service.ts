import { Injectable } from '@angular/core';


const IMG_URL = 'assets/img/';

@Injectable()
export class GaleriaService {
	load = false;
	galeria = [
	"image-gallery-01.png",
	"image-gallery-02.png",
	"image-gallery-03.png",
	"image-gallery-04.png",
	"image-gallery-05.png",
	"image-gallery-06.png",
	"image-gallery-07.png",
	];
  constructor() { }

  concatURL_IMG(file:string){
  	this.load = true;
  	return `${IMG_URL}${file}`;
  }

  loadGaleria(){
	  this.galeria = (!this.load) ? this.galeria.map((g) => { return this.concatURL_IMG(g) } ) : this.galeria;
	  return this.galeria;
  }
}
