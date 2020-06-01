import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductosCafeteriaPageRoutingModule } from './productos-cafeteria-routing.module';

import { ProductosCafeteriaPage } from './productos-cafeteria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductosCafeteriaPageRoutingModule
  ],
  declarations: [ProductosCafeteriaPage]
})
export class ProductosCafeteriaPageModule {}
