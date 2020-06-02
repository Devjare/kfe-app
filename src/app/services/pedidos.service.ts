import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Pedido } from 'src/app/models/pedido';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class PedidosService {

	constructor(
		private afs: AngularFirestore) { }

	// getPedidosFromCafeteria(uidCafeteria) {
	// 	return this.afs.collection<Pedido>('Pedidos').valueChanges().pipe(
	// 		map(pedidos => pedidos.filter(pedido => pedido.uidCafeteria == uidCafeteria))
	// 		);
	// }
}
