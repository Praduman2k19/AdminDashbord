import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts-angular';
// import { Highcharts } from 'highcharts-angular'
// import * as Highcharts from 'highcharts';
// import HC_exporting from 'highcharts-angular'
// HC_exporting(Highcharts)
// import Exporting from 'highcharts/modules/exporting';
// Exporting(Highcharts);
@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  chartOptions:any={}
  chartOptions2:any={}
  Highcharts = Highcharts; // required

  value:number=-1;



  constructor() {
      this.chartOptions2={
        chart: {
            type: 'area'
        },
        title: {
            text: 'Historic and Estimated Worldwide Population Growth by Region'
        },
        subtitle: {
            text: 'Source: Wikipedia.org'
        },
        xAxis: {
            categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
            tickmarkPlacement: 'on',
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
            valueSuffix: ' millions'
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
            data: [502, 635, 809, 947, 1402, 3634, 5268]
        }, {
            name: 'Africa',
            data: [106, 107, 111, 133, 221, 767, 1766]
        }, {
            name: 'Europe',
            data: [163, 203, 276, 408, 547, 729, 628]
        }, {
            name: 'America',
            data: [18, 31, 54, 156, 339, 818, 1201]
        }, {
            name: 'Oceania',
            data: [2, 2, 2, 6, 13, 30, 46]
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
   this.chartOptions= {
    title : { text : 'simple chart' },
    series: [{
        data: [29.9, 71.5, 106.4, 129.2],
    },
    {
        data: [2, 7, 10, 109],
    },
    {
        data: [50,70,56,34,98, 65 ,24 ,87, 67],
    }
  ]};
  setTimeout(()=>{
    window.dispatchEvent(
      new Event('resize')
    );
  },300)

  }

}
