import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {  MenuController } from 'ionic-angular/index';

import { HomeworkPage } from '../homework/homework';
import { DailyactivityPage } from '../dailyactivity/dailyactivity';
import { TimetablePage } from '../timetable/timetable';
import { NoticePage } from '../notice/notice';
import { EventsPage } from '../events/events';
import { PtmPage } from '../ptm/ptm';
import { PermissionsPage } from '../permissions/permissions';
import { SentmesssagePage } from '../sentmesssage/sentmesssage';
import { CalendarPage } from '../calendar/calendar';
import { RemindersPage } from '../reminders/reminders';
import { ExamsPage } from '../exams/exams';
import { ClassnotePage } from '../classnote/classnote';
import { GalleryPage } from '../gallery/gallery';
import { AttendancePage } from '../attendance/attendance';
import { VendorsPage } from '../vendors/vendors';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    homePage=HomeworkPage;
    dailyActiveity=DailyactivityPage;
    timeTable=TimetablePage;
    notice=NoticePage;
    event=EventsPage;
    ptm=PtmPage;
    permission=PermissionsPage;
    sentMessage=SentmesssagePage;
    calendar=CalendarPage;
    reminders=RemindersPage;
    exams=ExamsPage;
    classnote=ClassnotePage;
    gallery=GalleryPage;
    attendance=AttendancePage;
    vendors=VendorsPage;
    private rootPage:any;
  constructor(public navCtrl: NavController,private menu: MenuController) {

  }
 ionViewDidEnter() {
this.menu.enable(true, 'menu1');
}

 openPage(page) {
    this.navCtrl.push(page);
}

}
