import { Component, OnInit } from '@angular/core';
import { Cache } from 'src/app/Cache/cache';
import { Pedido } from 'src/app/models/pedido';
import { CafeteriaService } from 'src/app/services/cafeteria.service';

@Component({
	selector: 'app-pedidos-cafeteria',
	templateUrl: './pedidos-cafeteria.page.html',
	styleUrls: ['./pedidos-cafeteria.page.scss'],
})
export class PedidosCafeteriaPage implements OnInit {

	pedidos: Pedido[] = [];

	private PENDIENTE = 'pendiente';
	private PREPARACION = 'preparacion';
	private FINALIZADO = 'finalizado';

	constructor(
		private cafeteriaService: CafeteriaService) { 
	}

	ngOnInit() {
		console.log('From pedidos, user: ', Cache.usuario);
		console.log(this.pedidos);
		this.obtenerPedidos(Cache.usuario.uid);
	}

	obtenerPedidos(uidCafeteria: string) {
		console.log('obtenerPedidos(', uidCafeteria, ')');
		this.cafeteriaService.getPedidosDeCafeteria(uidCafeteria).subscribe(pedidos => {
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
}