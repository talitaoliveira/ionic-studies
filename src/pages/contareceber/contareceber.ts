import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ContaReceber } from '../../model/contareceber';


/**
 * Generated class for the ContareceberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contareceber',
  templateUrl: 'contareceber.html',
})
export class ContareceberPage {

  contasreceber: ContaReceber[] = [
    { id: 1,
      description: 'Salário',
      value: 500,
      date: new Date(2018,1,18)
    },
    { id: 2,
      description: 'Dinheiro emprestado de Fulano',
      value: 20.5,
      date: new Date(2018,1,15)
    }
  ]

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContareceberPage');
  }

}
