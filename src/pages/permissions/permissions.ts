import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



//@IonicPage()
@Component({
  selector: 'page-permissions',
  templateUrl: 'permissions.html',
})
export class PermissionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PermissionsPage');
  }

}
