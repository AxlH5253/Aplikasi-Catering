import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { AlertController, Platform} from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';
import { LogininfoService } from '../logininfo.service';
import { DaftarpesananService } from '../daftarpesanan.service';

@Component({
  selector: 'app-laukkotak',
  templateUrl: './laukkotak.page.html',
  styleUrls: ['./laukkotak.page.scss'],
})
export class LaukkotakPage implements OnInit {

  constructor(
    private loginservice: LogininfoService,
    private daftarpensananservice: DaftarpesananService,
    private router: Router,
    private http: HTTP,
    private platform: Platform,
    private activatedRoute : ActivatedRoute
  ) { }

  username = "";
  data = "";

  items : any;

  ngOnInit() {
  	this.username = this.loginservice.username;
    this.data = this.activatedRoute.snapshot.paramMap.get('data');
    this.getPostData(this.data);
  }

  ionViewDidEnter(){
    if(this.daftarpensananservice.dataPesanan.length > 3){
      this.daftarpensananservice.deleteData();
    }
    this.daftarpensananservice.showData();
  }

  getPostData(id) {
    this.items = [];
    var sampleData = [];
    this.http.post('http://'+this.loginservice.host+'/kevyn/isikotak.php',{'id':id[2]},{})
      .then(data => {
        sampleData = data.data.split("*");
        for ( var i of sampleData){
          var j = i.split("#");
          this.items.push(j);
        }
        console.log(this.items);
        console.log(this.data[2]);
      });

  }

  goNextPage(i){
      this.daftarpensananservice.addData(this.items[i][2]);
      this.router.navigateByUrl('/petapemesan');
  }

  goUserProfile(){
    this.router.navigateByUrl('/profiluser');
  }

  logout(){
    this.loginservice.logout();
    this.router.navigate(['/home']);
  }

}