import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx';
import {AlertController, LoadingController} from '@ionic/angular';
import { LogininfoService } from '../logininfo.service';

@Component({
  selector: 'app-updatepaket',
  templateUrl: './updatepaket.page.html',
  styleUrls: ['./updatepaket.page.scss'],
})
export class UpdatepaketPage implements OnInit {

  
 loading: any;
 id:any;
 idPaket: any;
 items: any;
 jenis: any;

 username ="";
 harga ="";
 hargab = "";

  constructor(
  	private http: HTTP,
  	private alertController: AlertController,
  	private loginservice: LogininfoService,
  	private router: Router,
  	private activatedRoute : ActivatedRoute,
  	private loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.id = this.loginservice.userId;
  	this.username = this.loginservice.username;
  }

  ionViewDidEnter(){
     this.idPaket = this.activatedRoute.snapshot.paramMap.get('id');
     this.username = this.loginservice.username;
     
     this.selectPaket(this.idPaket);
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

  selectPaket(id) {
    this.items = [];
    var sampleData = [];
    this.http.post('http://'+this.loginservice.host+'/kevyn/tampilsatupaket.php',{'id':id},{})
      .then(data => {
        sampleData = data.data.split("*");
        for ( var i of sampleData){
          var j = i.split("#");
          this.items.push(j);
        }
        this.harga = this.items[0][1];
        this.jenis = this.items[0][2];
      });
  }

  getPostData(id,harga,hargab){
  	if(this.hargab == ""){
  		this.emptyAlert();
  	}else if(hargab == harga){
  		this.failKonPassAlert();
  	}else{
      this.presentLoading(true);
  		this.http.post('http://'+this.loginservice.host+'/kevyn/updatepaket.php',{'id':id,'hargab':hargab, 'harga':harga},{})
  		.then(data => {
  			if(data.data == 'gagal'){
            	this.loading.dismiss();
  				this.failPassAlert();
  			}else{
            	this.loading.dismiss();
            	console.log(data.data);
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
      message: 'Gagal update paket',
      buttons: ['OK']
    });
    await alert.present();
  }

  async failKonPassAlert(){
    const alert = await this.alertController.create({
      header: 'Kesalahan',
      message: 'Harga baru sama dengan harga lama',
      buttons: ['OK']
    });
    await alert.present();
  }

  async emptyAlert(){
    const alert = await this.alertController.create({
      header: 'Kesalahan',
      message: 'Harga baru harus diisi!',
      buttons: ['OK']
    });
    await alert.present();
  }

}
