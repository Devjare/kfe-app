import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Usuario } from 'src/app/models/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
  	private afs: AngularFirestore) { }

  getUsuarioPorUid(uid: string) {
  	return this.afs.collection('Usuarios').doc(uid).valueChanges();
  }
}
