import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsCafeteriaPageRoutingModule } from './tabs-cafeteria-routing.module';

import { TabsCafeteriaPage } from './tabs-cafeteria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsCafeteriaPageRoutingModule
  ],
  declarations: [TabsCafeteriaPage]
})
export class TabsCafeteriaPageModule {}
