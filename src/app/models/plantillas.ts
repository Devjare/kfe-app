import { Platillo } from './platillo';
import { Pedido } from './pedido';

export enum DocsPlantillas{
    platillo,
    pedido,
}

let platillo: Platillo = {
    producto: "",
	disponible: true,
	costo: 0,
	ingredientes: "",
	total: 0,
	contenido: 0,
	cafeteria: "",
	foto: "",
	uid: "",
};

let pedido: Pedido = {
    cafeteria: "", // uidCafeteria
	cantidad: 0,
	cliente: "", // uidCliente
	descripcion: "",
	fecha: "",
	posicion: 0,
	producto: "",
	estado: "",
	total: 0, // Costo total Pedido
	uid: "",
}

export function getPlantilla(plantilla: DocsPlantillas){
    switch(plantilla){
        case DocsPlantillas.platillo: return platillo;
        case DocsPlantillas.pedido: return pedido;
    }
}