import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Cache } from 'src/app/Cache/cache';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit{

  usuario: Usuario;

  constructor(
  	private menuController: MenuController,
		private router: Router) {
  	this.menuController.enable(true, 'menu-principal');
  }
  
  ngOnInit() {
		this.menuController.enable(true, 'menu-principal');
		this.usuario = Cache.getUsuario();
	}

	cerrarSesion() {
		console.log('Cerrando Sesion');
		Cache.borrar();
		this.menuController.enable(false, 'menu-principal');
		this.router.navigateByUrl('/login');
	}

	configurar() {
		this.router.navigateByUrl('/editar-usuario');
	}

}
