import { Injectable } from '@angular/core';
import { AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { finalize, tap } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class ImagenesService {

	constructor(
		private afs: AngularFirestore,
		private storage: AngularFireStorage,
		) { }

	subirImagen(
		imagen: File,
		ruta: string,
		observadorPorcentaje: (porcentaje: number) => void,
		observadorUrlDescarga: (url: string) => void,
		manejarError: (error: any) => void
		) {
		let task = this.storage.upload(ruta, imagen);

		task.percentageChanges().subscribe(
			porcentaje => observadorPorcentaje(porcentaje),
			error => manejarError(error)
			);

		task.snapshotChanges().pipe(
			finalize(() => {
				this.storage.ref(ruta).getDownloadURL().subscribe(
					url => observadorUrlDescarga(url),
					error => manejarError(error)
					);
			})
			)
		.subscribe(
			() => console.log('La imagen se subio con exito! :D'),
			error => manejarError(error)
			);
	}	

	actualizarImagenPlatillo(uidPlatillo: string, foto: string): Promise<void> {
		return this.afs.collection('Platillos').doc(uidPlatillo).update({ foto: foto });
	}

	actualizarImagenGuiso(uidGuiso: string, foto: string): Promise<void> {
		return this.afs.collection('Guisos').doc(uidGuiso).update({ foto: foto });
	}
}
