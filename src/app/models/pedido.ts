export interface Pedido {
	cafeteria: string; // uidCafeteria
	cantidad: number;
	cliente: string; // uidCliente
	nombreCliente?: string;
	descripcion: string;
	fecha: string;
	foto?: string;
	posicion: number;
	producto: string;
	estado: string;
	total: number; // Costo total Pedido
	uid: string;
}