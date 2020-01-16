import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogininfoService implements CanActivate {
	
 constructor(private router: Router) {}

 authInfo = false;
 username = "";
 userId = "";
 host = 'cateringkevyn.000webhostapp.com/';

 login(user,id){
 	this.authInfo = true;
 	this.username = user;
 	this.userId = id;
 }

  logout(){
 	this.authInfo = false;
 	this.username = "";
 	this.userId = "";
 }


 canActivate(route: ActivatedRouteSnapshot): boolean {

    if (!this.authInfo) {
        this.router.navigate(['/']);
        return false;
    }

    return true;

    }
}
