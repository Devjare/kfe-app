import { Usuario } from 'src/app/models/usuario';

export class Cache {
	public static usuario: Usuario;

	public static iniciarCache() {
		this.usuario = {
			uid: '',
			nombre: '',
			apellidos: '',
			posicion: '',
			email: ''
		};
	}

	public static logStatus: boolean;

	public static getUsuario(): Usuario {
		return this.usuario;
	}

	public static getNombreUsuario(): string {
		return this.usuario.nombre;
	}

	public static setUsuario(usuario: Usuario) {
		this.usuario = usuario;
	}

	public static borrar() {
		this.usuario = undefined;
		this.logout();
	}

	public static login() {
		this.logStatus = true;
	}

	public static logout() {
		this.logStatus = false;
	}

	public static isLoggedIn() {
		return this.logStatus == true;
	}
}