import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Cache } from 'src/app/Cache/cache';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

	correo: string;
	contrasena: string;

	constructor(
		private loginService: LoginService,
		private router: Router,
		private menuController: MenuController) { 
		this.menuController.enable(false, 'menu-principal')
	}

	ngOnInit() {
		this.menuController.enable(false, 'menu-principal')
	}

	iniciarSesion() {
		this.intentarLogin();
	}

	async intentarLogin() {
		console.log('Iniciando sesion...');

		this.iniciarSesionConCorreo();
		// if(this.correo.includes('@')) {
		// } else {
		// 	this.iniciarSesionConUid();
		// }
	}

	iniciarSesionConUid() {

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
}
