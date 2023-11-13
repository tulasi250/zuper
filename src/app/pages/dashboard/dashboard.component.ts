import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import Highcharts from 'highcharts';
import { DataStoreService } from 'src/app/@core/config/data-store.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  barChart: any;
  constructor(private titleName: Title,private _dataStoreService: DataStoreService) {
    this.titleName.setTitle("Dashboard");
  }

  ngOnInit(): void {
    this._dataStoreService.setData('totalcount', 0);
    this.loadCharts();
  }

  loadCharts(){
    const id = 'container';
    const options =  {
      chart: {
          type: 'column'
      },

      title: {
          text: '',
          align: 'left'
      },

      xAxis: {
          categories: ['Gold', 'Silver', 'Bronze']
      },

      yAxis: {
          allowDecimals: false,
          min: 0,
          title: {
              text: 'Count medals'
          }
      },

      tooltip: {
          format: '<b>{key}</b><br/>{series.name}: {y}<br/>' +
              'Total: {point.stackTotal}'
      },

      plotOptions: {
          column: {
              stacking: 'normal'
          }
      },

      series: [{
          name: 'Norway',
          data: [148, 133, 124],
          stack: 'Europe'
      }, {
          name: 'Germany',
          data: [102, 98, 65],
          stack: 'Europe'
      }, {
          name: 'United States',
          data: [113, 122, 95],
          stack: 'North America'
      }, {
          name: 'Canada',
          data: [77, 72, 80],
          stack: 'North America'
      }, {
        name: 'India',
        data: [102, 98, 65],
        stack: 'India'
    }]
  };
  // @ts-ignore
  var chart = Highcharts.chart(id, options);
  }
}
