import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetallesPage } from '../detalles/detalles';
import { EmergenciaPage } from '../emergencia/emergencia';
import { HistoriaPage } from '../historia/historia';
import { SeguridadPage } from '../seguridad/seguridad';
import { ContactoPage } from '../contacto/contacto';
import { ImplementosPage } from '../implementos/implementos';
import { Idioma } from '../../service/service.idioma';

@Component({
  selector: 'page-about',
  templateUrl: 'informacion.html'
})
export class InformacionPage {
English: boolean;
items = [];
doRefresh(refresher) {
    setTimeout(() => {
      refresher.complete();
    }, 2000);
  }
  constructor(public navCtrl: NavController, public idioma: Idioma) {
      this.English = false;
  }
   openNavDetailsPage(item){
       if(item.title == 'Security measures' || item.title == 'Medidas de seguridad' ){
            this.navCtrl.push(SeguridadPage);   
       }else if(item.title == 'Security plan' || item.title == 'Plan de emergencia' ){
            this.navCtrl.push(EmergenciaPage);
       }else if(item.title == 'History of the valley' || item.title == 'Historia del valle'){
           this.navCtrl.push(HistoriaPage)
       }else if (item.title == 'Basic implements' || item.title == 'Implementos basicos'){
            this.navCtrl.push(ImplementosPage);
       }else{
            this.navCtrl.push(ContactoPage);
       }
  }
ionViewWillEnter(){
    this.English = this.idioma.English;
     if(this.idioma.English){

        this.items =
                [
                      {
                        'title': 'History of the valley',
                        'icon': 'bookmarks',
                        'description': '',
                        'color': '#A04000'  
                      },
                      {
                        'title': 'Security measures',
                        'icon': 'megaphone',
                        'description': 'Aqui deberian ir las medidas de seguridad ',
                          'color': '#DF010A'  
                      },
                      {
                        'title': 'Security plan',
                        'icon': 'clipboard',
                        'description': 'aqui deberia ir un plan de seguridad',
                        'color': '#000000'  
                      },
                      {
                        'title': 'Contact',
                        'icon': 'contact',
                        'description': 'Heres  going to be the contact ',
                        'color': '#0043C9'  
                      },
                      {
                        'title': 'Basic implements',
                        'icon': 'bonfire',
                        'description': 'Heres  going to be the implements ',
                        'color': '#000000'  
                      }
                ]
    }else{
            this.items =
                [
                    
                 {
                        'title': 'Historia del valle',
                        'icon': 'bookmarks',
                        'description': 'Aqui iran los contactos ',
                        'color': '#A04000'  
                 },
                  {
                    'title': 'Medidas de seguridad',
                    'icon': 'megaphone',
                    'description': 'Aqui deberian ir las medidas de seguridad ',
                    'color': '#DF010A'
                  },
                  {
                    'title': 'Plan de emergencia',
                    'icon': 'clipboard',
                    'description': 'aqui deberia ir un plan de seguridad',
                    'color': '#000000'            
                  },
                   {
                        'title': 'Contacto',
                        'icon': 'contact',
                        'description': 'Aqui iran los contactos ',
                        'color': '#0043C9'  
                    },
                    {
                        'title': 'Implementos basicos',
                        'icon': 'bonfire',
                        'description': 'Heres  going to be the implements ',
                        'color': '#000000'  
                      }
              ]    
    }
}
}
