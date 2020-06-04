import { Component, OnInit } from '@angular/core';
import { FirstoreServiceService } from '../firstore-service.service'
import { Platillo } from '../models/platillo';
import { Cache } from '../Cache/cache'
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  public Platillos: Platillo[];
  public uidCafeteria: string;

  constructor(
    public servicio: FirstoreServiceService,
    public router: Router,
  ) {}

  ngOnInit(){
    this.uidCafeteria = "iSqw1M3cIhdmWJwOSOYk9wtSt7o1";

    this.servicio.getPlatillos(this.uidCafeteria).subscribe(platillos => {
      this.Platillos = platillos;

      console.log(this.Platillos);
    });
  }

  abrirPedido(uid: string){
    console.log('abrirPedido()');
    console.log(uid);

    this.router.navigate(['/pedido-alumno'],{
      queryParams:{
        uidPlatillo: uid,
        uidCafeteria: this.uidCafeteria
      }
    });
  }
}
