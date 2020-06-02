import { Component, OnInit } from '@angular/core';

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

	constructor() { }

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
		console.log('nombre: ', this.nombre);
		console.log('precio: ', this.precio);
		console.log('disponible: ', this.disponible);
		console.log('descripcion: ', this.descripcion);
		console.log('tipo: ', this.tipo);
	}
}
