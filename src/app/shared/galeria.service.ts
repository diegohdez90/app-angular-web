import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


const SERVER_URL = "http://localhost:3000/gallery";

const IMG_URL = 'assets/img/';

@Injectable()
export class GaleriaService {
	load = false;

  constructor(private http : Http) { }

  concatURL_IMG(file:string){
  	this.load = true;
  	return `${IMG_URL}${file}`;
  }

  loadGaleria(){
  	return this.http.get(SERVER_URL)
  				.map( res => { res.json()} );
  }
}
