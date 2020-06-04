import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Platillo } from 'src/app/models/platillo';
import { Guiso } from 'src/app/models/guiso';
import { Pedido } from 'src/app/models/pedido';
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

	agregarUidPlatillo(uidPlatillo) {
		this.afs.collection('Platillos').doc(uidPlatillo).update({
			uid: uidPlatillo
		});
	}

	agregarUidGuiso(uidGuiso) {
		this.afs.collection('Guisos').doc(uidGuiso).update({
			uid: uidGuiso
		});
	}	

	agregarGuiso(guiso) {
		return this.afs.collection('Guisos').add(guiso);
	}

	actualizarDisponibilidadPlatillo(uidPlatillo, disponibilidad) {
		this.afs.collection('Platillos').doc(uidPlatillo).update({
			disponible: disponibilidad
		});
	}

	actualizarDisponibilidadGuiso(uidGuiso: string, disponibilidad: boolean) {
		this.afs.collection('Guisos').doc(uidGuiso).update({
			disponible: disponibilidad
		});
	}

	getPedidosDeCafeteria(uidCafeteria: string) {
		return this.afs.collection<Pedido>('Pedidos').valueChanges().pipe(
			map(pedidos => pedidos.filter(pedido => pedido.cafeteria == uidCafeteria))
			);
	}

	actualizarEstadoPedido(uidPedido: string, nuevoEstado: string) {
		this.afs.collection('Pedidos').doc(uidPedido).update({
			estado: nuevoEstado
		});	
	}

	getPedido(uidPedido: string) {
		return this.afs.collection('Pedidos').doc(uidPedido);
	}
}
