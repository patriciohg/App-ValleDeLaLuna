import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Idioma } from '../../service/service.idioma';

@IonicPage()
@Component({
  selector: 'page-historia',
  templateUrl: 'historia.html',
})
export class HistoriaPage {
    English: boolean;
    title: String;
  constructor(public navCtrl: NavController, public navParams: NavParams, public idioma: Idioma) {
      this.English = false;
      this.title = "Historia";
  }

    ionViewWillEnter(){
        this.English = this.idioma.English;
        if(this.English){
            this.title = "History of valley";
            
        }else{
            this.title = "Historia del valle";
        }
    }
}
