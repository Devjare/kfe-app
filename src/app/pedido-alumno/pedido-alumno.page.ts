import { Component, OnInit } from '@angular/core';
import { Platillo } from '../models/platillo';
import { FirstoreServiceService } from '../firstore-service.service'
import { Router, ActivatedRoute } from '@angular/router';
import { getPlantilla, DocsPlantillas } from '../models/plantillas'
import { Cache } from 'src/app/Cache/cache';
import { ThrowStmt } from '@angular/compiler';

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
  
  cafeteria: string = '';
  cantidad: number = 0;
  cliente: string = 'l3oxRWRR1McilPUeedm8';
  descripcion: string = '';
  fecha: string = '';
  producto: string = '';
  estado: string = '';
  total: number = 0.0;

  constructor(
    public servicio: FirstoreServiceService,
    public activateRouter: ActivatedRoute,
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
    });

    this.servicio.getGuisos(this.uidCafeteria).subscribe(guisos => {
      this.guisosDisponibles = guisos;

      console.log("Guisossss")
      console.log(this.guisosDisponibles);
    })
  }

  agregarPedido(){

    this.total = this.total * this.cantidad;
    this.estado = "Preparacion";
    this.fecha =  new Date().toISOString();

    console.log('Cafeteria: ', this.uidCafeteria);
    console.log('cantidad:', this.cantidad);
    //console.log('Usuario: ', Cache.usuario.uid);
    console.log('Usuario: ',this.cliente);
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
      total: this.total
    });

    console.log('Enviado exitosamente');
  }

}
