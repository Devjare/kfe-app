export interface Pedido {
	cafeteria: string; // uidCafeteria
	cantidad: number;
	cliente: string; // uidCliente
	descripcion: string;
	fecha: string;
	posicion: number;
	producto: string;
	estado: string;
	total: number; // Costo total Pedido
	uid: string;
}