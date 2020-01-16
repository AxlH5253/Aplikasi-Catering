import { Component,OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx';
import {AlertController, LoadingController} from '@ionic/angular';
import { LogininfoService } from '../logininfo.service';

@Component({
  selector: 'app-gkatasandi',
  templateUrl: './gkatasandi.page.html',
  styleUrls: ['./gkatasandi.page.scss'],
})
export class GkatasandiPage implements OnInit {

 loading: any;
 id:any

 username ="";
 kataSandi= "";
 kataSandiBru= "";
 kataSandiBruLg= "";

  constructor(
  	private http: HTTP,
  	private alertController: AlertController,
  	private loginservice: LogininfoService,
  	private router: Router,
  	private loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.id = this.loginservice.userId;
  	this.username = this.loginservice.username;
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

  getPostData(id){
  	if(this.kataSandi == "" || this.kataSandiBru == "" || this.kataSandiBruLg == ""){
  		this.emptyAlert();
  	}else if(this.kataSandiBru != this.kataSandiBruLg){
  		this.failKonPassAlert();
  	}else{
      this.presentLoading(true);
  		this.http.post('http://'+this.loginservice.host+'/kevyn/gpasspenjual.php',{'pass':this.kataSandi,'passb':this.kataSandiBru, 'id':id},{})
  		.then(data => {
  			if(data.data == 'gagal'){
            	this.loading.dismiss();
  				this.failPassAlert();
  			}else{
            	this.loading.dismiss();
            	console.log(data.data);
  				this.router.navigateByUrl('/tabs/tab3');
  			}
  		}).catch(err => {
            this.loading.dismiss()
            .then(()=>{
               this.failConnectAlert();
            });      
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

  async failPassAlert(){
    const alert = await this.alertController.create({
      header: 'Kesalahan',
      message: 'Kata sandi lama salah',
      buttons: ['OK']
    });
    await alert.present();
  }

  async failKonPassAlert(){
    const alert = await this.alertController.create({
      header: 'Kesalahan',
      message: 'Kata sandi dan konfirmasi kata sandi tidak sama',
      buttons: ['OK']
    });
    await alert.present();
  }

  async emptyAlert(){
    const alert = await this.alertController.create({
      header: 'Kesalahan',
      message: 'Tidak boleh ada form input yang kosong',
      buttons: ['OK']
    });
    await alert.present();
  }
}