import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Idioma } from '../../service/service.idioma';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    EnglishButton: boolean;
    
constructor(public navCtrl: NavController, public idioma: Idioma ) {
    this.EnglishButton = false;
        }
        
ionViewWillLeave(){ 
    this.idioma.English= this.EnglishButton;
    }
}