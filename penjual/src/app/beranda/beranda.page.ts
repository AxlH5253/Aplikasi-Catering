import { Component, OnInit } from '@angular/core';
import { LogininfoService } from '../logininfo.service';
import { Router, ActivatedRoute} from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx';
import {AlertController, Platform} from '@ionic/angular';

@Component({
  selector: 'app-beranda',
  templateUrl: './beranda.page.html',
  styleUrls: ['./beranda.page.scss'],
})
export class BerandaPage implements OnInit {
	
  items : any;
  id : any;

  username = "";
  showData = false;

  constructor(
  	private loginservice: LogininfoService,
    private activatedRoute : ActivatedRoute,
    private router : Router,
    private http : HTTP,
    private alertctrl : AlertController
  ) { }

  ngOnInit() {
    this.id = this.loginservice.userId;
  	this.username = this.loginservice.username;
  }

  ionViewDidEnter(){
    this.getPostData(this.id);
  }

  doRefresh(event) {
    this.getPostData(this.id);
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

  godetailPesanan(i){
    this.router.navigate(['/tabs/tab4/',i]);
  }

  getPostData(id) {
    this.items = [];
    var sampleData = [];
    let url = 'http://'+this.loginservice.host+'/kevyn/tampilpesanan.php';
    this.http.post(url,{'id':id},{})
     .then(data => {
        sampleData = data.data.split("*");
        for ( var i of sampleData){
          var j = i.split("#");
          this.items.push(j);
        }
        if(this.items[0].length<=1){
          this.showData = true;
        }
    });
  }
}
