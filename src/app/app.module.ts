import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { InformacionPage } from '../pages/informacion/informacion';
import { Mapa } from '../pages/mapa/mapa';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DetallesPage } from '../pages/detalles/detalles';
import { EmergenciaPage } from '../pages/emergencia/emergencia';
import { SeguridadPage } from '../pages/seguridad/seguridad';
import { HistoriaPage } from '../pages/historia/historia';
import { ContactoPage } from '../pages/contacto/contacto';
import { ImplementosPage } from '../pages/implementos/implementos';

import { Idioma } from '../service/service.idioma';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    InformacionPage,
    Mapa,
    HomePage,
    TabsPage,
    DetallesPage,
    EmergenciaPage,
    SeguridadPage,
    HistoriaPage,
    ContactoPage,
    ImplementosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InformacionPage,
    Mapa,
    HomePage,
    TabsPage,
    DetallesPage,
    EmergenciaPage,
    SeguridadPage,
    HistoriaPage,
    ContactoPage,
    ImplementosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Idioma
  ]
})
export class AppModule {}
