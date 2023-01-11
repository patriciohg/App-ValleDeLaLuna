import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Idioma } from '../../service/service.idioma';
import { SeguridadPage } from '../seguridad/seguridad';
/**
 * Generated class for the ImplementosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-implementos',
  templateUrl: 'implementos.html',
})
export class ImplementosPage {
    English: boolean;
    title: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public idioma: Idioma) {
    this.English = false;
    this.title = "Implementos básicos"
  }
    Opensecurity(){
                this.navCtrl.push(SeguridadPage); 
    }

  ionViewWillEnter() {
    this.English = this.idioma.English;
    if(this.English){
        this.title= "Basic implements";
    }else{
        this.title = "Implementos básicos"
        
    }
  }

}
