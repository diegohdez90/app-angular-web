import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ColeccionesService } from '../shared/colecciones.service';

@Component({
  selector: 'app-coleccion-detalle',
  templateUrl: './coleccion-detalle.component.html',
  styleUrls: ['./coleccion-detalle.component.css']
})
export class ColeccionDetalleComponent implements OnInit,OnDestroy {
  id:number;
  coleccion:any;
  coleccionesNav:any;
  bannerWidth:'100%';
  private sub: any;
  constructor(
    private route:ActivatedRoute,
    private coleccionService : ColeccionesService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']
      this.coleccion = this.coleccionService.getColeccion(this.id);
    });
    this.coleccionesNav = this.coleccionService.loadColecciones();
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }


}
