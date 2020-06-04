import { Component, OnInit } from '@angular/core';
import { Platillo } from '../models/platillo';
import { FirstoreServiceService } from '../firstore-service.service'
import { Router, ActivatedRoute } from '@angular/router';
import { getPlantilla, DocsPlantillas } from '../models/plantillas'
import { Cache } from 'src/app/Cache/cache';
import { ThrowStmt } from '@angular/compiler';
import { AlertController } from '@ionic/angular';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pedido-alumno',
  templateUrl: './pedido-alumno.page.html',
  styleUrls: ['./pedido-alumno.page.scss'],
})
export class PedidoAlumnoPage implements OnInit {

  public platillo = getPlantilla(DocsPlantillas.platillo) as Platillo;
  public uidPlatillo: string;
  public uidCafeteria: string;
  public guisosDisponibles: string []; 
  public kfe = this.activateRouter.snapshot.queryParamMap.get('kfe');
  
  cafeteria: string = '';
  cantidad: number = 1;
  cliente: string = '';
  descripcion: string = '';
  fecha: string = '';
  producto: string = '';
  estado: string = '';
  total: number = 0.0;
  foto: string = "";

  constructor(
    public servicio: FirstoreServiceService,
    public activateRouter: ActivatedRoute,
    public alertController: AlertController,
    public location: Location,
  ) {}

  ngOnInit() {

    this.guisosDisponibles = [];

    this.uidPlatillo = this.activateRouter.snapshot.queryParamMap.get('uidPlatillo');

    this.uidCafeteria = this.activateRouter.snapshot.queryParamMap.get('uidCafeteria');

    this.servicio.getPlatillo(this.uidPlatillo).subscribe(platillo => {
      this.platillo = platillo

      console.log(this.platillo);

      this.producto = platillo.producto;
      this.total = platillo.costo;
      this.foto = platillo.foto;
    });

    this.servicio.getGuisos(this.uidCafeteria).subscribe(guisos => {
      this.guisosDisponibles = guisos;

      console.log("Guisossss")
      console.log(this.guisosDisponibles);
    })
  }

  agregarPedido(){

    this.total = this.total * this.cantidad;
    this.estado = "Pendiente";
    this.fecha =  new Date().toISOString();
    this.cliente = Cache.usuario.uid;

    console.log('Cafeteria: ', this.uidCafeteria);
    console.log('cantidad:', this.cantidad);
    console.log('Usuario: ', Cache.usuario.uid);
    console.log('descrip: ', this.descripcion);
    console.log('fecha: ', this.fecha);
    console.log('Producto: ', this.producto);
    console.log('estado: ', this.estado);
    console.log('total: ', this.total);

    this.servicio.hacerPedido({
      cafeteria: this.uidCafeteria,
      cantidad: this.cantidad,
      cliente: this.cliente,
      descripcion: this.descripcion,
      fecha: this.fecha,
      producto: this.producto,
      estado: this.estado,
      total: this.total,
      foto: this.foto
    });

    console.log('Enviado exitosamente');

    this.presentAlert();

    this.limpiar();

    this.goBack();
  }

  limpiar(){
    this.cafeteria = '';
    this.cantidad = 1;
    this.cliente = '';
    this.descripcion = '';
    this.fecha = '';
    this.producto = '';
    this.estado = '';
    this.total = 0.0;
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: this.kfe,
      subHeader: this.producto,
      message: 'Tu pedido se ha enviado.',
      buttons: ['OK']
    });

    await alert.present();
  }

  goBack() {
    this.location.back();
  }

}
