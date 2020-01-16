import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx';
import { AlertController, Platform, LoadingController} from '@ionic/angular';
import { LogininfoService } from '../logininfo.service';

@Component({
  selector: 'app-tambahpaket',
  templateUrl: './tambahpaket.page.html',
  styleUrls: ['./tambahpaket.page.scss'],
})
export class TambahpaketPage implements OnInit {

  constructor(
  	private router : Router,
  	private http : HTTP,
  	private activatedRoute : ActivatedRoute,
  	private alertController: AlertController,
  	private loginservice : LogininfoService,
  	private loadingController: LoadingController
  ) { }
  
  data: any;
  id: any;
  jenis: any;
  loading: any;

  harga = "";
  username = "";

  ngOnInit() {
  	 this.id = this.loginservice.userId;
  	 this.data = this.activatedRoute.snapshot.paramMap.get('data');
     this.username = this.loginservice.username;
     this.setJenis(this.data[1]);
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

  setJenis(jenisId){
	  if(jenisId == '1'){
	  	this.jenis = 'prasmanan';
	  }else{
	  	this.jenis = 'kotak';
	  }
  }

  getPostData(id,harga,jenis){
  	if(this.harga == ""){
  		this.emptyAlert();
  	}else{
      this.presentLoading(true);
  		this.http.post('http://'+this.loginservice.host+'/kevyn/tambahpaket.php',{'id':id,'harga':harga, 'jenis':jenis},{})
  		.then(data => {
  			if(data.data == 'gagal'){
            	this.loading.dismiss();
  				this.failPassAlert();
  			}else{
            	this.loading.dismiss();
            	this.SuccessAlert();
  				this.router.navigateByUrl('/tabs/tab2');
  			}
  		}).catch(err => {
            this.loading.dismiss()
            .then(()=>{
               this.failConnectAlert();
            });      
      });
  	}
  }

  async SuccessAlert(){
    const alert = await this.alertController.create({
      header: 'Berhasil',
      message: 'Paket baru berhasil ditambahkan',
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

  async failPassAlert(){
    const alert = await this.alertController.create({
      header: 'Kesalahan',
      message: 'Gagal tambah paket',
      buttons: ['OK']
    });
    await alert.present();
  }

  async emptyAlert(){
    const alert = await this.alertController.create({
      header: 'Kesalahan',
      message: 'Harga harus diisi!',
      buttons: ['OK']
    });
    await alert.present();
  }

}
