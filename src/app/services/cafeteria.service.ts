import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Platillo } from 'src/app/models/platillo';
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

}
