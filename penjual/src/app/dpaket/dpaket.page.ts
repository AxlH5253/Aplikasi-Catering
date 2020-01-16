import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx';
import { AlertController, Platform} from '@ionic/angular';
import { LogininfoService } from '../logininfo.service';

@Component({
  selector: 'app-dpaket',
  templateUrl: './dpaket.page.html',
  styleUrls: ['./dpaket.page.scss'],
})
export class DpaketPage implements OnInit {

  constructor(
  	private router : Router,
  	private http : HTTP,
  	private activatedRoute : ActivatedRoute,
  	private loginservice : LogininfoService
  ) { }
  
  id : any;
  idPaket : any;
  items : any;
  jenis : any;
  header :any;

  username = "";
  chooseId = 0;

  ngOnInit() {
  	 this.id = this.loginservice.userId;
  	 this.idPaket = this.activatedRoute.snapshot.paramMap.get('id');
     this.username = this.loginservice.username;
     this.choseJenis();
  }

  checkValue(event){ 
    this.chooseId = event.detail.value;
  }

   ionViewDidEnter(){
     this.id = this.loginservice.userId;
     this.idPaket = this.activatedRoute.snapshot.paramMap.get('id');
     this.username = this.loginservice.username;
     this.choseJenis();
     
    this.getPostData(this.id, this.idPaket);
  }

  goAturMknan(id){
    if((this.idPaket == '1') && (id != 0)){
      this.router.navigate(['/tabs/tab10/',id]);
    } else if((this.idPaket == '2') && (id != 0)){
      this.router.navigate(['/tabs/tab12/',id]);
    }
  }

  goTambahPaket(data){
    this.router.navigate(['/tabs/tab13/',data]);
  }


  goUpdatePaket(id){
    if(id != 0){
      this.router.navigate(['/tabs/tab11/',id]);
    } 
  }

  hapusPaket(id,idPaket,jenis) {
    if(id != 0){
      let url = 'http://'+this.loginservice.host+'/kevyn/hapuspaket.php';
      this.http.post(url,{'id':id,'jenis': jenis},{})
       .then(data => {
         this.getPostData(this.id, this.idPaket);
        });
    }
  }

  choseJenis(){
    if (this.idPaket == '1' ){
      this.jenis = 'Kepala';
      this.header = 'prasmanan';
    }else{
      this.jenis = 'Kotak';
      this.header = 'kotak';
    }
  }

 getPostData(id,jenis) {
    this.items = [];
    var sampleData = [];
    this.http.post('http://'+this.loginservice.host+'/kevyn/makanan.php',{'id':id, 'jenis':jenis},{})
      .then(data => {
        sampleData = data.data.split("*");
        for ( var i of sampleData){
          var j = i.split("#");
          this.items.push(j);
        }
      });
  }

  doRefresh(event) {
    this.getPostData(this.id,this.idPaket);
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }
}
