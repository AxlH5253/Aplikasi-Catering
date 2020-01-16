import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {AlertController, LoadingController,ActionSheetController, ToastController, Platform} from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor(
  	private router: Router,
  	private plt: Platform
  ) {
  	this.plt.backButton.subscribe(() => {
  		this.router.navigate(['/tabs/tab1']);
    });
  }

  ngOnInit() {
  }

}
