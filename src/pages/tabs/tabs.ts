import { Component } from '@angular/core';

import {  InformacionPage } from '../informacion/informacion';
import { Mapa } from '../mapa/mapa';
import { HomePage } from '../home/home';
import { Idioma } from '../../service/service.idioma';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  English: boolean;
  tab1Root = HomePage;
  tab2Root = Mapa;
  tab3Root = InformacionPage;

  constructor(public idioma: Idioma) {
    this.English = false;
  }
  ionViewDidLoad(){
      this.English = this.idioma.English;
  }
}
