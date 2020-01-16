import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx';
import {AlertController, Platform} from '@ionic/angular';
import { LogininfoService } from '../logininfo.service';
import { DaftarpesananService } from '../daftarpesanan.service';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.page.html',
  styleUrls: ['./rate.page.scss'],
})
export class RatePage implements OnInit {

  constructor( private alertController: AlertController,
    private http: HTTP,
    private loginservice: LogininfoService,
    private daftarpensananservice: DaftarpesananService,
    private router: Router,
    private activatedRoute : ActivatedRoute,
    private platform: Platform
  ) { }

  data: any;
  items: any;
  id: any;
  host: any;
  idPembeli: any;
  nilai :any;

  username = "";
  namaPenjual = "";
  ulasan = "";

  colorStar1 = "medium";
  colorStar2 = "medium";
  colorStar3 = "medium";
  colorStar4 = "medium";
  colorStar5 = "medium";

  cStars = [1,2,3,4,5];

  ngOnInit() { 
    this.username = this.loginservice.username;  
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    this.host = this.loginservice.host;
    this.idPembeli = this.loginservice.userId;
    this.nilai = this.id[0];
    this.giveRate(this.nilai);
    this.getPostData(this.id[1]);
  }

  getPostData(id) {
    this.items = [];
    var sampleData = [];
    this.http.post('http://'+this.loginservice.host+'/kevyn/rate.php',{'id':id},{})
      .then(data => {
        sampleData = data.data.split("*");
        for ( var i of sampleData){
          var j = i.split("#");
          this.items.push(j);
        }
        this.namaPenjual = this.items[0][1]
      });
  }

  sendRatesData(idPenjual,idPembeli,nilai,ulasan) {
    this.items = [];
    var sampleData = [];
    this.http.post('http://'+this.loginservice.host+'/kevyn/sendrate.php',{'idPenjual':idPenjual,'idPembeli':idPembeli,'nilai':nilai,'ulasan':ulasan},{})
      .then(data => {
        this.getPostData(this.id[1]);
      });
  }

  giveRate(id){
    if(id == '1'){
      this.colorStar1 = "warning";
      this.colorStar2 = "medium";
      this.colorStar3 = "medium";
      this.colorStar4 = "medium";
      this.colorStar5 = "medium";
      this.nilai = '1';
    }else if(id == '2'){
      this.colorStar1 = "warning";
      this.colorStar2 = "warning";
      this.colorStar3 = "medium";
      this.colorStar4 = "medium";
      this.colorStar5 = "medium";
      this.nilai = '2';
    }else if(id == '3'){
      this.colorStar1 = "warning";
      this.colorStar2 = "warning";
      this.colorStar3 = "warning";
      this.colorStar4 = "medium";
      this.colorStar5 = "medium";
      this.nilai = '3';
    }else if(id == '4'){
      this.colorStar1 = "warning";
      this.colorStar2 = "warning";
      this.colorStar3 = "warning";
      this.colorStar4 = "warning";
      this.colorStar5 = "medium";
      this.nilai = '4';
    }else{
      this.colorStar1 = "warning";
      this.colorStar2 = "warning";
      this.colorStar3 = "warning";
      this.colorStar4 = "warning";
      this.colorStar5 = "warning";
      this.nilai = '5';
    }
  }

  logout(){
    this.loginservice.logout();
    this.router.navigate(['/home']);
  }


}