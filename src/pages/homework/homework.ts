import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


//@IonicPage()
@Component({
  selector: 'page-homework',
  templateUrl: 'homework.html',
})
export class HomeworkPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeworkPage');
  }

}
