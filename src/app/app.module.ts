import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { CallNumber } from '@ionic-native/call-number';



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { HomeworkPage } from '../pages/homework/homework';
import { DailyactivityPage } from '../pages/dailyactivity/dailyactivity';
import { TimetablePage } from '../pages/timetable/timetable';
import { NoticePage } from '../pages/notice/notice';
import { EventsPage } from '../pages/events/events';
import { PtmPage } from '../pages/ptm/ptm';
import { PermissionsPage } from '../pages/permissions/permissions';
import { SentmesssagePage } from '../pages/sentmesssage/sentmesssage';
import { CalendarPage } from '../pages/calendar/calendar';
import { RemindersPage } from '../pages/reminders/reminders';
import { ExamsPage } from '../pages/exams/exams';
import { ClassnotePage } from '../pages/classnote/classnote';
import { GalleryPage } from '../pages/gallery/gallery';
import { AttendancePage } from '../pages/attendance/attendance';
import { VendorsPage } from '../pages/vendors/vendors';
import { ProfilePage } from '../pages/profile/profile';
import { TermsandconditionsPage } from '../pages/termsandconditions/termsandconditions';
import { AddchildPage } from '../pages/addchild/addchild';
import { DisclaimerPage } from '../pages/disclaimer/disclaimer';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,LoginPage,
    HomeworkPage,DailyactivityPage,TimetablePage,NoticePage,EventsPage,
    PtmPage,PermissionsPage,SentmesssagePage,CalendarPage,RemindersPage,
    ExamsPage,ClassnotePage,GalleryPage,AttendancePage,VendorsPage,
    ProfilePage,TermsandconditionsPage,AddchildPage,DisclaimerPage
  ],  
  imports: [
    BrowserModule,
HttpClientModule,
IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,    
    ListPage,LoginPage,
 HomeworkPage,DailyactivityPage,TimetablePage,NoticePage,EventsPage,
    PtmPage,PermissionsPage,SentmesssagePage,CalendarPage,RemindersPage,
    ExamsPage,ClassnotePage,GalleryPage,AttendancePage,VendorsPage,
    ProfilePage,TermsandconditionsPage,AddchildPage,DisclaimerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CallNumber,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
