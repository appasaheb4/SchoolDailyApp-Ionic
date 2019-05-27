import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Slides } from 'ionic-angular';



//@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {
@ViewChild('pageSlider') pageSlider: Slides;   
tabs: any = '0';    
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


selectTab(index) {     
this.pageSlider.slideTo(index);
}


changeWillSlide($event) {
this.tabs = $event._snapIndex.toString();
}

}
