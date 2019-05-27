import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



//@IonicPage()
@Component({
  selector: 'page-classnote',
  templateUrl: 'classnote.html',
})
export class ClassnotePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClassnotePage');
  }

}
