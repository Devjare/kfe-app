import { Component, OnInit } from '@angular/core';
import { FirstoreServiceService } from '../firstore-service.service'
import { Platillo } from '../models/platillo';
import { Cache } from '../Cache/cache'
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  public Platillos: Platillo[];
  public uidCafeteria: string;

  constructor(
    public servicio: FirstoreServiceService,
    public router: Router,
  ) {}

  ngOnInit(){
    //this.uidCafeteria = Cache.usuario.uid;
    this.uidCafeteria = "8TogrkDt5AUuQIMQKpzw8cWwHpE2";

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
        uidCafeteria: this.uidCafeteria,
        kfe: "K-FE 2"
      }
    });
  }

}
