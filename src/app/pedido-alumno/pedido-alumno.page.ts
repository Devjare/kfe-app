import { Component, OnInit } from '@angular/core';
import { Platillo } from '../models/platillo';
import { FirstoreServiceService } from '../firstore-service.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pedido-alumno',
  templateUrl: './pedido-alumno.page.html',
  styleUrls: ['./pedido-alumno.page.scss'],
})
export class PedidoAlumnoPage implements OnInit {

  public platillo: Platillo;
  public uidPlatillo: string;

  constructor(
    public servicio: FirstoreServiceService,
    public activateRouter: ActivatedRoute,
  ) {}

  ngOnInit() {

    this.uidPlatillo = this.activateRouter.snapshot.queryParamMap.get('uidPlatillo')

    this.servicio.getPlatillo(this.uidPlatillo).subscribe(platillo => {
      this.platillo = platillo

      console.log(this.platillo);
    });
  }

}
