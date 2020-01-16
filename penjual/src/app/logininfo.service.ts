import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { AlertController, Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LogininfoService implements CanActivate {
	
 constructor(
 	private router: Router,
 	private platform: Platform,
 	private oneSignal: OneSignal,
 	private alertCtrl: AlertController
 ) {}

 authInfo = false;
 username = "";
 userId = "";
 host = 'cateringkevyn.000webhostapp.com/';

 login(user,id){
 	this.authInfo = true;
 	this.username = user;
 	this.userId = id;

 	if (this.platform.is('cordova')){
        this.setupPush();
    }
 }

  logout(){
 	this.authInfo = false;
 	this.username = "";
 	this.userId = "";
 	if (this.platform.is('cordova')){
        this.cancelPush();
    }
 }

 setupPush(){
    this.oneSignal.startInit('04151687-ac41-44ad-8542-ac20c15783b0', '918241169212');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.None);

    this.oneSignal.handleNotificationReceived().subscribe(data => {
      let msg = data.payload.body;
      let title = data.payload.title;
      let additionalData = data.payload.additionalData;
      this.showAlert(title,msg,additionalData.task);
    });

    this.oneSignal.handleNotificationOpened().subscribe(data => {
      let additionalData = data.notification.payload.additionalData;
      this.showAlert('Ada Pesanan', 'Ada Pesanan Dari Pelanggan',additionalData.task);
    });
    
    this.oneSignal.endInit();
  }

  cancelPush(){
    this.oneSignal.startInit('04151687-ac41-44ad-8542-ac20c15783b0', '918241169212');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.None);

    this.oneSignal.handleNotificationReceived().subscribe(data => {
      console.log("skip dlu");
    });

    this.oneSignal.handleNotificationOpened().subscribe(data => {
      console.log("skip dlu");
    });
    
    this.oneSignal.endInit();
  }

   async showAlert(title, msg, task) {
    const alert = await this.alertCtrl.create({
      header: title,
      subHeader: msg,
      buttons: [
        {
          text: `${task}`,
          handler: () => {
            // E.g: Navigate to a specific screen
          }
        }
      ]
    })
    alert.present();
  }


 canActivate(route: ActivatedRouteSnapshot): boolean {

    if (!this.authInfo) {
        this.router.navigate(['/']);
        return false;
    }

    return true;

    }
}
