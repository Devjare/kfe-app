import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedidosListosPage } from './pedidos-listos.page';

const routes: Routes = [
  {
    path: '',
    component: PedidosListosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidosListosPageRoutingModule {}
