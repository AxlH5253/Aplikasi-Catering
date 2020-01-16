import { Component, OnInit } from '@angular/core';
import { LogininfoService } from '../logininfo.service';
import { Router, ActivatedRoute} from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx';
import {AlertController, Platform} from '@ionic/angular';

@Component({
  selector: 'app-tampilprofil',
  templateUrl: './tampilprofil.page.html',
  styleUrls: ['./tampilprofil.page.scss'],
})
export class TampilprofilPage implements OnInit {

  items : any;
  id : any;

  username = "";
  host = this.loginservice.host;

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

  ionViewWillEnter(){
    this.getPostData(this.id);
  }

  goGprofil(){
    this.router.navigate(['/tabs/tab8']);
  }

  goGpassword(){
    this.router.navigate(['/tabs/tab7']);
  }

  getPostData(id) {
    this.items = [];
    var sampleData = [];
    let url = 'http://'+this.loginservice.host+'/kevyn/tampilprofilpenjual.php';
    this.http.post(url,{'id':id},{})
     .then(data => {
        sampleData = data.data.split("*");
        for ( var i of sampleData){
          var j = i.split("#");
          this.items.push(j);
        }
    });
  }

}
