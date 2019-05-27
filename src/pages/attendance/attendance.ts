import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



//@IonicPage()
@Component({
  selector: 'page-attendance',
  templateUrl: 'attendance.html',
})
export class AttendancePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AttendancePage');
  }

}
