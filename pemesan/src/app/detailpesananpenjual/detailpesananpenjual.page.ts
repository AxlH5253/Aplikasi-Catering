import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx';
import { AlertController, Platform} from '@ionic/angular';
import { LogininfoService } from '../logininfo.service';

@Component({
  selector: 'app-detailpesananpenjual',
  templateUrl: './detailpesananpenjual.page.html',
  styleUrls: ['./detailpesananpenjual.page.scss'],
})
export class DetailpesananpenjualPage implements OnInit {

  constructor(
  	private router : Router,
  	private http : HTTP,
  	private activatedRoute : ActivatedRoute,
  	private alertController: AlertController,
  	private loginservice : LogininfoService
  ) { }

  id : any;
  items : any;

  username = "";

  ngOnInit() {
  	 this.id = this.activatedRoute.snapshot.paramMap.get('id');
     this.username = this.loginservice.username;
  }

  ionViewDidEnter(){
    this.getPostData(this.id);
  }

  getPostData(id) {
    this.items = [];
    var sampleData = [];
    let url = 'http://'+this.loginservice.host+'/kevyn/detailpesanan.php';
    this.http.post(url,{'id':id},{})
     .then(data => {
        sampleData = data.data.split("*");
        for ( var i of sampleData){
          var j = i.split("#");
          if(j.length>=1){
            this.items.push(j);
          }
        }
      });
  }

  doRefresh(event) {
    this.getPostData(this.id);
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }


  showMap(id){
    this.router.navigate(['/tampilpetapesan/',id]);
  }

  async failCancelAlert(){
    const alert = await this.alertController.create({
      header: 'Tidak Dapat Dibatalkan',
      message: 'Pesanan sudah dikonfirmasi oleh penyedia sehingga tidak dapat dibatalkan',
      buttons: ['OK']
    });
    await alert.present();
  }

  rejectDelivery(id) {
    let url = 'http://'+this.loginservice.host+'/kevyn/tolakpesanan.php';
    this.http.post(url,{'id':id},{})
     .then(data => {
       this.router.navigate(['/dpesanan']);
      });
  }
}
