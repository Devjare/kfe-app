import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Cache } from 'src/app/Cache/cache';
import { Router } from '@angular/router';

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
		private router: Router) { }

	ngOnInit() {
	}

	iniciarSesion() {
		console.log('Trying to log in!');
	}

	async intentarLogin() {
		console.log('Iniciando sesion...');

		this.loginService.iniciarSesion(this.correo, this.contrasena,
			usuario => {
				console.log('Exito al iniciar sesion :D');

				Cache.usuario = usuario;

				console.log('Usuario obtenido:');
				console.log(usuario);

				switch (usuario.posicion) {

					case 'cafeteria': {
						console.log('Cuenta de cafeteria detectada. Iniciando sesion...');
						this.router.navigateByUrl('/tabs-cafeteria');
						break;
					}

					case 'alumno': {
						console.log('Cuenta de alumno detectada. Iniciando sesion...');
						this.router.navigateByUrl('/inicio-repartidor/tab-pedidos-repartidor');
						break;
					}

					default: {
						console.log('Ninguna cuenta detectada :(');
						// this.guiUtils.mostrarToast('Este correo no parece estar vinculado con ninguna cuenta', 3000, 'danger');
						break;
					}
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
