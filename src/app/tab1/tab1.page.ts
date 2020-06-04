import { Component, OnInit } from '@angular/core';
import { FirstoreServiceService } from '../firstore-service.service'
import { Platillo } from '../models/platillo';
import { Cache } from '../Cache/cache'
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  public Platillos: Platillo[];
  public uidCafeteria: string;

  constructor(
    public servicio: FirstoreServiceService,
    public router: Router,
  ) {}

  ngOnInit(){
    //this.uidCafeteria = Cache.usuario.uid;
    this.uidCafeteria = "6qEx6po4K9MHafASiJHhXf3NoKr1";

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
      }
    });
  }
}
