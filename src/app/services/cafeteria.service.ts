import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Platillo } from 'src/app/models/platillo';
import { Guiso } from 'src/app/models/guiso';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class CafeteriaService {

	constructor(
		private afs: AngularFirestore) { }

	getPlatillosFromCafeteria(uidCafeteria) {
		return this.afs.collection<Platillo>('Platillos').valueChanges().pipe(
			map(platillos => platillos.filter(platillo => platillo.cafeteria == uidCafeteria))
			);
	}

	getGuisosFromCafeteria(uidCafeteria) {
		return this.afs.collection<Guiso>('Guisos').valueChanges().pipe(
			map(platillos => platillos.filter(platillo => platillo.cafeteria == uidCafeteria))
			);
	}

	agregarPlatillo(platillo) {
		console.log('platillo a agregar: ', platillo);
		return this.afs.collection('Platillos').add(platillo);
	}

	agregarGuiso(guiso) {
		return this.afs.collection('Guisos').add(guiso);
	}

}
