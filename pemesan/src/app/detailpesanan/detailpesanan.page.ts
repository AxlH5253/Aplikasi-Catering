import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx';
import { AlertController, Platform} from '@ionic/angular';
import { LogininfoService } from '../logininfo.service';

@Component({
  selector: 'app-detailpesanan',
  templateUrl: './detailpesanan.page.html',
  styleUrls: ['./detailpesanan.page.scss'],
})
export class DetailpesananPage implements OnInit {

  constructor(
  	private router : Router,
  	private http : HTTP,
  	private activatedRoute : ActivatedRoute,
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
    this.router.navigate(['/tabs/tab5/',id]);
  }

  rejectDelivery(id) {
    let url = 'http://'+this.loginservice.host+'/kevyn/tolakpesanan.php';
    this.http.post(url,{'id':id},{})
     .then(data => {
       this.router.navigate(['/tabs/tab1']);
      });
  }

  aceptDelivery(id) {
    let url = 'http://'+this.loginservice.host+'/kevyn/terimapesanan.php';
    this.http.post(url,{'id':id},{})
     .then(data => {
       this.getPostData(id)
      });
  }

}
