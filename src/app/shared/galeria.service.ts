import { Injectable } from '@angular/core';

@Injectable()
export class GaleriaService {

galeria = [
    'assets/img/image-gallery-01.png',
    'assets/img/image-gallery-02.png',
    'assets/img/image-gallery-03.png',
    'assets/img/image-gallery-04.png',
    'assets/img/image-gallery-05.png',
    'assets/img/image-gallery-06.png',
    'assets/img/image-gallery-07.png',
];
  constructor() { }

  loadGaleria() {
    return this.galeria;
  }
}
