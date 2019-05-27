import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Storage} from '@ionic/storage';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { TermsandconditionsPage } from '../pages/termsandconditions/termsandconditions';
import { AddchildPage } from '../pages/addchild/addchild';
import { DisclaimerPage } from '../pages/disclaimer/disclaimer';
import { CallNumber } from '@ionic-native/call-number';
    
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
     rootPage: any;
pages: Array<{title: string, component: any,icon: any}>;
  constructor(private callNumber: CallNumber,private storage:Storage,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
this.showPage();    
this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage,icon:'http://menuapphybrid.newapptec.com/Content/Images/Icon/homeMenuIcon/sliderHome.png'  },
      { title: 'Profile', component: ProfilePage, icon:'http://menuapphybrid.newapptec.com/Content/Images/Icon/homeMenuIcon/sliderHome.png' },
{ title: 'Call School', component: ListPage, icon:'http://menuapphybrid.newapptec.com/Content/Images/Icon/homeMenuIcon/sliderHome.png' },
{ title: 'Update', component: ListPage, icon:'http://menuapphybrid.newapptec.com/Content/Images/Icon/homeMenuIcon/sliderHome.png' },
{ title: 'Disclaimer', component: DisclaimerPage, icon:'http://menuapphybrid.newapptec.com/Content/Images/Icon/homeMenuIcon/sliderHome.png' },
{ title: 'Terms & Conditions', component: TermsandconditionsPage, icon:'http://menuapphybrid.newapptec.com/Content/Images/Icon/homeMenuIcon/sliderHome.png' },
{ title: 'Add Child', component: AddchildPage, icon:'http://menuapphybrid.newapptec.com/Content/Images/Icon/homeMenuIcon/sliderHome.png' },
{ title: 'Logout', component: LoginPage, icon:'http://menuapphybrid.newapptec.com/Content/Images/Icon/homeMenuIcon/sliderHome.png' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
     this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

showPage(){
this.storage.get('userId').then((val) => {
this.storage.get('enroll').then((val2) => {
if(val!=null && val2!=null)     
{
this.rootPage=HomePage;
}
else{
this.rootPage=LoginPage;
}
});
});
}

  openPage(page) {
if(page.component==HomePage)
{
this.nav.setRoot(page.component);
}else if(page.component==LoginPage)
{
this.storage.remove('userId');
this.storage.remove('enroll');
this.storage.remove('password');    
this.rootPage=LoginPage;
} 
else if(page.component==ListPage){
this.callNumber.callNumber("0123456789", true)
.then(() => console.log('Launched dialer!'))
.catch(() => console.log('Error launching dialer'));
}  
else
{
this.nav.push(page.component);
}    
}
}
