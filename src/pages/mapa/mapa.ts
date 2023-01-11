import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Idioma } from '../../service/service.idioma';

@Component({
  selector: 'page-map',
  templateUrl: 'mapa.html'
})
export class Mapa {
    English: boolean;
  constructor(public navCtrl: NavController, public idioma: Idioma) {
      this.English = false;
  }
ionViewWillEnter(){
    this.English = this.idioma.English;
}
}
