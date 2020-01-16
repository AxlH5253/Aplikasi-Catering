import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx';
import {AlertController, Platform} from '@ionic/angular';
import { LogininfoService } from '../logininfo.service';
import { Map, latLng, tileLayer, Layer, marker } from 'leaflet';

@Component({
  selector: 'app-tampilpetapesan',
  templateUrl: './tampilpetapesan.page.html',
  styleUrls: ['./tampilpetapesan.page.scss'],
})
export class TampilpetapesanPage implements OnInit {

@ViewChild('map') mapContainer: ElementRef;
map:any;

username = "";

items : any;
id:any;

  constructor(
  	private alertController: AlertController,
    private http: HTTP,
    private loginservice: LogininfoService,
    private router: Router,
    private platform: Platform,
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit() {
  	this.username = this.loginservice.username;
  	this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ionViewDidEnter(){
    this.getPostData(this.id);
  }

  initPeta(ltd,lng){
    if(this.map != null){
      this.map.remove();
    }

    this.leafletMap(ltd, lng);
  }

   leafletMap(ltd,lng) {
    this.map = new Map('map').setView([ltd,lng], 25);
    tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributorsss',
    }).addTo(this.map);
    this.map.locate({
      setView: true,
      zoom:25,
      maxZoom: 25
    });

    var lokasiantar = marker([ltd, lng],{
       draggable: false
    });

    lokasiantar.addTo(this.map)
       .bindPopup('Lokasi Antar')
       .openPopup();
  }

  getPostData(id) {
    this.items = [];
    var sampleData = [];
    let url = 'http://'+this.loginservice.host+'/kevyn/tampilpeta.php';
    this.http.post(url,{'id':id},{})
     .then(data => {
        sampleData = data.data.split("*");
        for ( var i of sampleData){
          var j = i.split("#");
          if(j.length>=1){
            this.items.push(j);
          }
          this.initPeta(this.items[0][0], this.items[0][1]);
        }
      });
  }

}
