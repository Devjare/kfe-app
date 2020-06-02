import { Component, OnInit } from '@angular/core';
import { CafeteriaService } from 'src/app/services/cafeteria.service';
import { Cache } from 'src/app/Cache/cache';

@Component({
	selector: 'app-nuevo-producto',
	templateUrl: './nuevo-producto.page.html',
	styleUrls: ['./nuevo-producto.page.scss'],
})
export class NuevoProductoPage implements OnInit {

	nombre: string = '';
	precio: number = 0.0;
	disponible: boolean = false;
	descripcion: string = '';
	tipo: string = '';

	esPlatillo = true;

	constructor(
		private cafeteriaService: CafeteriaService) { }

	ngOnInit() {
	}

	cambiarSeleccion(event) {
		console.log('e: ', event.detail.value);
		if(event.detail.value == 'platillo') {
			this.esPlatillo = true; 
		} else {
			this.esPlatillo = false;
		}
	}

	agregarProducto() {
		console.log('Uid: ', Cache.usuario.uid);
		console.log('nombre: ', this.nombre);
		console.log('precio: ', this.precio);
		console.log('disponible: ', this.disponible);
		console.log('descripcion: ', this.descripcion);
		console.log('tipo: ', this.tipo);

		if(this.tipo == 'platillo') {
			this.cafeteriaService.agregarPlatillo({
				cafeteria: Cache.usuario.uid,
				costo: this.precio,
				disponible: this.disponible,
				ingredientes: this.descripcion,
				producto: this.nombre
			}).then(data => {
				console.log('uidplatillo: ', data);	
			});
		} else {
			this.cafeteriaService.agregarGuiso({
				cafeteria: Cache.usuario.uid,
				disponible: this.disponible,
				descripcion: this.descripcion,
				nombre: this.nombre
			}).then(data => {
				console.log('uid: ' , data);
			});
		}

		// TODO: ADD PRODUCT TO DB
	}
}
