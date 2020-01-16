import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DaftarpesananService {

  constructor() { }

  dataPesanan :any;
  alamat :any;
  waktu :any;

  idPenjual: any;

  init(){
    this.dataPesanan = [];
    this.alamat = [];
    this.waktu = [];
  }
  
  addData(a) {
    this.dataPesanan.push(a);
  }

  showData(){
  	console.log(this.dataPesanan);
  }

  deleteData(){
   	this.dataPesanan.pop();
  }

  addAlamat(a,b,c){
    this.alamat.push(a);
    this.alamat.push(b);
    this.alamat.push(c);
  }

  showAlamat(){
    console.log(this.alamat);
  }

  deleteAlamat(){
    if(this.alamat.length >=3){
      this.alamat.pop();
      this.alamat.pop();
      this.alamat.pop();
    }
  }

  addWaktu(a,b){
    this.waktu.push(a);
    this.waktu.push(b);
  }

  showWaktu(){
    console.log(this.waktu);
  }

  deleteWaktu(){
    this.waktu.pop();
    this.waktu.pop();
  }
}