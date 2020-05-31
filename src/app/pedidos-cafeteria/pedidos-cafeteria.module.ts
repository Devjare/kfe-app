import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedidosCafeteriaPageRoutingModule } from './pedidos-cafeteria-routing.module';

import { PedidosCafeteriaPage } from './pedidos-cafeteria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedidosCafeteriaPageRoutingModule
  ],
  declarations: [PedidosCafeteriaPage]
})
export class PedidosCafeteriaPageModule {}
