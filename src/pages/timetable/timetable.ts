import { Component,ViewChild } from '@angular/core';
import {  NavController, NavParams ,Slides} from 'ionic-angular';


//@IonicPage()
@Component({
  selector: 'page-timetable',
  templateUrl: 'timetable.html',
})
export class TimetablePage {
@ViewChild('pageSlider') pageSlider: Slides;
tabs: any = '0';
toggled: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

 selectTab(index) {     
this.pageSlider.slideTo(index);
}
changeWillSlide($event) {
this.tabs = $event._snapIndex.toString();
}

}
