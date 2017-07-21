import { Injectable } from '@angular/core';

const IMG_URL = 'assets/img/';

@Injectable()
export class ColeccionesService {
	load = false;
	loadMain = false;
	coleccion = {
		"title" : "Colecciones",
		"banner" : [{"imagen" : "enrollable-wolken.png", "tmpImg" : ""},{"imagen" : "madera-wolken.png", "tmpImg": ""}],
		"description" : "Bellos y atrevidos diseños que dan color y frescura a cualquier espacio. Personaliza cada ventana y dale alegría a tu hogar."
	}
	colecciones = [
	{ "id" : 1,
		"title" :"Platinum",
		"banner" : [{
			'img' : 'PLATINUM-01.png',
			'tmpImg': ''
		},{
			'img' : 'PLATINUM-02.png',
			'tmpImg': ''
		},{
			'img' : 'PLATINUM-03.png',
			'tmpImg': ''
		},{
			'img' : 'PLATINUM-04.png',
			'tmpImg': ''
		}],
		"description" : "<p>Deco Fantasy. Deja que tu imaginación vuele y decora con la magia del color y el diseño. Descubre nuevos conceptos que crean emoción. "+
										"Awnings. Tejidos innovadores y tecnológicos que harán que disfrutes de tus espacios exteriores como nunca lo habías hecho.</p>"+
										"<p>Basics. Sigue la tendencia de la moda de colores que se plasman sobre tejidos traslúcidos que llenaran de luz tus espacios."+
										"Deco Select. Tejidos únicos, de diseño sobrio y elegante, que te permitirán crear espacios con gran personalidad. Black Out. "+
										"Lograr el máximo confort y privacidad es uno de nuestros objetivos. Tejidos Black Out que te harán soñar.</p>"
	},
	{ "id" : 2,
		"title" :"High Living",
		"banner" : [],
		"description" : "High Living es una colección inspirada en el estilo de vida actual, ecléctica y sofisticada, "+
										"que responde a todas las necesidades de los profesionales de la decoración. Es una colección que evoluciona "+
										"el concepto de la cortina clásica, reinterpretándola con un toque minimalista, y dotándola de las carecterísticas "+
										"técnicas que necesita el usuario de hoy, sin perder la calidez y aspecto refinado de los tejidos de alta gama. "
	},
	{ "id" : 3,
		"title" :"Luxury Collection",
		"banner" : [],
		"description" : "High Living es una colección inspirada en el estilo de vida actual, ecléctica y sofisticada, que responde a todas las "+
										"necesidades de los profesionales de la decoración. Es una colección que evoluciona el concepto de la cortina clásica,"+
										" reinterpretándola con un toque minimalista, y dotándola de las carecterísticas técnicas que necesita el usuario de hoy, "+
										"sin perder la calidez y aspecto refinado de los tejidos de alta gama. "
	},
	{ "id" : 4,
		"title" :"Handmade Collection",
		"banner" : [],
		"description" : "Con un toque fresco y natural, las Persianas de la Colección Handmade permiten crear ambientes cálidos y elegantes. "+
										"Disponibles en una amplia gama de colores, son elaboradas con los mejores materiales seleccionados exclusivamente para garantizar "+
										"su durabilidad y estabilidad dimensional. "
	},
	{ "id" : 5,
		"title" :"Drapes",
		"banner" : [],
		"description" : "Cortinas con los más altos estándares de calidad que atienden la necesidad de regular la iluminación y privacidad de los espacios de "+
										"vida cuidando de hacerlo de manera que se mantenga y realce el diseño interior del hogar de nuestros clientes." }
	]
  constructor() { }

  concatURL_IMG(file:string){
  	return `${IMG_URL}${file}`;
  }

  loadColeccion(){
		if(this.loadMain) this.coleccion.banner = this.coleccion.banner.map( (i) => Object.assign({},i,{image : `${i.tmpImg}`}) )
  	if(!this.loadMain){
			this.coleccion.banner =  this.coleccion.banner.map( (b) => Object.assign({},b,{tmpImg : `${b.imagen}`, imagen : `${IMG_URL}${b.imagen}`}) );
			this.loadMain=true;
		}
  	return this.coleccion;
  }

  loadColecciones(){
  	return this.colecciones;
  }

	getColeccion(id:number){
		let i = id-1;
		if(this.load) this.colecciones[i].banner = this.colecciones[i].banner.map(i => Object.assign({},i,{img : `${i.tmpImg}` }));
		if(this.colecciones[i].banner.length>0){
			this.colecciones[i].banner = this.colecciones[i].banner.map(i => Object.assign({},i,{tmpImg : `${i.img}`,  img : `${IMG_URL}${i.img}` }));
			this.load=true
		}
		return this.colecciones[i];
	}
}
