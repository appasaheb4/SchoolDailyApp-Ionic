import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


//@IonicPage()
@Component({
  selector: 'page-dailyactivity',
  templateUrl: 'dailyactivity.html',
})
export class DailyactivityPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DailyactivityPage');
  }

}
