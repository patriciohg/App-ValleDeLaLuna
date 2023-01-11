import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Idioma } from '../../service/service.idioma';


@IonicPage()
@Component({
  selector: 'page-emergencia',
  templateUrl: 'emergencia.html',
})
export class EmergenciaPage {
    English: boolean;
    title: String;
    guia: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, public idioma: Idioma) {
    this.English = false;
      this.title="Emergencia";
      this.guia= false;
  }
    cambio(){
        this.guia= !this.guia;
        console.log(this.guia);
    }
    ionViewWillEnter(){
        this.English = this.idioma.English;
        if(this.idioma.English){
            this.title="Emergency plan";
           }else{
               this.title="Plan de emergencia";
           }
    }
}
