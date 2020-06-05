import { Component, OnInit } from '@angular/core';
import { Pedido } from '../models/pedido';
import { Cache } from '../Cache/cache'
import { FirstoreServiceService } from '../firstore-service.service'

@Component({
  selector: 'app-pedidos-listos',
  templateUrl: './pedidos-listos.page.html',
  styleUrls: ['./pedidos-listos.page.scss'],
})
export class PedidosListosPage implements OnInit {

  public Pedidos: Pedido[];
  public uidCliente = Cache.usuario.uid;
  public nombreCliente = Cache.usuario.nombre;
  public kfe = "";

  constructor(
    public servicio: FirstoreServiceService,
  ) { }

  ngOnInit() {
    this.servicio.getPedidosListos(this.uidCliente).subscribe(pedidos =>{
      this.Pedidos = pedidos;

      console.log(this.Pedidos);
    })
  }
}
