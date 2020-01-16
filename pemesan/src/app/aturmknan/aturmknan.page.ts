import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx';
import { AlertController, Platform} from '@ionic/angular';
import { LogininfoService } from '../logininfo.service';


@Component({
  selector: 'app-aturmknan',
  templateUrl: './aturmknan.page.html',
  styleUrls: ['./aturmknan.page.scss'],
})
export class AturmknanPage implements OnInit {

  constructor(
    private router : Router,
  	private http : HTTP,
  	private activatedRoute : ActivatedRoute,
  	private loginservice : LogininfoService
  ) { }

  id : any;
  items : any;
  idPaket : any;
  namaPaket : any;

  chooseId = 0;
  username = "";

  ngOnInit() {
  	this.id = this.loginservice.userId;
  	this.idPaket = this.activatedRoute.snapshot.paramMap.get('id');
  	this.username = this.loginservice.username;
  }

  ionViewDidEnter(){
    this.getPostData(this.idPaket);
  }

  checkValue(event){ 
    this.chooseId = event.detail.value;
  }

  goUpdateMakanan(id){
      if(id != 0){
        this.router.navigate(['/tabs/tab15/',id]);
      }
  }

  goTambahMakanan(id){
      this.router.navigate(['/tabs/tab16/',id]);
  }

  hapusMakanan(id) {
    if(id != 0){
      let url = 'http://'+this.loginservice.host+'/kevyn/hapusmakananprasmanan.php';
      this.http.post(url,{'id':id},{})
       .then(data => {
         this.getPostData(this.idPaket);
        });
    }
  }

   getPostData(id) {
    this.items = [];
    var sampleData = [];
    this.http.post('http://'+this.loginservice.host+'/kevyn/isiprasmanan.php',{'id':id},{})
      .then(data => {
        sampleData = data.data.split("*");
        for ( var i of sampleData){
          var j = i.split("#");
          this.items.push(j);
        }
        this.namaPaket = this.items[0][3];
      });
   }

  doRefresh(event) {
    this.getPostData(this.idPaket);
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

}
