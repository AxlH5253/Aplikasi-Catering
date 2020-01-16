import { Component } from '@angular/core';
import { Router} from '@angular/router';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { OneSignal } from '@ionic-native/onesignal/ngx';
import { AlertController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  constructor(
    private router: Router,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private oneSignal: OneSignal,
    private alertCtrl: AlertController,
    private statusBar: StatusBar
  ) { this.initializeApp(); }


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

    });
  }

}
