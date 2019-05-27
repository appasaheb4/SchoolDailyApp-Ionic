import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Slides } from 'ionic-angular';


   
//@IonicPage()
@Component({
  selector: 'page-sentmesssage',
  templateUrl: 'sentmesssage.html',
})
export class SentmesssagePage {
@ViewChild('pageSlider') pageSlider: Slides;   
tabs: any = '0';
private myStuff:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
   
  selectTab(index) {     
this.pageSlider.slideTo(index);
}
changeWillSlide($event) {
this.tabs = $event._snapIndex.toString();
}


}
