import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Idioma } from '../../service/service.idioma';
import { DetallesPage } from '../detalles/detalles';
@IonicPage()
@Component({
  selector: 'page-seguridad',
  templateUrl: 'seguridad.html',
})
export class SeguridadPage {
    English: boolean;
    title: String;
  constructor(public navCtrl: NavController, public navParams: NavParams, public idioma: Idioma) {
    this.English = false;
    this.title = "Seguridad";
  }

ionViewWillEnter(){
    this.English = this.idioma.English;
    if(this.idioma.English){
    this.title = "Security measures";
    }else{
    this.title = "Medidas de seguridad";
    }
}
    leerMas(id){
        if(id == 1){
            this.navCtrl.push(DetallesPage, {id: id});
        }else if(id == 2){
            this.navCtrl.push(DetallesPage, {id: id});
        }else if(id == 3){
            this.navCtrl.push(DetallesPage, {id: id});
        }else if(id == 4){
            this.navCtrl.push(DetallesPage, {id: id});
        }else if(id == 5){
        this.navCtrl.push(DetallesPage, {id: id});
        }
    }
}
