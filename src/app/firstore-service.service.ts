import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Platillo } from '../app/models/platillo'
import { Pedido } from '../app/models/pedido'
import { Guiso } from '../app/models/guiso'
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

  getGuisos(uidCafeteria: string){
    return this.afs.collection<Guiso>('Guisos').valueChanges().pipe(
      map(guisos => {

        //Filtrar por cafeteria
        guisos = guisos.filter(g => g.cafeteria == uidCafeteria);

        //Filtrar por disponibles
        let guisosDisponibles = guisos.filter(g => g.disponible == true);

        let guisosPorNombre = new Array<string>();

        guisosDisponibles.forEach(guiso =>{

          guisosPorNombre.push(guiso.nombre);
        })

        return guisosPorNombre;
      })
    );
  }

  hacerPedido(pedido){
    console.log('Agregar un pedido: ', pedido);
    this.afs.collection('Pedidos').add(pedido).then(docRef => {
      this.afs.collection('Pedidos').doc(docRef.id).update({
        uid: docRef.id
      })
    });
  }

}
