import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { ContapagarPage } from '../contapagar/contapagar';
import { ContareceberPage } from '../contareceber/contareceber';
import { ResumoPage } from '../resumo/resumo';

/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeRoot = HomePage
  contaPagarRoot = ContapagarPage
  contaReceberRoot = ContareceberPage
  resumoRoot = ResumoPage


  constructor(public navCtrl: NavController) {}

}
