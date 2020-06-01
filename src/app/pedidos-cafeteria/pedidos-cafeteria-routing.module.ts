import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedidosCafeteriaPage } from './pedidos-cafeteria.page';

const routes: Routes = [
  {
    path: '',
    component: PedidosCafeteriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidosCafeteriaPageRoutingModule {}
