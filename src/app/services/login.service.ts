import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
	providedIn: 'root'
})
export class LoginService {

	constructor(
		private afa: AngularFireAuth,
		private afs: AngularFirestore) { }

	iniciarSesion(correo: string, contrasena: string, resolver: (usuario: Usuario) => void, manejarError: (error: any) => void) {
		console.log('Servicio iniciarSesion');
		this.afa.auth.signInWithEmailAndPassword(correo, contrasena)
		.then(async result => {
			console.log('Usuario: ', result);
			this.getUsuario(result.user.uid).subscribe(usuario => {
				console.log('Obtained User: ', usuario);
				resolver(usuario);
			});
		})
		.catch(error => {
			manejarError(error);
		});
	}

	iniciarSesionConUid(uid: string, contrasena: string) {
		
	}

	getUsuario(uid: string): Observable<Usuario> {
		return this.afs.doc<Usuario>(`Usuarios/${uid}`).valueChanges();
	}

}
