import { Component, OnInit } from '@angular/core';
import { Legend } from 'highcharts';
import * as Highcharts from 'highcharts-angular';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  chartOptions1:any={}
  chartOptions2:any={}
  chartOptions3:any={}
  chartOptions4:any={}
  chartOptions5:any={}
  chartOptions6:any={}
  chartOptions7:any={}
  Highcharts = Highcharts; // required

  value:number=-1;
  constructor() {
    this.fun2()
    this.fun3()
    this.fun4()
    this.fun5()
    this.fun6()
    this.fun7()

   }

  ngOnInit(): void {
    this.chartOptions1={
      chart: {
          type: 'area',
          inverted: true
      },
      title: {
          text: 'Average fruit consumption during one week'
      },
      accessibility: {
          keyboardNavigation: {
              seriesNavigation: {
                  mode: 'serialize'
              }
          }
      },
      legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'top',
          x: -150,
          y: 100,
          floating: true,
          borderWidth: 1,
          backgroundColor: '#FFFFFF'
      },
      xAxis: {
          categories: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday'
          ]
      },
      yAxis: {
          title: {
              text: 'Number of units'
          },
          allowDecimals: false,
          min: 0
      },
      plotOptions: {
          area: {
              fillOpacity: 0.5
          }
      },
      series: [{
          name: 'John',
          data: [3, 4, 3, 5, 4, 10, 12]
      }, {
          name: 'Jane',
          data: [1, 3, 4, 3, 3, 5, 4]
      }]
  }
  setTimeout(()=>{
    window.dispatchEvent(
      new Event('resize')
    );
  },250)
  }


  fun2()
  {
    this.chartOptions2={
      chart: {
          type: 'area'
      },
      title: {
          text: 'Historic and Estimated Worldwide Population Distribution by Region'
      },
      subtitle: {
          text: 'Source: Wikipedia.org'
      },
      accessibility: {
          point: {
              valueDescriptionFormat: '{index}. {point.category}, {point.y:,.0f} millions, {point.percentage:.1f}%.'
          }
      },
      xAxis: {
          categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
          tickmarkPlacement: 'on',
          title: {
              enabled: false
          }
      },
      yAxis: {
          labels: {
              format: '{value}%'
          },
          title: {
              enabled: false
          }
      },
      tooltip: {
          pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.0f} millions)<br/>',
          split: true
      },
      plotOptions: {
          area: {
              stacking: 'percent',
              lineColor: '#ffffff',
              lineWidth: 1,
              marker: {
                  lineWidth: 1,
                  lineColor: '#ffffff'
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
      }]
  }
  }
  fun3(){
    this.chartOptions3={
      chart: {
          type: 'areaspline'
      },
      title: {
          text: 'Average fruit consumption during one week'
      },
      legend: {
          layout: 'vertical',
          align: 'left',
          verticalAlign: 'top',
          x: 150,
          y: 100,
          floating: true,
          borderWidth: 1,
          backgroundColor:'#FFFFFF'
      },
      xAxis: {
          categories: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday'
          ],
          plotBands: [{ // visualize the weekend
              from: 4.5,
              to: 6.5,
              color: 'rgba(68, 170, 213, .2)'
          }]
      },
      yAxis: {
          title: {
              text: 'Fruit units'
          }
      },
      tooltip: {
          shared: true,
          valueSuffix: ' units'
      },
      credits: {
          enabled: false
      },
      plotOptions: {
          areaspline: {
              fillOpacity: 0.5
          }
      },
      series: [{
          name: 'John',
          data: [3, 4, 3, 5, 4, 10, 12]
      }, {
          name: 'Jane',
          data: [1, 3, 4, 3, 3, 5, 4]
      },{
        name: 'Jane',
        data: [2, 4, 6, 5, 7, 5, 9]
    }]
  }
  }

  fun4()
  {
    this.chartOptions4={
      chart: {
          type: 'area'
      },
      title: {
          text: 'Area chart with negative values'
      },
      xAxis: {
          categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
      },
      credits: {
          enabled: false
      },
      series: [{
          name: 'John',
          data: [5, 3, 4, 7, 2]
      }, {
          name: 'Jane',
          data: [2, -2, -3, 2, 1]
      }, {
          name: 'Joe',
          data: [3, 4, 4, -2, 5]
      }]
  }
  }

  fun5()
  {
    this.chartOptions5={
      chart: {
          type: 'area'
      },
      title: {
          text: 'Fruit consumption *'
      },
      subtitle: {
          text: '* Jane\'s banana consumption is unknown',
          align: 'right',
          verticalAlign: 'bottom'
      },
      legend: {
          layout: 'vertical',
          align: 'left',
          verticalAlign: 'top',
          x: 100,
          y: 70,
          floating: true,
          borderWidth: 1,
          backgroundColor: '#FFFFFF'
      },
      xAxis: {
          categories: ['Apples', 'Pears', 'Oranges', 'Bananas', 'Grapes', 'Plums', 'Strawberries', 'Raspberries']
      },
      yAxis: {
          title: {
              text: 'Y-Axis'
          }
      },
      plotOptions: {
          area: {
              fillOpacity: 0.5
          }
      },
      credits: {
          enabled: false
      },
      series: [{
          name: 'John',
          data: [0, 1, 4, 4, 5, 2, 3, 7]
      }, {
          name: 'Jane',
          data: [1, 0, 3, null, 3, 1, 2, 1]
      }]
  }
  }

  fun6()
  {
    this.chartOptions6= {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      title: {
          text: 'Browser market shares in January, 2018'
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
          point: {
              valueSuffix: '%'
          }
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                  connectorColor: 'silver'
              }
          }
      },
      series: [{
          name: 'Share',
          data: [
              { name: 'Chrome', y: 61.41 },
              { name: 'Internet Explorer', y: 11.84 },
              { name: 'Firefox', y: 10.85 },
              { name: 'Edge', y: 4.67 },
              { name: 'Safari', y: 4.18 },
              { name: 'Other', y: 7.05 }
          ]
      }]
  }
  }


  fun7()
  {
    this.chartOptions7={
    chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45,
            beta: 0
        }
    },
    title: {
        text: 'Browser market shares at a specific website, 2014'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 35,
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }
    },
    series: [{
        type: 'pie',
        name: 'Browser share',
        data: [
            ['Firefox', 45.0],
            ['IE', 26.8],
            {
                name: 'Chrome',
                y: 12.8,
                sliced: true,
                selected: true
            },
            ['Safari', 8.5],
            ['Opera', 6.2],
            ['Others', 0.7]
        ]
    }]
}
  }


}
