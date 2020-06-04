import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Cache } from 'src/app/Cache/cache';
import { Router } from '@angular/router';
import { MenuController, ToastController } from '@ionic/angular';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

	logtext = 'Iniciar Sesion';
	logtype = 'login';
	tipText = 'No estas registrado?, Hazlo ahora!'

	correo: string;
	contrasena: string;

	constructor(
		private loginService: LoginService,
		private router: Router,
		private menuController: MenuController,
		private toast: ToastController) { 
		this.menuController.enable(false, 'menu-principal')
	}

	ngOnInit() {
		this.menuController.enable(false, 'menu-principal')
		Cache.iniciarCache();
	}

	log() {
		if(this.logtype == 'login') {
			this.intentarLogin();
		} else {
			this.intentarRegistro();
		}
	}

	async intentarLogin() {
		console.log('Iniciando sesion...');
		this.iniciarSesionConCorreo();
	}

	async intentarRegistro() {
		console.log('Intentado registar usuario!');
		this.registrarUsuario();
	}

	iniciarSesionConCorreo() {
		this.loginService.iniciarSesion(this.correo, this.contrasena,
			usuario => {
				console.log('Exito al iniciar sesion :D');

				Cache.usuario = usuario;

				console.log('Usuario obtenido:');
				console.log(usuario);

				if(usuario != undefined) {
					this.correo = '';
					this.contrasena = '';
					switch (usuario.posicion) {

						case 'cafeteria': {
							console.log('Cuenta de cafeteria detectada. Iniciando sesion...');
							this.router.navigateByUrl('/tabs-cafeteria');
							break;
						}

						case 'alumno': {
							console.log('Cuenta de alumno detectada. Iniciando sesion...');
							this.router.navigateByUrl('/tabs/tab1');
							break;
						}

						default: {
							console.log('Ninguna cuenta detectada :(');
							// this.guiUtils.mostrarToast('Este correo no parece estar vinculado con ninguna cuenta', 3000, 'danger');
							break;
						}
					}
				} else {
					console.log('Usuario no encontrado');
				}
			},
			error => {
				console.error('Error al iniciar sesion :(');
				console.error(error);
				// this.guiUtils.cerrarCargando(this.cargandoDialog);
				// this.guiUtils.mostrarToast('Verifica tu correo y contraseña', 3000, 'danger');
			});
	}

	cambiarLogType() {
		if(this.logtype == 'login'){
			this.logtext = 'Registrate';
			this.logtype = 'logout';
			this.tipText = 'Ya estas registrado?, Inicia sesion';
		} else {
			this.logtext = 'Iniciar Sesion';
			this.logtype = 'login';
			this.tipText = 'No estas registrado?, Hazlo ahora!';
		}
	}

	registrarUsuario() {
		this.loginService.registrarUsuario(this.correo, this.contrasena)
		.then(async result => {
			console.log('result: ', result);
			this.presentToast('Usuario registrado exitosamente!');

			let uid = result.user.uid;
			Cache.usuario.uid = uid;
			Cache.usuario.email = this.correo;
			Cache.usuario.posicion = 'alumno';

			this.router.navigateByUrl('/editar-usuario', {
				queryParams: {
					tipo: 'registro'
				}
			});

		}).catch(err => {
			this.presentToast('Failed to create user. Error: ');
			console.log('err: ', err);
		});
	}

	async presentToast(msg: string) {
		const toast = await this.toast.create({
			message: msg,
			duration: 2000
		});
		toast.present();
	}
}
