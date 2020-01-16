import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {AlertController, Platform} from '@ionic/angular';
import { LogininfoService } from '../logininfo.service';

@Component({
  selector: 'app-makanan',
  templateUrl: './makanan.page.html',
  styleUrls: ['./makanan.page.scss'],
})
export class MakananPage implements OnInit {

  constructor(
    private alertController: AlertController,
    private loginservice: LogininfoService,
    private router: Router,
    private platform: Platform) { }

  data: any;
  items: any;
  host: any;
  username = "";

  ngOnInit() {
    this.username = this.loginservice.username;
    this.host = this.loginservice.host;
  }

  goDpaket(jenis){
    this.router.navigate(['/tabs/tab9',jenis])
  }
}