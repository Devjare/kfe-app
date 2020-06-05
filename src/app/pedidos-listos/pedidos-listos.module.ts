import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedidosListosPageRoutingModule } from './pedidos-listos-routing.module';

import { PedidosListosPage } from './pedidos-listos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedidosListosPageRoutingModule
  ],
  declarations: [PedidosListosPage]
})
export class PedidosListosPageModule {}
