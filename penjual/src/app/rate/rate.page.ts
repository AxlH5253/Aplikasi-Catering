import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Chart } from "chart.js";
import { Router, ActivatedRoute} from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx';
import { AlertController, Platform} from '@ionic/angular';
import { LogininfoService } from '../logininfo.service';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.page.html',
  styleUrls: ['./rate.page.scss'],
})
export class RatePage implements OnInit {

  @ViewChild("barhorizontalCanvas",{static:true}) barhorizontalCanvas: ElementRef;

  private barChart: Chart;
  private doughnutChart: Chart;
  private lineChart: Chart;

  id: any;
  data: any;
  items: any;
  rata: any;

  cStars = [1,2,3,4,5];

  constructor(
  	private http: HTTP,
    private loginservice: LogininfoService,
    private router: Router,
    private activatedRoute : ActivatedRoute,
    private platform: Platform
  ) { }

  ngOnInit() {
  	this.id = this.loginservice.userId
  	this.getPostData(this.id);  
    this.getItemsData(this.id);  
  }

  getPostData(id) {
    this.data = [];
    var sampleData = [];
    this.http.post('http://'+this.loginservice.host+'/kevyn/prate.php',{'id':id},{})
      .then(data => {
        sampleData = data.data.split("*");
        for ( var i of sampleData){
          var j = i.split("#");
          this.data.push(j);
        }
        this.makeChart(this.data[0][0],this.data[0][1],this.data[0][2],this.data[0][3],this.data[0][4]);
        this.rata = this.data[0][5];
      });
  }

  getItemsData(id) {
    this.items = [];
    var sampleData = [];
    this.http.post('http://'+this.loginservice.host+'/kevyn/rate.php',{'id':id},{})
      .then(data => {
        sampleData = data.data.split("*");
        for ( var i of sampleData){
          var j = i.split("#");
          this.items.push(j);
        }
      });
  }

  makeChart(data1,data2,data3,data4,data5){
  	this.barChart = new Chart(this.barhorizontalCanvas.nativeElement, {
      type: "bar",
      data: {
        labels: ["1 bintang", "2 bintang", "3 bintang", "4 bintang", "5 bintang"],
        datasets: [
          {
            label: "Penilaian user",
            data: [data1, data2,data3, data4, data5],
            backgroundColor: [
              "rgba(50, 168, 82, 0.2)",
              "rgba(50, 168, 82, 0.2)",
              "rgba(50, 168, 82, 0.2)",
              "rgba(50, 168, 82, 0.2)",
              "rgba(50, 168, 82, 0.2)"
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(50, 168, 82, 1)",
              "rgba(50, 168, 82, 1)",
              "rgba(50, 168, 82, 1)",
              "rgba(50, 168, 82, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }


}
