import { Component, OnInit } from '@angular/core';
import { LogininfoService } from '../logininfo.service';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  
  username = "";

  constructor(
  	private loginservice: LogininfoService,
  	private activatedRoute : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit() {
  	this.username = this.loginservice.username;
  }

  goTampilProfil(){
    this.router.navigate(['/tabs/tab6']);
  }

  goRate(){
    this.router.navigate(['/tabs/tab18']);
  }

  logout(){
    this.loginservice.logout();
    this.router.navigate(['/home']);
  }

}
