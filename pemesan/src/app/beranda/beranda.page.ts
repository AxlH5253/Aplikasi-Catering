import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx';
import {AlertController, Platform} from '@ionic/angular';
import { LogininfoService } from '../logininfo.service';
import { DaftarpesananService } from '../daftarpesanan.service';

@Component({
  selector: 'app-beranda',
  templateUrl: './beranda.page.html',
  styleUrls: ['./beranda.page.scss'],
})
export class BerandaPage implements OnInit {

  constructor(
    private alertController: AlertController,
    private http: HTTP,
    private loginservice: LogininfoService,
    private daftarpensananservice: DaftarpesananService,
    private router: Router,
    private activatedRoute : ActivatedRoute,
    private platform: Platform
  ) {}

  data: any;
  items: any;
  jenis:string;
  host: any;

  username = ""

  colorStar1 = "medium";
  colorStar2 = "medium";
  colorStar3 = "medium";
  colorStar4 = "medium";
  colorStar5 = "medium";

  ngOnInit() {
    this.getPostData();  
    this.username = this.loginservice.username;  
    this.jenis = this.activatedRoute.snapshot.paramMap.get('jenis');
    this.host = this.loginservice.host;
  }

  ionViewDidEnter(){
    this.getPostData();
    this.giveRate('00');
    if(this.daftarpensananservice.dataPesanan.length > 1){
       this.daftarpensananservice.deleteData();
    }
    this.daftarpensananservice.showData();
  }

  doRefresh(event) {
    this.getPostData();
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

  getPostData() {
    this.items = [];
    var sampleData = [];
    let url = 'http://'+this.loginservice.host+'/kevyn/catering.php';
    this.http.get(url,{},{})
     .then(data => {
        sampleData = data.data.split("*");
        for ( var i of sampleData){
          var j = i.split("#");
          this.items.push(j);
        }
    });
  }

  goUserProfile(){
    this.router.navigateByUrl('/profiluser');
  }

  goFoodPage(id,i){
    this.daftarpensananservice.addData(this.items[i][1]);
    this.daftarpensananservice.idPenjual = id[0];
    this.router.navigate(['/makanan/',id]);
  }

  giveRate(id){
    if(id[0] == '1'){
      this.colorStar1 = "warning";
      this.colorStar2 = "medium";
      this.colorStar3 = "medium";
      this.colorStar4 = "medium";
      this.colorStar5 = "medium";
      this.router.navigate(['/rate',id]);
    }else if(id[0] == '2'){
      this.colorStar1 = "warning";
      this.colorStar2 = "warning";
      this.colorStar3 = "medium";
      this.colorStar4 = "medium";
      this.colorStar5 = "medium";
      this.router.navigate(['/rate',id]);
    }else if(id[0] == '3'){
      this.colorStar1 = "warning";
      this.colorStar2 = "warning";
      this.colorStar3 = "warning";
      this.colorStar4 = "medium";
      this.colorStar5 = "medium";
      this.router.navigate(['/rate',id]);
    }else if(id[0] == '4'){
      this.colorStar1 = "warning";
      this.colorStar2 = "warning";
      this.colorStar3 = "warning";
      this.colorStar4 = "warning";
      this.colorStar5 = "medium";
      this.router.navigate(['/rate',id]);
    }else if(id[0] == '5'){
      this.colorStar1 = "warning";
      this.colorStar2 = "warning";
      this.colorStar3 = "warning";
      this.colorStar4 = "warning";
      this.colorStar5 = "warning";
      this.router.navigate(['/rate',id]);
    }else{
      this.colorStar1 = "medium";
      this.colorStar2 = "medium";
      this.colorStar3 = "medium";
      this.colorStar4 = "medium";
      this.colorStar5 = "medium";
    }
  }

  logout(){
    this.loginservice.logout();
    this.router.navigate(['/home']);
  }

}
