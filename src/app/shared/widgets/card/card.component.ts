import { Component, OnInit } from '@angular/core';
import { Legend } from 'highcharts';
import * as Highcharts from 'highcharts-angular';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  chartOptions:any={}
  Highcharts = Highcharts; // required

  value:number=-1;



  constructor() {
      this.chartOptions={
        chart: {
            type: 'area',
            backgroundColor:null,
            borderWidth:0,
            margin:[2,2,2,2],
            height:60
        },
        title: {
            text: null
        },
        subtitle: {
            text: null
        },
        Legend:{
          enabled:false
        },
        creadits:{
          enabled:false
        },
        exporting:{
          enabled:false
        },
        xAxis: {
            categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
            tickmarkPlacement: 'off',
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'Billions'
            },
            labels: {
                formatter: ()=> {
                  this.value+=1
                    return this.value;
                }
            }
        },
        tooltip: {
            split: true,
            outside:true
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        series: [{
            name: 'Asia',
            data: [502, 635, 1509, 947, 3402, 3634, 1568, 2500]
        }
      ]
    };
    setTimeout(()=>{
      window.dispatchEvent(
        new Event('resize')
      );
    },300)
  }
  ngOnInit(): void {
  }

}
