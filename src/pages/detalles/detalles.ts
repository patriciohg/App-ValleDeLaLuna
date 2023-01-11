import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Idioma } from '../../service/service.idioma';
@IonicPage()
@Component({
  selector: 'page-detalles',
  templateUrl: 'detalles.html',
})
export class DetallesPage {
    id;
    English: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, public idioma: Idioma) {
    this.id = navParams.data.id;
    this.English = false;
  }

  ionViewWillEnter() {
    this.English = this.idioma.English;
    console.log(this.id);
      
  }

}
