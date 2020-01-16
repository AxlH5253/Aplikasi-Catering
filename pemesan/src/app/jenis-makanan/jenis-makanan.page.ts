import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {AlertController, Platform} from '@ionic/angular';
import { LogininfoService } from '../logininfo.service';
import { DaftarpesananService } from '../daftarpesanan.service';

@Component({
  selector: 'app-jenis-makanan',
  templateUrl: './jenis-makanan.page.html',
  styleUrls: ['./jenis-makanan.page.scss'],
})
export class JenisMakananPage implements OnInit {

  constructor(
    private alertController: AlertController,
    private loginservice: LogininfoService,
    private daftarpensananservice: DaftarpesananService,
    private router: Router,
    private platform: Platform) { }

  data: any;
  items: any;
  host: any;
  username = "";

  ngOnInit() {
  	this.username = this.loginservice.username;
    this.daftarpensananservice.init();
    this.host = this.loginservice.host;
  }

  ionViewDidEnter(){
    if(this.daftarpensananservice.dataPesanan.length > 0){
       this.daftarpensananservice.deleteData();
       this.daftarpensananservice.init();
    }
    this.daftarpensananservice.showData();
  }

  goCateringPage(jenis){
    this.router.navigate(['/beranda',jenis])
    if(jenis=='1'){
        this.daftarpensananservice.addData('prasmanan');
    }else{
        this.daftarpensananservice.addData('kotak');
    }
  }

  goUserProfile(){
    this.router.navigateByUrl('/profiluser');
  }

  logout(){
    this.loginservice.logout();
    this.router.navigate(['/home']);
  }

}