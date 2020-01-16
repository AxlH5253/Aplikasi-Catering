import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx';
import {AlertController, LoadingController} from '@ionic/angular';
import { LogininfoService } from '../logininfo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

 data: any;
 loading: any;
 nama_user= "";
 kata_sandi= "";

constructor(
    private http: HTTP, 
    private alertController: AlertController,
    private router: Router,
    private loginservice: LogininfoService,
    private loadingController: LoadingController
  ) {}

  ngOnInit(){
    this.presentLoading(false);
    this.loginservice.logout();
    this.nama_user ="";
    this.kata_sandi ="";
  }

  ionViewWillEnter(){
    if(this.loginservice.authInfo){
      this.router.navigateByUrl('/jenis-makanan');
    }
    this.nama_user ="";
    this.kata_sandi ="";
  }

  async presentLoading(value) {
    this.loading = await this.loadingController.create({
     message: 'Memuat',
     duration: 5000
    });
    if (value){
      await this.loading.present();
    }
  }

  login(){
  	if(this.nama_user == "" || this.kata_sandi == ""){
  		this.emptyAlert();
  	}else{
      this.presentLoading(true);
  		this.http.post('http://'+this.loginservice.host+'/kevyn/loginpembeli.php',{'Nama':this.nama_user, 'Pass':this.kata_sandi},{})
  		.then(data => {
  				if(data.data == 'gagal'){
            this.loading.dismiss();
  					this.failLoginAlert();
  				}else{
            this.loading.dismiss();
            this.loginservice.login(this.nama_user,data.data);
  					this.router.navigateByUrl('/jenis-makanan');
  				}
  		}).catch(err => {
            this.loading.dismiss()
            .then(()=>{
               this.failConnectAlert();
            })      
      });
  	}
  }

  async failConnectAlert(){
    const alert = await this.alertController.create({
      header: 'Kesalahan',
      message: 'Gagal terhubung ke server, periksa koneksi internet anda',
      buttons: ['OK']
    });
    await alert.present();
  }

  async failLoginAlert(){
    const alert = await this.alertController.create({
      header: 'Kesalahan',
      message: 'Nama user atau kata sandi tidak tepat',
      buttons: ['OK']
    });
    await alert.present();
  }

  async emptyAlert(){
    const alert = await this.alertController.create({
      header: 'Kesalahan',
      message: 'Nama dan kata sandi tidak boleh kosong!!!',
      buttons: ['OK']
    });
    await alert.present();
  }
}
