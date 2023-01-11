import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Idioma } from '../../service/service.idioma';
/**
 * Generated class for the ContactoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contacto',
  templateUrl: 'contacto.html',
})
export class ContactoPage {
    English: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, public idioma: Idioma) {
    this.English = false;
    
  }
  ionViewWillEnter() {
    this.English = this.idioma.English;
  }

}
