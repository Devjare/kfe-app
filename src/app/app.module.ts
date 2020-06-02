import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPipe } from './login.pipe';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { NuevoProductoPageModule } from 'src/app/nuevo-producto/nuevo-producto.module';

import { environment } from 'src/environments/environment';

@NgModule({
	declarations: [AppComponent, LoginPipe],
	entryComponents: [],
	imports: [
	BrowserModule, 
	IonicModule.forRoot(), 
	AppRoutingModule,
	AngularFireModule.initializeApp(environment.firebaseConfig),
	AngularFireAuthModule,
	AngularFirestoreModule,
	AngularFireStorageModule,
	NuevoProductoPageModule],
	providers: [
	StatusBar,
	SplashScreen,
	{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
