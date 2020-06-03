import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tabs-cafeteria',
  templateUrl: './tabs-cafeteria.page.html',
  styleUrls: ['./tabs-cafeteria.page.scss'],
})
export class TabsCafeteriaPage implements OnInit {

  constructor(
  	private menuController: MenuController) { }

  ngOnInit() {
  	this.menuController.enable(true, 'menu-principal');
  }
}
