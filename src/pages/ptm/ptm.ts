import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



//@IonicPage()
@Component({
  selector: 'page-ptm',
  templateUrl: 'ptm.html',
})
export class PtmPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PtmPage');
  }

}
