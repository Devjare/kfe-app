import { Component, OnInit } from '@angular/core';
import { CafeteriaService } from 'src/app/services/cafeteria.service';
import { ModalController } from '@ionic/angular';
import { NuevoProductoPage } from 'src/app/nuevo-producto/nuevo-producto.page';
import { Guiso } from 'src/app/models/guiso';
import { Platillo } from 'src/app/models/platillo';
import { Cache } from 'src/app/Cache/cache';

@Component({
	selector: 'app-productos-cafeteria',
	templateUrl: './productos-cafeteria.page.html',
	styleUrls: ['./productos-cafeteria.page.scss'],
})
export class ProductosCafeteriaPage implements OnInit {

	private guisos: Guiso[] = [];
	private platillos: Platillo[] = [];

	constructor(
		private cafeteriaService: CafeteriaService,
		private modalController: ModalController) { }

	ngOnInit() {
		this.cargarProductos();
	}

	cambiarDisponibilidadPlatillo(platillo){
		console.log('platillo clicked: ', platillo);
		platillo.disponible = !platillo.disponible;
		this.cafeteriaService.actualizarDisponibilidadPlatillo(platillo.uid, platillo.disponible);
	}
	
	cambiarDisponibilidadGuiso(guiso){
		console.log('guiso clicked: ', guiso);
		guiso.disponible = !guiso.disponible;
		this.cafeteriaService.actualizarDisponibilidadGuiso(guiso.uid, guiso.disponible);
	}

	agregarNuevoProducto() {
		console.log('agregarndo nuevo producto...');
		this.presentModal();
	}

	cargarProductos() {
		this.cafeteriaService.getPlatillosFromCafeteria(Cache.usuario.uid).subscribe(platillos => {
			this.platillos = platillos;
			console.log('platillos obtenidos: ', platillos);
			console.log('this.platillos: ', this.platillos);
		});
		this.cafeteriaService.getGuisosFromCafeteria(Cache.usuario.uid).subscribe(guisos => {
			this.guisos = guisos;
			console.log('guisos obtenidos: ', guisos);
			console.log('this.guisos: ', this.guisos);
		});
	}

	async presentModal() {
		const modal = await this.modalController.create({
			component: NuevoProductoPage
		});

		modal.onDidDismiss().then(data => {
			// TODO: EN CASO DE SI HABER AGREGADO PRODUCTO, ACTUALIZAR LOS PRODUCTOS MOSTRADOS.
		});

		return await modal.present();
	}
}
