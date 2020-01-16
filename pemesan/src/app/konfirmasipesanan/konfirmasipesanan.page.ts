import { Component, OnInit,ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {AlertController, Platform, LoadingController} from '@ionic/angular';
import { LogininfoService } from '../logininfo.service';
import { DaftarpesananService } from '../daftarpesanan.service';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-konfirmasipesanan',
  templateUrl: './konfirmasipesanan.page.html',
  styleUrls: ['./konfirmasipesanan.page.scss'],
})
export class KonfirmasipesananPage implements OnInit {
  
  data: any;
  loading: any;

  username = "";
  konfirPesan = "";
  isiKotak = "-";
  showData = true;
  btnColor = "medium";
  jmlhKepala = 50;

  constructor(
 	  private alertController: AlertController,
    private http: HTTP, 
    private loginservice: LogininfoService,
    private daftarpensananservice: DaftarpesananService,
    private router: Router,
    private platform: Platform,
    private activatedRoute : ActivatedRoute,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
  	this.username = this.loginservice.username;
    this.presentLoading(true)
  }

  ionViewDidEnter() {
    this.showDataOption();
    this.daftarpensananservice.showData();
    this.daftarpensananservice.showAlamat();
    this.daftarpensananservice.showWaktu();
    console.log(this.daftarpensananservice.idPenjual);
    console.log(this.loginservice.userId);
  }

  goUserProfile(){
    this.router.navigateByUrl('/profiluser');
  }

  showDataOption(){
    if (this.daftarpensananservice.dataPesanan.length >= 4){
      this.showData = false;
      this.isiKotak = this.daftarpensananservice.dataPesanan[3];
    }else if( this.daftarpensananservice.dataPesanan.length <= 1){
      this.router.navigateByUrl('/home');
    }else{
      this.isiKotak = "-";
    }
  }

  setJumlahKepala(x){
   if(x){
     if(this.jmlhKepala < 100){
        this.jmlhKepala+=50;
     }
   }else{
      if(this.jmlhKepala > 50){
        this.jmlhKepala-=50    
      }
   }

  }

  enableButton(){
    if ((this.konfirPesan.length > 0) && (this.konfirPesan.toString().match(/^[0-9]+(\.?[0-9]+)?$/))){ 
      this.btnColor = "success";
    }else{
      this.btnColor = "medium";
    }
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

  postRequest(){ 
      if(this.btnColor == "success"){
        this.presentLoading(false);
        this.http.post('http://'+this.loginservice.host+'/kevyn/pemesanan.php',{'id_pembeli':this.loginservice.userId,'id_penjual':this.daftarpensananservice.idPenjual,'jenis_katering':this.daftarpensananservice.dataPesanan[0],'harga_per_kepala':this.daftarpensananservice.dataPesanan[2],'banyak_kepala':this.jmlhKepala,'isi_kotak':this.isiKotak,'alamat_antar':this.daftarpensananservice.alamat[2],'ltd':this.daftarpensananservice.alamat[0],'lng':this.daftarpensananservice.alamat[1],'waktu_antar':this.daftarpensananservice.waktu[0]+':'+this.daftarpensananservice.waktu[1],'no_hp':this.konfirPesan},{})
        .then(data => {
          this.http.post('http://'+this.loginservice.host+'/kevyn/sendnotif.php',{},{});
          this.loading.dismiss();
          this.successAlert();
          this.router.navigateByUrl('/jenis-makanan');
        }).catch(err =>{
           this.loading.dismiss();
           this.failConnectAlert();
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

   async successAlert(){
    const alert = await this.alertController.create({
      header: 'Pesanan Telah Dibuat',
      message: 'Tunggu konfirmasi dari pihak penyedia katering',
      buttons: ['OK']
    });
    await alert.present();
  }

  logout(){
    this.loginservice.logout();
    this.router.navigate(['/home']);
  }

}
