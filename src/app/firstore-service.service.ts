import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Platillo } from '../app/models/platillo'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirstoreServiceService {

  constructor(
    public afs: AngularFirestore,
  ) { }

  getPlatillos(uidCafeteria: string){
    return this.afs.collection<Platillo>('Platillos').valueChanges().pipe(
      map(platillos => {
        
        //Filtrar por cafeteria
        platillos = platillos.filter(p => p.cafeteria == uidCafeteria);

        //Filtrar por disponibles
        let platillosDisponibles = platillos.filter(p => p.disponible == true);

        return platillosDisponibles;
      })
    );
  }

  getPlatillo(uidPlatillo: string){
    return this.afs.collection<Platillo>('Platillos').valueChanges().pipe(
      map(platillos => platillos.find(p => p.uid == uidPlatillo))
    );
  }

  /*prepararPedido(){
    const db = this.afs.firestore;
    cost
  }*/

}
