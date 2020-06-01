import { Component, OnInit } from '@angular/core';
import { Cache } from 'src/app/Cache/cache';

@Component({
	selector: 'app-pedidos-cafeteria',
	templateUrl: './pedidos-cafeteria.page.html',
	styleUrls: ['./pedidos-cafeteria.page.scss'],
})
export class PedidosCafeteriaPage implements OnInit {

	pedidos: any[] = [];

	private RECIBIDO = 'card recibido';
	private PREPARANDO = 'card preparando';
	private ENTREGADO = 'card entregado';

	classStatus = this.RECIBIDO;

	constructor() { 
	}

	ngOnInit() {
		console.log('From pedidos, user: ', Cache.usuario);
		console.log(this.pedidos);
		this.pedidos = [
		{
			url: 'url',
			nombre: 'Echiladas Suizas',
			comentario: '2 de tal y 2 de tal',
			precio: 35.50,
			uidCliente: '16010064',
			estado: 'pendiente'
		},
		{
			url: 'url',
			nombre: 'Nombre Platillo 2',
			comentario: '2 de tal y 2 de tal',
			precio: 35.50,
			uidCliente: '16010064',
			estado: 'preparando'
		},
		{
			url: 'url',
			nombre: 'Nombre Platillo 3',
			comentario: '2 de tal y 2 de tal',
			precio: 35.50,
			uidCliente: '16010064',
			estado: 'entregado'
		}
		];
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
		if(pedido.estado == 'pendiente') {
			pedido.estado = 'preparando';
		} else if(pedido.estado == 'preparando') {
			pedido.estado = 'entregado';
		}
	}
}