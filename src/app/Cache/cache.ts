import { Usuario } from 'src/app/models/usuario';

export class Cache {
	public static usuario: Usuario;

	public static getNombreUsuario(): string {
		return this.usuario.nombre;
	}

	public static setUsuario(usuario: Usuario) {
		this.usuario = usuario;
	}

	public static borrar() {
		this.usuario = undefined;
	}
}