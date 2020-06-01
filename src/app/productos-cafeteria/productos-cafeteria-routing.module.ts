import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductosCafeteriaPage } from './productos-cafeteria.page';

const routes: Routes = [
  {
    path: '',
    component: ProductosCafeteriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductosCafeteriaPageRoutingModule {}
