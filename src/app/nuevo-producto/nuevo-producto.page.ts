import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-nuevo-producto',
	templateUrl: './nuevo-producto.page.html',
	styleUrls: ['./nuevo-producto.page.scss'],
})
export class NuevoProductoPage implements OnInit {

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
}
