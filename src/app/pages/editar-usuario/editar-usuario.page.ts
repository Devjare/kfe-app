import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cache } from 'src/app/Cache/cache';
import { LoginService } from 'src/app/services/login.service';
import { Usuario } from 'src/app/models/usuario';
import { ToastController } from '@ionic/angular';

@Component({
	selector: 'app-editar-usuario',
	templateUrl: './editar-usuario.page.html',
	styleUrls: ['./editar-usuario.page.scss'],
})
export class EditarUsuarioPage implements OnInit {

	uidUsuario: string;
	tipo: string = "edicion";
	usuario: Usuario;

	nombre: string;
	apellidos: string;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private loginService: LoginService,
		private toast: ToastController) { }

	ngOnInit() {
		this.uidUsuario = this.route.snapshot.queryParamMap.get('uid');
		this.tipo = this.route.snapshot.queryParamMap.get('tipo');
		this.presentToast('Campos vacios no se actualizaran!');	

		this.nombre = Cache.getUsuario().nombre;
		this.apellidos = Cache.getUsuario().apellidos;
	}

	cancelar() {
		if(this.tipo == 'registro') {
			this.router.navigateByUrl('/login');
		} else {
			if(Cache.usuario.posicion == 'alumno') {
				this.router.navigateByUrl('/tabs/tab1');
			} else {
				this.router.navigateByUrl('/tabs-cafeteria');
			}
		}
	}

	guardar() {
		if(Cache.usuario.posicion == 'alumno') {
			this.guardarNuevo();
			this.router.navigateByUrl('/tabs/tab1');
		} else {
			this.actualizar();
			this.router.navigateByUrl('/tabs-cafeteria');
		}
	}

	guardarNuevo() {
		Cache.usuario.nombre = this.nombre;
		Cache.usuario.apellidos = this.apellidos;
		// Cache.usuario.posicion = 'alumno';

		this.loginService.agregarUsuarioBD(Cache.getUsuario()).then(docRef => {
			console.log('added: ', docRef);

			this.router.navigateByUrl('/tabs/tab1');
		});
	}

	actualizar() {
		console.log('Current user: ', Cache.getUsuario());
		if(this.nombre == '') {
			if(this.apellidos == '') {
				this.presentToast('Sin cambios...');
			} else {
				this.loginService.actualizarDatosUsuario(Cache.getUsuario().nombre, this.apellidos, Cache.getUsuario().uid)
				.then(res => {
					this.presentToast('Nombre cambiado con exito!');
				})
				Cache.usuario.apellidos = this.apellidos;
				this.presentToast('Apellido cambiado!');
			}
		} else {
			Cache.usuario.nombre = this.nombre;
			if(this.apellidos == '') {
				this.loginService.actualizarDatosUsuario(this.nombre, Cache.getUsuario().apellidos, Cache.getUsuario().uid)
				.then(res => {
					this.presentToast('Nombre cambiado con exito!');
				})
			} else {
				Cache.usuario.apellidos = this.apellidos;
				this.loginService.actualizarDatosUsuario(this.nombre, this.apellidos, Cache.getUsuario().uid).then(res =>{
					console.log('Datos actualizados!');
					this.presentToast('Datos cambiados con exito!');
				});
			}
		}
	}

	async presentToast(msg: string) {
		const toast = await this.toast.create({
			message: msg,
			duration: 3000
		});
		toast.present();
	}
}
