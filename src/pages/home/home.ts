import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data = {}
  constructor(public navCtrl: NavController) {

  }

  salvaregistro(){
    console.log(this.data)
    console.log("auqi")
  }

}
