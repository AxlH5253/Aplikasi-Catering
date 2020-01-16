import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {AlertController, Platform} from '@ionic/angular';
import { LogininfoService } from '../logininfo.service';
import { Map, latLng, tileLayer, Layer, marker } from 'leaflet';
import { DaftarpesananService } from '../daftarpesanan.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-petapemesan',
  templateUrl: './petapemesan.page.html',
  styleUrls: ['./petapemesan.page.scss'],
})
export class PetapemesanPage implements OnInit {

@ViewChild('map') mapContainer: ElementRef;
map:any;

  constructor(
    private alertController: AlertController,
    private geolocation: Geolocation,
    private http: HttpClient,
    private loginservice: LogininfoService,
    private daftarpensananservice: DaftarpesananService,
    private router: Router,
    private platform: Platform,
    private activatedRoute : ActivatedRoute
  ) { }

  username = "";
  detaliAlamatText = "";
  btnColor = "medium";

  ionViewDidEnter() {
    this.lokasiawal();
    this.daftarpensananservice.deleteAlamat();
    this.daftarpensananservice.showData();
    this.daftarpensananservice.showAlamat()
  }

  ngOnInit() {
  	this.username = this.loginservice.username;
  }

  leafletMap() {
    this.map = new Map('map').setView([1.540986,124.7144456], 25);
    tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributorsss',
    }).addTo(this.map);
    this.map.locate({
      setView: true,
      zoom:25,
      maxZoom: 25
    })

    this.geolocation.getCurrentPosition().then((resp) => {
       var lokasiantar = marker([resp.coords.latitude, resp.coords.longitude],{
        draggable: 'true'
       })

       this.map.setView([resp.coords.latitude, resp.coords.longitude],25);

       document.getElementById("ltd").innerHTML = String(resp.coords.latitude);
       document.getElementById("lng").innerHTML = String(resp.coords.longitude);

       lokasiantar.addTo(this.map)
        .bindPopup('Lokasi Antar')
        .openPopup();

       lokasiantar.on('dragend', function(event) {
        var position = lokasiantar.getLatLng();
        lokasiantar.setLatLng(position, {
          draggable: 'true'
        })
        .bindPopup('Lokasi Antar')
        .openPopupcon
        document.getElementById("ltd").innerHTML = position.lat;
        document.getElementById("lng").innerHTML = position.lng;

      });

    });

  }

  enableButton(){
    if (this.detaliAlamatText.length > 0){
      this.btnColor = "success";
    }else{
      this.btnColor = "medium";
    }
  }

  lokasiawal(){
    if(this.map != null){
      this.map.remove();
    }

    this.leafletMap();
  }

  goUserProfile(){
    this.router.navigateByUrl('/profiluser');
  }

  goNextPage(){
    if (this.detaliAlamatText.length > 0){
      this.daftarpensananservice.addAlamat(document.getElementById("ltd").innerHTML,document.getElementById("lng").innerHTML,this.detaliAlamatText);
      this.router.navigateByUrl('/pilihwaktu');
    }
  }

  logout(){
    this.loginservice.logout();
    this.router.navigate(['/home']);
  }

}