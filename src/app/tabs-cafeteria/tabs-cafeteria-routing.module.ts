import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsCafeteriaPage } from './tabs-cafeteria.page';

const routes: Routes = [
{
	path: 'tabs-cafeteria',
	component: TabsCafeteriaPage,
	children: [
	{
		path: 'nuevo-producto',
		loadChildren: () => import('../nuevo-producto/nuevo-producto.module').then(m => m.NuevoProductoPageModule)
	},
	{
		path: 'pedidos-cafeteria',
		loadChildren: () => import('../pedidos-cafeteria/pedidos-cafeteria.module').then(m => m.PedidosCafeteriaPageModule)
	},
	{
		path: 'productos-cafeteria',
		loadChildren: () => import('../productos-cafeteria/productos-cafeteria.module').then(m => m.ProductosCafeteriaPageModule)
	},
	{
		path: '',
		redirectTo: 'tabs-cafeteria/pedidos-cafeteria',
		pathMatch: 'full'
	}
	]
},
{
	path: '',
	redirectTo: 'tabs-cafeteria/pedidos-cafeteria',
	pathMatch: 'full'
}

];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class TabsCafeteriaPageRoutingModule {}

