import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ContaPagar } from '../../model/contapagar';


/**
 * Generated class for the ContapagarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contapagar',
  templateUrl: 'contapagar.html',
})
export class ContapagarPage {

  contaspagar: ContaPagar[] = [
    { id: 1,
      description: 'Despesa com comida',
      value: 10.2,
      date: new Date(2018,1,18)
    },
    { id: 2,
      description: 'Despesa com produtos de limpeza',
      value: 53.5,
      date: new Date(2018,1,15)
    }
  ]

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContapagarPage');
  }

}
