import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LogininfoService } from '../logininfo.service';
import { DaftarpesananService } from '../daftarpesanan.service';

@Component({
  selector: 'app-pilihwaktu',
  templateUrl: './pilihwaktu.page.html',
  styleUrls: ['./pilihwaktu.page.scss'],
})
export class PilihwaktuPage implements OnInit {

  username = "";
  tanggal = "2019-01-23T15:03:46.789";
  jam = "2019-01-23T15:03:46.789"

  constructor(
    private loginservice: LogininfoService,
    private daftarpensananservice: DaftarpesananService,
    private router: Router,
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit() {
  	this.username = this.loginservice.username;
  }

  ionViewDidEnter() {
    this.daftarpensananservice.showData();
    this.daftarpensananservice.showAlamat();
    
    this.daftarpensananservice.deleteWaktu();
    this.daftarpensananservice.showWaktu();
  }

  goUserProfile(){
    this.router.navigateByUrl('/profiluser');
  }

  goNextPage(){
    this.daftarpensananservice.addWaktu(this.tanggal.substring(0,10),this.jam.substring(11,16));
    this.router.navigateByUrl('/konfirmasipesanan');
  }

  logout(){
    this.loginservice.logout();
    this.router.navigate(['/home']);
  }

}