import { Component, OnInit } from '@angular/core';
import { Cache } from 'src/app/Cache/cache';
import { Pedido } from 'src/app/models/pedido';
import { CafeteriaService } from 'src/app/services/cafeteria.service';
import { map, filter } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';

@Component({
	selector: 'app-pedidos-cafeteria',
	templateUrl: './pedidos-cafeteria.page.html',
	styleUrls: ['./pedidos-cafeteria.page.scss'],
})
export class PedidosCafeteriaPage implements OnInit {

	pedidos: Pedido[] = [];

	private PENDIENTE = 'Pendiente';
	private PREPARACION = 'Preparacion';
	private FINALIZADO = 'Finalizado';

	pedidosFinalizados: boolean = true;

	constructor(
		private cafeteriaService: CafeteriaService,
		private toast: ToastController) { 
	}

	ngOnInit() {
		console.log('From pedidos, user: ', Cache.usuario);
		console.log(this.pedidos);
		this.obtenerPedidos(Cache.usuario.uid);
	}

	obtenerPedidos(uidCafeteria: string) {
		console.log('obtenerPedidos(', uidCafeteria, ')');
		this.cafeteriaService.getPedidosDeCafeteria(uidCafeteria, this.pedidosFinalizados).subscribe(pedidos => {
			console.log('pedidos obtenidos: ', pedidos);
			this.pedidos = pedidos;
			console.log('this.pedidos: ', this.pedidos);
		});
	}

	drag(event) {
		console.log('Dragged!');
		console.log(event);
	}

	prepare(pedido) {
		console.log('preparando: ', pedido.nombre);
	}

	ready(pedido) {
		console.log('pedido: ', pedido.nombre, ' listo!');
	}

	pedidoClicked(pedido) {
		if(pedido.estado == this.PENDIENTE) {
			pedido.estado = this.PREPARACION;
			this.cafeteriaService.actualizarEstadoPedido(pedido.uid, this.PREPARACION);
		} else if(pedido.estado == this.PREPARACION) {
			pedido.estado = this.FINALIZADO;
			this.cafeteriaService.actualizarEstadoPedido(pedido.uid, this.FINALIZADO);
		}
	}

	getEstadoPedido(uidPedido: string) {
		this.cafeteriaService.getPedido(uidPedido).snapshotChanges().pipe(
			map(pedido => {
				let msg = 'pedido: ' + pedido;
				this.presentToast(msg);
			}));
	}

	async presentToast(msg: string) {
		const toast = await this.toast.create({
			message: msg,
			duration: 2000
		});
		toast.present();
	}

	toggleFinalizados() {
		console.log('cambio: ', this.pedidosFinalizados);
		if(this.pedidosFinalizados != true) {
			this.pedidos = this.pedidos.filter(pedido => pedido.estado != this.FINALIZADO);
		}
	}
}