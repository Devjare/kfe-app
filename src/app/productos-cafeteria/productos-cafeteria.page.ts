import { Component, OnInit } from '@angular/core';
import { CafeteriaService } from 'src/app/services/cafeteria.service';

@Component({
	selector: 'app-productos-cafeteria',
	templateUrl: './productos-cafeteria.page.html',
	styleUrls: ['./productos-cafeteria.page.scss'],
})
export class ProductosCafeteriaPage implements OnInit {

	private guisos: any[] = [];
	private platillos: any[] = [];

	constructor(
		private cafeteriaService: CafeteriaService) { }

	ngOnInit() {
		this.platillos.push(
		{
			foto: 'url',
			ingredientes: '',
			precio: 6.5,
			producto: 'Taco Maiz',
			disponible: false
		});
		this.platillos.push(
		{
			foto: 'url',
			ingregientes: '',
			precio: 7.5,
			producto: 'Taco Harina',
			disponible: true
		});

		this.guisos.push({nombre: 'Huevo Verde', disponible: true});
		this.guisos.push({nombre: 'Huevo Rojo Alv', disponible: false});
		this.guisos.push({nombre: 'Papas con chori', disponible: true});
		this.guisos.push({nombre: 'Otro guiso mas', disponible: false});
		this.guisos.push({nombre: 'Y otro mas', disponible: true});
	}

	cambiarDisponibilidadPlatillo(platillo){
		platillo.disponible = !platillo.disponible;
	}
	
	cambiarDisponibilidadGuiso(guiso){
		guiso.disponible = !guiso.disponible;
	}
}
