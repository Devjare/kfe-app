import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedidoAlumnoPageRoutingModule } from './pedido-alumno-routing.module';

import { PedidoAlumnoPage } from './pedido-alumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedidoAlumnoPageRoutingModule
  ],
  declarations: [PedidoAlumnoPage]
})
export class PedidoAlumnoPageModule {}
