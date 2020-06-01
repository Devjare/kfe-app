import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedidoAlumnoPage } from './pedido-alumno.page';

const routes: Routes = [
  {
    path: '',
    component: PedidoAlumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidoAlumnoPageRoutingModule {}
