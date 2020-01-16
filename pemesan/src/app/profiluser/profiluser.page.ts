import { Component, OnInit } from '@angular/core';
import { LogininfoService } from '../logininfo.service';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profiluser',
  templateUrl: './profiluser.page.html',
  styleUrls: ['./profiluser.page.scss'],
})
export class ProfiluserPage implements OnInit {
 username = "";

  constructor(
  	private loginservice: LogininfoService,
  	private activatedRoute : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit() {
  	this.username = this.loginservice.username;
  }

  goGpassl(){
    this.router.navigate(['/gpass']);
  }

  goDpesanan(){
    this.router.navigate(['/dpesanan']);
  }

  logout(){
    this.loginservice.logout();
    this.router.navigate(['/home']);
  }
}
