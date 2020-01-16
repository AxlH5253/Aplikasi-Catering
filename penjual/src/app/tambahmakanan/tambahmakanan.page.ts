import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx';
import { AlertController, Platform, LoadingController} from '@ionic/angular';
import { LogininfoService } from '../logininfo.service';

@Component({
  selector: 'app-tambahmakanan',
  templateUrl: './tambahmakanan.page.html',
  styleUrls: ['./tambahmakanan.page.scss'],
})
export class TambahmakananPage implements OnInit {
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
  loading: any;
  idPaket: any;

  namaMakanan = "";
  username = "";

  ngOnInit() {
  	 this.id = this.loginservice.userId;
  	 this.idPaket = this.activatedRoute.snapshot.paramMap.get('id');
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

  getPostData(idPaket,namaMakanan){
  	if(this.namaMakanan == ""){
  		this.emptyAlert();
  	}else{
      this.presentLoading(true);
  		this.http.post('http://'+this.loginservice.host+'/kevyn/tambahmakananprasmanan.php',{'id':idPaket,'makanan':namaMakanan},{})
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
      message: 'Makanan baru berhasil ditambahkan',
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
      message: 'Gagal tambah makanan',
      buttons: ['OK']
    });
    await alert.present();
  }

  async emptyAlert(){
    const alert = await this.alertController.create({
      header: 'Kesalahan',
      message: 'Nama makanan harus diisi!',
      buttons: ['OK']
    });
    await alert.present();
  }

}
