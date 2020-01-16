import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import {AlertController, LoadingController} from '@ionic/angular';
import { LogininfoService } from '../logininfo.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  data: any;
  loading: any;
  
  nama_user ="";
  kata_sandi ="";
  konfirmasi_kata_sandi ="";

  constructor(
    private http: HTTP, 
    private alertController: AlertController,
    private router: Router,
    private loginservice: LogininfoService,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.presentLoading(true)
  }

   ionViewWillEnter(){
    if(this.loginservice.authInfo){
      this.router.navigateByUrl('/jenis-makanan');
    }
     this.nama_user ="";
     this.kata_sandi ="";
     this.konfirmasi_kata_sandi ="";
  }

  async presentLoading(value) {
    this.loading = await this.loadingController.create({
     message: 'Memuat',
     duration: 5000
    });
    await this.loading.present();
    if (value){
      this.loading.dismiss();
    }else{
      await this.loading.onDidDismiss();
      this.failConnectAlert();
    }
  }

  postRequest(){ 
  	if((this.nama_user=="")||(this.kata_sandi=="")||(this.konfirmasi_kata_sandi=="")){
  	 this.emptyAlert();
  	}else if(this.kata_sandi!= this.konfirmasi_kata_sandi){
  	 this.notMatchPassAlert();
  	}else{
      this.presentLoading(false);
	  	this.http.post('http://'+this.loginservice.host+'/kevyn/daftar.php',{'Nama':this.nama_user, 'Pass':this.kata_sandi},{})
		  .then(data => {
        this.loading.dismiss();
        this.successRegisterAlert();
         this.router.navigate(['/home']);
		    console.log(data.data);
		  })
	 }	
  }

  async emptyAlert(){
    const alert = await this.alertController.create({
      header: 'Kesalahan',
      message: 'Semua data harus diisi.',
      buttons: ['OK']
    });
    await alert.present();
  }

  async notMatchPassAlert(){
    const alert = await this.alertController.create({
      header: 'Kesalahan',
      message: 'kata sandi dan konfirmasi kata sandi tidak sama.',
      buttons: ['OK']
    });
    await alert.present();
  }

  async successRegisterAlert(){
    const alert = await this.alertController.create({
      header: 'Berhasil',
      message: 'Akun anda telah dibuat',
      buttons: ['OK']
    });
    await alert.present();
  }

  async failConnectAlert(){
    const alert = await this.alertController.create({
      header: 'Kesalahan',
      message: 'Gagal terhubung ke server, periksa koneksi internet anda',
      buttons: ['OK']
    });
    await alert.present();
  }
}