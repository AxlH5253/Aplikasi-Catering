import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx';
import {AlertController, Platform} from '@ionic/angular';
import { LogininfoService } from '../logininfo.service';
import { DaftarpesananService } from '../daftarpesanan.service';

@Component({
  selector: 'app-makanan',
  templateUrl: './makanan.page.html',
  styleUrls: ['./makanan.page.scss'],
})
export class MakananPage implements OnInit {
  constructor(
    private alertController: AlertController,
    private http: HTTP,
    private loginservice: LogininfoService,
    private daftarpensananservice: DaftarpesananService,
    private router: Router,
    private platform: Platform,
    private activatedRoute : ActivatedRoute
   ) { }

  data: any;
  items: any;
  id:string;
  username = "";
  jenis = "";

  ngOnInit() {
  	this.username = this.loginservice.username;
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getPostData(this.id);
    this.choseJenis();
  }

  ionViewDidEnter(){
    if(this.daftarpensananservice.dataPesanan.length > 2){
      this.daftarpensananservice.deleteData();
    }
    this.daftarpensananservice.showData();
  }

  choseJenis(){
    if (this.id[1] == '1' ){
      this.jenis = 'Kepala';
    }else{
      this.jenis = 'Kotak';
    }
  }

  goNextPage(data,i){
    this.daftarpensananservice.addData(this.items[i][2]);
    if (this.id[1] == '1' ){
      this.router.navigate(['/laukkatering',data]);
    }else{
      this.router.navigate(['/laukkotak',data]);
    }
  }

  goUserProfile(){
    this.router.navigateByUrl('/profiluser');
  }
  
  getPostData(id) {
    this.items = [];
    var sampleData = [];
    this.http.post('http://'+this.loginservice.host+'/kevyn/makanan.php',{'id':id[0], 'jenis':id[1]},{})
      .then(data => {
        sampleData = data.data.split("*");
        for ( var i of sampleData){
          var j = i.split("#");
          this.items.push(j);
        }
      });
  }

  logout(){
    this.loginservice.logout();
    this.router.navigate(['/home']);
  }

}