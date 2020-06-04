import { Component, OnInit } from '@angular/core';
import { CafeteriaService } from 'src/app/services/cafeteria.service';
import { Cache } from 'src/app/Cache/cache';
import { ModalController } from '@ionic/angular';
import { ImagenesService } from 'src/app/services/imagenes.service';
import { ActionSheetController } from '@ionic/angular';

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
	url: string = '../assets/images/comida.png';
	tipo: string = 'platillo';
	foto: File;

	urlDefecto: string = '../assets/images/comida.png';

	esPlatillo = true;

	constructor(
		private cafeteriaService: CafeteriaService,
		private modalController: ModalController,
		private imageService: ImagenesService,
		private actionsheetController: ActionSheetController) { }

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
			}).then(docRef => {			
				this.cafeteriaService.agregarUidPlatillo(docRef.id);
				this.subirFoto(docRef.id);
			});
		} else {
			this.cafeteriaService.agregarGuiso({
				cafeteria: Cache.usuario.uid,
				disponible: this.disponible,
				descripcion: this.descripcion,
				nombre: this.nombre
			}).then(docRef => {
				console.log('Guiso agregado, definiendo id: ', docRef.id);
				this.cafeteriaService.agregarUidGuiso(docRef.id);
				console.log('subiendo Imagen de Guiso!');
				this.subirFoto(docRef.id);
			});
		}
	}

	cancelar() {
		this.dismissModal(false);
	}

	limpiar() {
		this.nombre = '';
		this.precio = 0.0;
		this.disponible = false;
		this.tipo = '';
		this.descripcion = '';
		// this.foto = null;
	}

	dismissModal(productoAgregado: boolean) {
		this.modalController.dismiss(productoAgregado);
	}

	changeImage() {
		console.log('image changing!');
	}

	onCambiarImagenClick() {
		console.log('onCambiarImagenClick()');
		document.getElementById('inputCambiarImagen').click();
	}

	async onInputCambiarImagen(event) {
		this.foto = event.target.files[0];
		console.log('onInputCambiarImagen()');
		console.log('event: ', event);

		var reader = new FileReader();
		// (<HTMLImageElement>document.querySelector(".company_logo"))
		// var imgtag = document.getElementById('image');
		var imgtag = <HTMLImageElement>document.getElementById('image');
		imgtag.title = this.foto.name;

		reader.onload = (e) => {
			console.log('e resul:tion ', e);
			imgtag.src = e.target.result as string;
			// imgtag.setAttribute('src',)
		};

		reader.readAsDataURL(this.foto);
	}

	subirFoto(uid: string) {
		let coleccion = this.tipo == 'platillo' ? 'Platillos' : 'Guisos';

		console.log('coleccion: ', coleccion);
		console.log('foto: ', this.foto);
		console.log('uid producto: ', uid);
		this.imageService.subirImagen(this.foto, `${coleccion}/${Cache.getUsuario().uid}/${uid}`,
			porcentaje => {
				console.log('Porcentaje: ' + porcentaje);
			},
			url => {
				console.log('Url: ' + url);
				console.log('Actualizando foto del usuario en la base de datos...');

				if(coleccion == 'Guisos') {
					this.imageService.actualizarImagenGuiso(uid, url).then(value => {
						console.log('res guiso: ', value);
						this.limpiar();
						this.dismissModal(true);
					})
				} else {
					this.imageService.actualizarImagenPlatillo(uid, url).then(value => {
						console.log('res: ', value);
						this.limpiar();
						this.dismissModal(true);
					});
				}
			},
			err => {
				console.log('error subiendo la imagen: ', err);
			});
	}

}
